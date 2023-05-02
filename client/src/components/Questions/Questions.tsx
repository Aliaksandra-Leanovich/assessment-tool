import { useGetQuestion } from "../../hooks";
import { Question } from "../Question/Question";
import { ContainerSC } from "./style";
import { IProps } from "./types";

export const Queshions = ({ setStatus, setAnswersToDb }: IProps) => {
  const { question, handleClick, questionNumber, button } = useGetQuestion(
    setStatus,
    setAnswersToDb
  );

  return (
    <ContainerSC>
      {question && (
        <Question
          button={button}
          question={question}
          handleClick={handleClick}
          questionNumber={questionNumber}
        />
      )}
    </ContainerSC>
  );
};
