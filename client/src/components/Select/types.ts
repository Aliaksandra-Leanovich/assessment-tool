import { UseFormRegister } from "react-hook-form";
import { IUserForm } from "../SigninForm/types";

export interface IOption {
  value: string;
  label: string;
}

export interface IProps {
  options: Array<IOption>;
  name: string;
  register: UseFormRegister<IUserForm>;
  setSelected: (item: string) => void;
  selected: string | null;
}

export interface IPropsOpen {
  isOpen: boolean;
}
