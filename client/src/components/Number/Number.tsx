import { useCallback, useEffect, useState } from "react";
import { useHandleQuestionUpdate } from "../../hooks";
import { NumberSC } from "./style";
import { IProps } from "./types";

export const Number = ({
  question,
  children,
  setQuestionNumber,
  questionNumber,
  setCurrentQuestion,
  handleUpdateAnswer,
}: IProps) => {
  const [currentNumber, setCurrentNumber] = useState(false);
  const { handleQuestionUpdate, isAnswered } = useHandleQuestionUpdate(
    question,
    setQuestionNumber,
    setCurrentQuestion,
    handleUpdateAnswer
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
    <NumberSC
      answered={isAnswered}
      currentNumber={currentNumber}
      onClick={handleClick}
    >
      {children}
    </NumberSC>
  );
};
