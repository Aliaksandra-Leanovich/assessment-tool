import React from "react";
import { ButtonSC } from "./style";
import { IButton } from "./types";

export const Button = ({
  children,
  type,
  variant,
  handleClick,
  disabled,
}: React.PropsWithChildren<IButton>) => {
  return (
    <ButtonSC
      disabled={disabled}
      variant={variant}
      type={type}
      onClick={handleClick}
    >
      {children}
    </ButtonSC>
  );
};
