import React from "react";
import { IProps } from "./types";
import { ButtonContainerSC, ContainerQuestionSC } from "./style";
import { Button } from "../Button";
import { ButtonVariants } from "../../enums";

export const AdminQueston = ({ question }: IProps) => {
  return (
    <ContainerQuestionSC>
      <p>{question.question}</p>
      <ButtonContainerSC>
        {/* <Button variant={ButtonVariants.primary} children="Edit" /> */}
        <Button variant={ButtonVariants.primary} children="Delete" />
      </ButtonContainerSC>
    </ContainerQuestionSC>
  );
};
