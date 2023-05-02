import { ButtonHTMLAttributes } from "react";
import { ButtonVariants } from "../../enums";

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: VoidFunction;
  variant: ButtonVariants;
  disabled: boolean;
}
