import { useHandleQuestionUpdate, useSetCurrentNumber } from "../../hooks";
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
  const { currentNumber } = useSetCurrentNumber(children, questionNumber);
  const { handleQuestionUpdate, isAnswered } = useHandleQuestionUpdate(
    question,
    setQuestionNumber,
    setCurrentQuestion,
    handleUpdateAnswer
  );

  return (
    <NumberSC
      answered={isAnswered}
      currentNumber={currentNumber}
      onClick={handleQuestionUpdate}
    >
      {children}
    </NumberSC>
  );
};
