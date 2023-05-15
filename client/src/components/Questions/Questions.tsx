import { useEffect, useState } from "react";
import { useGetQuestion, useHandleUpdateAnswer } from "../../hooks";
import { Number } from "../Number/Number";
import { Question } from "../Question/Question";
import { ContainerSC, NumbersContainerSC } from "./style";
import { IProps, IQuestion } from "./types";
import { Loader } from "../Loader/Loader";
import { useAppSelector } from "../../store/hooks";
import { getQuestions } from "../../store/selectors/questionsSelector";

export const Queshions = ({ setStatus, setAnswersToDb }: IProps) => {
  const { questions } = useAppSelector(getQuestions);
  const [text, setText] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>(
    questions[0]
  );
  const { questionNumber, button, setQuestionNumber, handleClick } =
    useGetQuestion(setStatus, setAnswersToDb);
  const { handleUpdateAnswer } = useHandleUpdateAnswer(setText);

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
            {questions.map((question, index) => (
              <Number
                key={question.id}
                question={question}
                children={index + 1}
                setQuestionNumber={setQuestionNumber}
                setCurrentQuestion={setCurrentQuestion}
                currentQuestion={currentQuestion}
                questionNumber={questionNumber}
                handleUpdateAnswer={handleUpdateAnswer}
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
