import { useCallback, useMemo, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ButtonVariants } from "../../enums";
import { useAppDispatch } from "../../store/hooks";
import { setAllAnswers } from "../../store/slices/answersSlice";
import { Button } from "../Button";
import { InputAnswer } from "../InputAnswer";
import {
  ContainerAnswerSC,
  ContainerButtonSC,
  ContainerSC,
  TextSC,
  TextSmallSC,
} from "./style";
import { IAnswerForm, IProps } from "./types";
import { Loader } from "../Loader/Loader";

export const Question = ({
  question,
  handleClick,
  questionNumber,
  button,
}: IProps) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const placeholderAnswer = t("input.answer");
  const questionText = t("question").toUpperCase();
  const [answer, setAnswer] = useState<string | null>(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { isDirty, isValid },
  } = useForm<IAnswerForm>({ mode: "onChange" });

  const userAnswer = useMemo(
    () => ({
      answer: answer,
      questionId: question.id,
    }),
    [answer, question]
  );

  const onSubmit = useCallback(() => {
    dispatch(setAllAnswers(userAnswer));
    handleClick();
    reset();
  }, [dispatch, handleClick, reset, userAnswer]);

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
              <Controller
                name="answer"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <InputAnswer
                    label="answer"
                    value={value}
                    onChange={onChange}
                    register={register}
                    setAnswer={setAnswer}
                    placeholder={placeholderAnswer}
                  />
                )}
                rules={{
                  required: true,
                }}
              />
            </ContainerAnswerSC>
            <ContainerButtonSC>
              <Button
                type="submit"
                variant={ButtonVariants.primary}
                disabled={!isDirty || !isValid}
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
