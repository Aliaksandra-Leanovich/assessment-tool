import { useEffect, useState } from "react";
import { useGetQuestion, useHandleUpdateAnswer } from "../../hooks";
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
  const [answered, setAnswered] = useState(false);
  const { handleUpdateAnswer } = useHandleUpdateAnswer(setText, setAnswered);

  useEffect(() => {
    if (!currentQuestion) {
      setCurrentQuestion(questions[0]);
    }
  }, [currentQuestion, questions]);

  useEffect(() => {
    console.log(text);
  }, [text]);

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
                answered={answered}
                setQuestionNumber={setQuestionNumber}
                setCurrentQuestion={setCurrentQuestion}
                questions={questions}
                currentQuestion={currentQuestion}
                questionNumber={questionNumber}
                handleUpdateAnswer={handleUpdateAnswer}
                text={text}
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
              setAnswered={setAnswered}
              handleUpdateAnswer={handleUpdateAnswer}
            />
          </ContainerSC>
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
