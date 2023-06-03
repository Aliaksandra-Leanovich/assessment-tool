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
import { useTranslation } from "react-i18next";

export const Finish = ({ handleFinish }: IProps) => {
  const { t } = useTranslation();
  const { questions } = useAppSelector(getQuestions);
  const { answers } = useAppSelector(getAnswers);
  const { handleSubmit } = useForm();

  return (
    <ContainerSC>
      <TextSmallSC>
        {t("finish.test.title")}
        <TextMediumBoldSC>
          {t("finish.test.answered")}
          <SpanMediumColorfulSC> {answers.length} </SpanMediumColorfulSC>
          {t("finish.test.questions")}
          <SpanMediumColorfulSC> {questions.length}</SpanMediumColorfulSC>.
        </TextMediumBoldSC>
      </TextSmallSC>
      <form onSubmit={handleSubmit(handleFinish)}>
        <Button type="submit" variant={ButtonVariants.primary}>
          {t("button.test.finish")}
        </Button>
      </form>
    </ContainerSC>
  );
};
