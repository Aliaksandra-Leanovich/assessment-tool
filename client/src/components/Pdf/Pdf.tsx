import { useEffect } from "react";
import { Statuses } from "../../enums";
import { useSendEmail } from "../../hooks";
import { IProps } from "./types";
import { ContainerSC, TextSC } from "./style";

export const Pdf = ({ status }: IProps) => {
  const { sendEmail } = useSendEmail();

  useEffect(() => {
    if (status === Statuses.End) {
      sendEmail();
    }
  }, [status]);

  return (
    <ContainerSC>
      <TextSC>Thank you for taking the test. We will get back to you.</TextSC>
    </ContainerSC>
  );
};
