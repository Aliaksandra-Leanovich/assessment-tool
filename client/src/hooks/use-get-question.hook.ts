import { useCallback, useEffect, useMemo, useState } from "react";
import { Statuses } from "../enums";
import { useGetQuestionsFromDB } from "./use-get-questions-from-db.hook";

export const useGetQuestion = (
  setStatus: (item: string) => void,
  setAnswersToDb: VoidFunction
) => {
  const { questions } = useGetQuestionsFromDB();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [button, setButton] = useState("Next question");

  const handleClick = useCallback(() => {
    setQuestionNumber(questionNumber + 1);
  }, [questionNumber]);

  useEffect(() => {
    if (questions.length && questions.length < questionNumber) {
      setStatus(Statuses.End);
      setAnswersToDb();
    }
    if (questions.length && questions.length === questionNumber) {
      setButton("Finish test");
    }
  }, [questionNumber, questions.length, setAnswersToDb, setStatus]);

  const question = useMemo(
    () => questions.length && questions[questionNumber - 1],
    [questions, questionNumber]
  );

  return { question, handleClick, questionNumber, button };
};
