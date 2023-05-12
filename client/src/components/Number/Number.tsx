import { useCallback, useEffect, useState } from "react";
import { useHandleQuestionUpdate } from "../../hooks";
import { NumberSC } from "./style";
import { IProps } from "./types";

export const Number = ({
  question,
  children,
  setText,
  setQuestionNumber,
  questionNumber,
  setCurrentQuestion,
  questions,
}: IProps) => {
  const [currentNumber, setCurrentNumber] = useState(false);

  const { handleQuestionUpdate } = useHandleQuestionUpdate(
    question,
    setText,
    setQuestionNumber,
    setCurrentQuestion,
    setCurrentNumber,
    questions
  );

  useEffect(() => {
    if (children === questionNumber) {
      setCurrentNumber(true);
    } else {
      setCurrentNumber(false);
    }
  }, [children, questionNumber]);

  const handleClick = useCallback(() => {
    handleQuestionUpdate();
  }, [handleQuestionUpdate]);

  return (
    <NumberSC currentNumber={currentNumber} onClick={handleClick}>
      {children}
    </NumberSC>
  );
};
