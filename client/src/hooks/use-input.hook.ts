import { useCallback, useMemo, useState } from "react";
import { useAppDispatch } from "../store/hooks";
import { setAllAnswers } from "../store/slices/answersSlice";

export const useInput = (
  text: string,
  questionId: string,
  handleUpdateAnswer: (id: string) => void,
  handleClick: VoidFunction,
  setText: (id: string) => void
) => {
  const dispatch = useAppDispatch();
  const [isDisable, setDisable] = useState(true);
  const userAnswer = useMemo(
    () => ({
      answer: text,
      questionId: questionId,
    }),
    [questionId, text]
  );

  const onSubmit = useCallback(() => {
    dispatch(setAllAnswers(userAnswer));
    handleClick();
    handleUpdateAnswer(questionId);
    setDisable(true);
  }, [dispatch, handleClick, handleUpdateAnswer, questionId, userAnswer]);

  const handleTextareaChange = useCallback(
    (value: string) => {
      setText(value);
      setDisable(false);
    },
    [setText, setDisable]
  );
  return { onSubmit, handleTextareaChange, isDisable };
};
