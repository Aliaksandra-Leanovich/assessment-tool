import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getAdminQuestions } from "../store/selectors/adminQuestionsSelector";
import { collection, onSnapshot } from "firebase/firestore";
import { Collections } from "../enums";
import { IQuestion } from "../components/Questions/types";
import { db } from "../utils/firebase";
import { setAllAdminQuestions } from "../store/slices/adminQuestionsSlice";

export const useGetAdminsQuestions = () => {
  const dispatch = useAppDispatch();
  const [questionsFromDB, setQuestions] = useState<Array<IQuestion>>([]);

  useEffect(() => {
    onSnapshot(collection(db, Collections.questions), (querySnapshot) => {
      const questions: any = [];
      querySnapshot.forEach((doc) => {
        questions.push(doc.data());
      });

      setQuestions(questions);
    });
  }, [dispatch, questionsFromDB]);

  useEffect(() => {
    if (questionsFromDB) {
      questionsFromDB.map((question) => {
        return dispatch(setAllAdminQuestions(question));
      });
    }
  }, [dispatch, questionsFromDB]);

  return { questionsFromDB };
};
