import { useCallback } from "react";
import { IQuestion } from "../components/Questions/types";
import { useAppSelector } from "../store/hooks";
import { getAnswers } from "../store/selectors/answersSelector";
import { getQuestions } from "../store/selectors/questionsSelector";

export const useHandleQuestionUpdate = (
  question: IQuestion,
  setQuestionNumber: (item: number) => void,
  setCurrentQuestion: (item: IQuestion) => void,
  handleUpdateAnswer: (item: string) => void
) => {
  const { answers } = useAppSelector(getAnswers);
  const { questions } = useAppSelector(getQuestions);
  const isAnswered = !!answers.find(
    (answer) => answer.questionId === question.id
  );

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
    question.id,
    questions,
    setCurrentQuestion,
    setQuestionNumber,
  ]);

  return { handleQuestionUpdate, isAnswered };
};
