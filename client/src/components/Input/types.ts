import { InputHTMLAttributes } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";
import { IUserForm } from "../SigninForm/types";

interface IFormValues {
  email: string;
  password: string;
  errors?: string;
}

export interface IRegister extends FieldValues, IFormValues {}

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: Path<IFormValues>;
  register: UseFormRegister<IUserForm>;
  errors?: string | null;
}
