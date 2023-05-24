import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import { IQuestion } from "../components/Questions/types";
import { Collections } from "../enums";
import { useAppDispatch } from "../store/hooks";
import { setAllAdminQuestions } from "../store/slices/adminQuestionsSlice";
import { db } from "../utils/firebase";

export const useGetAdminsQuestions = () => {
  const dispatch = useAppDispatch();
  const [questionsFromDB, setQuestions] = useState<Array<IQuestion>>([]);
  const [checked, setChecked] = useState<Array<IQuestion>>([]);

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

  useEffect(() => {
    const filtered = questionsFromDB?.filter((question) => question.checked);
    setChecked(filtered);
  }, [dispatch, questionsFromDB]);

  return { questionsFromDB, checked };
};
