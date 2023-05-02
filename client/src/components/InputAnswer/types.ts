import { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
  answer: string;
}

interface IRegister extends FieldValues, IFormValues {}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<IFormValues>;
  register: UseFormRegister<IRegister>;
  placeholder: string;
  setAnswer: (item: string) => void;
}
