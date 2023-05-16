import { useCallback, useEffect, useState } from "react";
import { Statuses } from "../enums";
import { useGetQuestionsFromDB } from "./use-get-questions-from-db.hook";

export const useGetQuestion = (
  setStatus: (item: string) => void,
  setAnswersToDb: VoidFunction
) => {
  const { questions } = useGetQuestionsFromDB();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [button, setButton] = useState("Save");

  const handleClick = useCallback(() => {
    if (questions.length && questions.length === questionNumber) {
      setQuestionNumber(questionNumber + 1);
    }
  }, [questionNumber, questions.length]);

  useEffect(() => {
    if (questions.length && questions.length < questionNumber) {
      setStatus(Statuses.End);
      setAnswersToDb();
    }
    if (questions.length && questions.length === questionNumber) {
      setButton("Finish test");
    } else {
      setButton("Save");
    }
  }, [questionNumber, questions.length, setAnswersToDb, setStatus]);

  return {
    handleClick,
    questionNumber,
    button,
    setQuestionNumber,
  };
};
