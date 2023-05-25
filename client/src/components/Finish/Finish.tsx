import { useForm } from "react-hook-form";
import { ButtonVariants } from "../../enums";
import { useAppSelector } from "../../store/hooks";
import { getAnswers } from "../../store/selectors/answersSelector";
import { getQuestions } from "../../store/selectors/questionsSelector";
import { Button } from "../Button";
import {
  ContainerSC,
  SpanMediumColorfulSC,
  TextMediumBoldSC,
  TextSmallSC,
} from "./styles";
import { IProps } from "./types";

export const Finish = ({ handleFinish }: IProps) => {
  const { questions } = useAppSelector(getQuestions);
  const { answers } = useAppSelector(getAnswers);
  const { handleSubmit } = useForm();

  return (
    <ContainerSC>
      <TextSmallSC>
        Are you sure that you want to finish the test?
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
