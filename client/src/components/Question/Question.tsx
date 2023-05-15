import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ButtonVariants } from "../../enums";
import { useAppDispatch } from "../../store/hooks";
import { setAllAnswers } from "../../store/slices/answersSlice";
import { Button } from "../Button";
import { InputAnswer } from "../InputAnswer";
import { Loader } from "../Loader/Loader";
import {
  ContainerAnswerSC,
  ContainerButtonSC,
  ContainerSC,
  TextSC,
  TextSmallSC,
} from "./style";
import { IAnswerForm, IProps } from "./types";

export const Question = ({
  question,
  setText,
  text,
  questionNumber,
  handleUpdateAnswer,
  button,
  handleClick,
}: IProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const placeholderAnswer = t("input.answer");
  const questionText = t("question").toUpperCase();
  const [isDisable, setDisable] = useState(true);

  const { handleSubmit } = useForm<IAnswerForm>();

  const userAnswer = useMemo(
    () => ({
      answer: text,
      questionId: question.id,
    }),
    [question.id, text]
  );

  const onSubmit = useCallback(() => {
    dispatch(setAllAnswers(userAnswer));
    handleClick();
    handleUpdateAnswer(question.id);
    setDisable(true);
  }, [dispatch, handleClick, handleUpdateAnswer, question.id, userAnswer]);

  const handleTextareaChange = useCallback(
    (value: string) => {
      setText(value);
      setDisable(false);
    },
    [setText, setDisable]
  );

  return (
    <div>
      {question ? (
        <>
          <ContainerSC>
            <TextSmallSC>
              {questionText} {questionNumber}
            </TextSmallSC>
            <TextSC>{question.question}</TextSC>
          </ContainerSC>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ContainerAnswerSC>
              <InputAnswer
                value={text}
                onChange={handleTextareaChange}
                placeholder={placeholderAnswer}
              />
            </ContainerAnswerSC>
            <ContainerButtonSC>
              <Button
                type="submit"
                variant={ButtonVariants.primary}
                disabled={isDisable}
              >
                {button}
              </Button>
            </ContainerButtonSC>
          </form>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};
