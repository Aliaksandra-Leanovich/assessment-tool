import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ButtonVariants, Statuses } from "../../enums";
import { Button } from "../Button";
import { Loader } from "../Loader/Loader";
import {
  ContainerSC,
  SpanMediumColorfulSC,
  TextContainerSC,
  TextMediumBoldSC,
  TextSmallSC,
} from "./style";
import { IStartProps } from "./types";

export const Start = ({ setStatus, test }: IStartProps) => {
  const { t } = useTranslation();
  const totalQuestions =
    t("start.text.queshions") + test.total + t("queshions");

  const onClick = useCallback(() => {
    setStatus(Statuses.Test);
  }, [setStatus]);

  return (
    <>
      {+test.time > 0 ? (
        <ContainerSC>
          <TextContainerSC>
            <TextMediumBoldSC>
              {t("start.text.minutes")}
              <SpanMediumColorfulSC>
                {test.time} {t("minutes")}
              </SpanMediumColorfulSC>
            </TextMediumBoldSC>
            <TextMediumBoldSC>{totalQuestions}.</TextMediumBoldSC>
            <TextSmallSC>{t("start.text.descriptions")}</TextSmallSC>
          </TextContainerSC>
          <Button
            type="submit"
            disabled={test ? false : true}
            variant={ButtonVariants.primary}
            handleClick={onClick}
          >
            {t("button.start")}
          </Button>
        </ContainerSC>
      ) : (
        <Loader />
      )}
    </>
  );
};
