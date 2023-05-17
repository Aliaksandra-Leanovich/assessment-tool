import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ButtonVariants } from "../../enums";
import { useInput } from "../../hooks/use-input.hook";
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
  const { t } = useTranslation();
  const placeholderAnswer = t("input.answer");
  const questionText = t("question").toUpperCase();
  const { handleSubmit } = useForm<IAnswerForm>();
  const { onSubmit, handleTextareaChange, isDisable } = useInput(
    text,
    question.id,
    handleUpdateAnswer,
    handleClick,
    setText
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
