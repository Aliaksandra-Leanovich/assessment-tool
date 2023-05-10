import React from "react";
import { ButtonSC } from "./style";
import { IButton } from "./types";

export const Button = ({
  children,
  type,
  variant,
  disabled,
  handleClick,
}: React.PropsWithChildren<IButton>) => {
  return (
    <ButtonSC
      variant={variant}
      disabled={disabled}
      type={type}
      onClick={handleClick}
    >
      {children}
    </ButtonSC>
  );
};
