import { useEffect, useState } from "react";
import { useGetQuestion } from "../../hooks";
import { Number } from "../Number/Number";
import { Question } from "../Question/Question";
import { ContainerSC, NumbersContainerSC } from "./style";
import { IProps, IQuestion } from "./types";
import { Loader } from "../Loader/Loader";

export const Queshions = ({ setStatus, setAnswersToDb }: IProps) => {
  const { questionNumber, button, questions, setQuestionNumber, handleClick } =
    useGetQuestion(setStatus, setAnswersToDb);

  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>(
    questions[0]
  );
  const [text, setText] = useState("");

  useEffect(() => {
    if (!currentQuestion) {
      setCurrentQuestion(questions[0]);
    }
  }, [currentQuestion, questions]);

  return (
    <>
      {currentQuestion ? (
        <>
          <NumbersContainerSC>
            {questions.map((item, index) => (
              <Number
                key={item.id}
                question={item}
                children={index + 1}
                setText={setText}
                setQuestionNumber={setQuestionNumber}
                setCurrentQuestion={setCurrentQuestion}
                questions={questions}
                currentQuestion={currentQuestion}
                questionNumber={questionNumber}
              />
            ))}
          </NumbersContainerSC>
          <ContainerSC>
            <Question
              text={text}
              handleClick={handleClick}
              setText={setText}
              button={button}
              question={currentQuestion}
              questionNumber={questionNumber}
            />
          </ContainerSC>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
