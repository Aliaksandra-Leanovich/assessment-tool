import { useCallback, useState } from "react";
import { Statuses } from "../enums";
import { useGetQuestionsFromDB } from "./use-get-questions-from-db.hook";

export const useGetQuestion = (
  setStatus: (item: string) => void,
  setAnswersToDb: VoidFunction
) => {
  const { questions } = useGetQuestionsFromDB();
  const [questionNumber, setQuestionNumber] = useState(1);

  const handleClick = useCallback(() => {
    if (questions.length && questions.length === questionNumber) {
      setQuestionNumber(questionNumber + 1);
    }
  }, [questionNumber, questions.length]);

  const handleFinish = useCallback(() => {
    if (questions.length) {
      setStatus(Statuses.End);
      setAnswersToDb();
    }
  }, [questions.length, setAnswersToDb, setStatus]);

  return {
    handleClick,
    questionNumber,
    setQuestionNumber,
    handleFinish,
  };
};
