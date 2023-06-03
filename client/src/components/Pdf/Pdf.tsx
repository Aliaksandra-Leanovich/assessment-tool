import { useEffect } from "react";
import { Statuses } from "../../enums";
import { useSendEmail } from "../../hooks";
import { IProps } from "./types";
import { ContainerSC, TextSC } from "./style";
import { useTranslation } from "react-i18next";

export const Pdf = ({ status, handleLogout }: IProps) => {
  const { sendEmail } = useSendEmail();
  const { t } = useTranslation();

  useEffect(() => {
    if (status === Statuses.End) {
      sendEmail();
      setTimeout(function () {
        window.location.reload();
        handleLogout();
      }, 2000);
    }
  }, [handleLogout, sendEmail, status]);

  return (
    <ContainerSC>
      <TextSC>{t("pdf.text")}</TextSC>
    </ContainerSC>
  );
};
