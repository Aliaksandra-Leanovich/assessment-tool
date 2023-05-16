import React from "react";
import { Button } from "../Button";
import { useAppSelector } from "../../store/hooks";
import { getQuestions } from "../../store/selectors/questionsSelector";
import { useForm } from "react-hook-form";
import { getAnswers } from "../../store/selectors/answersSelector";
import { ButtonVariants } from "../../enums";
import { IProps } from "./types";
import {
  ContainerSC,
  SpanMediumColorfulSC,
  TextMediumBoldSC,
  TextSmallBoldSC,
  TextSmallSC,
} from "./styles";

export const Finish = ({ handleFinish }: IProps) => {
  const { questions } = useAppSelector(getQuestions);
  const { answers } = useAppSelector(getAnswers);
  const { handleSubmit } = useForm();

  return (
    <ContainerSC>
      <TextSmallSC>
        Are you sure that you want to <TextSmallBoldSC>finish </TextSmallBoldSC>
        the test?
        <TextMediumBoldSC>
          You have answered
          <SpanMediumColorfulSC> {answers.length} </SpanMediumColorfulSC>
          questions from
          <SpanMediumColorfulSC> {questions.length}</SpanMediumColorfulSC>.
        </TextMediumBoldSC>
      </TextSmallSC>
      <form onSubmit={handleSubmit(handleFinish)}>
        <Button type="submit" variant={ButtonVariants.primary}>
          Yes, I'm sure
        </Button>
      </form>
    </ContainerSC>
  );
};
