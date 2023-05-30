import { collection, onSnapshot } from "firebase/firestore";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import { IQuestion } from "../components/Questions/types";
import { Collections } from "../enums";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { setAllAdminQuestions } from "../store/slices/adminQuestionsSlice";
import { db } from "../utils/firebase";
import { getAdminQuestions } from "../store/selectors/adminQuestionsSelector";

export const useGetAdminsQuestions = () => {
  const dispatch = useAppDispatch();
  const { adminQuestions } = useAppSelector(getAdminQuestions);
  const [checked, setChecked] = useState<Array<IQuestion>>(adminQuestions);
  const [questions, setQuestions] = useState<Array<IQuestion>>([]);
  const [filteredQuestions, setFilteredQuestions] =
    useState<Array<IQuestion>>(adminQuestions);
  const [searchValueName, setSearchValue] = useState<string>("");

  useEffect(() => {
    onSnapshot(collection(db, Collections.questions), (querySnapshot) => {
      const questions: any = [];
      querySnapshot.forEach((doc) => {
        questions.push(doc.data());
      });
      setQuestions(questions);
      questions.map((question: IQuestion) => {
        return dispatch(setAllAdminQuestions(question));
      });
    });
  }, [dispatch]);

  useEffect(() => {
    const checked = questions?.filter((question) => question.checked);
    setChecked(checked);
    setFilteredQuestions(questions);
  }, [dispatch, questions]);

  const handleSearchName = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setSearchValue(event.target.value);

      setFilteredQuestions(
        questions.filter((question: IQuestion) => {
          return question.question
            .toLowerCase()
            .includes(event.target.value.toLowerCase());
        })
      );
    },
    [questions]
  );

  return {
    adminQuestions,
    checked,
    filteredQuestions,
    handleSearchName,
    searchValueName,
    setFilteredQuestions,
  };
};
