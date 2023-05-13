import { useCallback } from "react";
import { IQuestion } from "../components/Questions/types";

export const useHandleQuestionUpdate = (
  question: IQuestion,
  setQuestionNumber: (item: number) => void,
  setCurrentQuestion: (item: IQuestion) => void,
  questions: Array<IQuestion>,
  handleUpdateAnswer: (item: string) => void
) => {
  const handleQuestionUpdate = useCallback(() => {
    questions.forEach((currentItem, index) => {
      if (currentItem.id === question?.id) {
        setQuestionNumber(index + 1);
        setCurrentQuestion(currentItem);
        handleUpdateAnswer(currentItem.id);
      }
    });
  }, [
    handleUpdateAnswer,
    question?.id,
    questions,
    setCurrentQuestion,
    setQuestionNumber,
  ]);

  return { handleQuestionUpdate };
};
