import { useCallback, useEffect, useState } from "react";
import { useHandleQuestionUpdate } from "../../hooks";
import { NumberSC } from "./style";
import { IProps } from "./types";

export const Number = ({
  question,
  children,
  answered,
  setQuestionNumber,
  questionNumber,
  setCurrentQuestion,
  questions,
  text,
  handleUpdateAnswer,
}: IProps) => {
  const [currentNumber, setCurrentNumber] = useState(false);
  //   const [answered, setAnswered] = useState(false);

  const { handleQuestionUpdate } = useHandleQuestionUpdate(
    question,
    setQuestionNumber,
    setCurrentQuestion,
    questions,
    handleUpdateAnswer
  );

  useEffect(() => {
    if (children === questionNumber) {
      setCurrentNumber(true);
    } else {
      setCurrentNumber(false);
    }
  }, [children, questionNumber, text]);

  const handleClick = useCallback(() => {
    handleQuestionUpdate();
  }, [handleQuestionUpdate]);

  return (
    <NumberSC
      answered={answered}
      currentNumber={currentNumber}
      onClick={handleClick}
    >
      {children}
    </NumberSC>
  );
};
