import { useEffect } from "react";
import { Statuses } from "../../enums";
import { useSendEmail } from "../../hooks";
import { IProps } from "./types";
import { ContainerSC, TextSC } from "./style";

export const Pdf = ({ status, handleLogout }: IProps) => {
  const { sendEmail } = useSendEmail();

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
      <TextSC>Thank you for taking the test. We will get back to you.</TextSC>
    </ContainerSC>
  );
};
