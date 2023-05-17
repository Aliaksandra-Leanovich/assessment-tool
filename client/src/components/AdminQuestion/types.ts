import { Dispatch, SetStateAction } from "react";
import { IQuestion } from "../Questions/types";

export interface IProps {
  question: IQuestion;
  checked: Array<IQuestion>;
  setChecked: Dispatch<SetStateAction<IQuestion[]>>;
}

export interface IStylesProps {
  edit: boolean;
}
