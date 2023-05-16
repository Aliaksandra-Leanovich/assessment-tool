import { useEffect, useState } from "react";
import {
  useGetQuestion,
  useHandleUpdateAnswer,
  useShowModal,
} from "../../hooks";
import { Number } from "../Number/Number";
import { Question } from "../Question/Question";
import { ButtonContainerSC, ContainerSC, NumbersContainerSC } from "./style";
import { IProps, IQuestion } from "./types";
import { Loader } from "../Loader/Loader";
import { useAppSelector } from "../../store/hooks";
import { getQuestions } from "../../store/selectors/questionsSelector";
import { Button } from "../Button";
import { ButtonVariants } from "../../enums";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Modal } from "../Modal/Modal";
import { Finish } from "../Finish/Finish";

export const Queshions = ({ setStatus, setAnswersToDb }: IProps) => {
  const { t } = useTranslation();
  const { questions } = useAppSelector(getQuestions);
  const [text, setText] = useState("");
  const [currentQuestion, setCurrentQuestion] = useState<IQuestion>(
    questions[0]
  );
  const { questionNumber, setQuestionNumber, handleClick, handleFinish } =
    useGetQuestion(setStatus, setAnswersToDb);
  const { handleUpdateAnswer } = useHandleUpdateAnswer(setText);
  const { handleSubmit } = useForm();
  const { show, showModal } = useShowModal();

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
              question={currentQuestion}
              questionNumber={questionNumber}
              handleUpdateAnswer={handleUpdateAnswer}
            />
          </ContainerSC>
          <ButtonContainerSC onSubmit={handleSubmit(showModal)}>
            <Button type="submit" variant={ButtonVariants.primary}>
              {t("button.finish")}
            </Button>
          </ButtonContainerSC>
          <Modal
            children={<Finish handleFinish={handleFinish} />}
            show={show}
            handleClose={showModal}
          />
        </>
      ) : (
        <Loader />
      )}
    </>
  );
};
