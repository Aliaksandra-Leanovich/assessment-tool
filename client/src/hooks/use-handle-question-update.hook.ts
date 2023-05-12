import { useCallback } from "react";
import { useAppSelector } from "../store/hooks";
import { getAnswers } from "../store/selectors/answersSelector";
import { IQuestion } from "../components/Questions/types";

export const useHandleQuestionUpdate = (
  question: IQuestion,
  setText: (item: string) => void,
  setQuestionNumber: (item: number) => void,
  setCurrentQuestion: (item: IQuestion) => void,
  setCurrentNumber: (item: boolean) => void,
  questions: Array<IQuestion>
) => {
  const { answers } = useAppSelector(getAnswers);

  const handleQuestionUpdate = useCallback(() => {
    questions.forEach((currentItem, index) => {
      if (currentItem.id === question?.id) {
        setQuestionNumber(index + 1);
        setCurrentQuestion(currentItem);
        const answer = answers.find(
          (item) => item.questionId === currentItem?.id && item.answer
        );
        if (answer?.answer) {
          setText(answer.answer);
        } else {
          setText("");
        }
      }
    });
  }, [
    answers,
    question?.id,
    questions,
    setCurrentQuestion,
    setQuestionNumber,
    setText,
  ]);

  return { handleQuestionUpdate };
};
