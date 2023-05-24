import { IQuestion } from "../Questions/types";

export interface IProps {
  question: IQuestion;
  checked: Array<IQuestion>;
}

export interface IStylesProps {
  edit: boolean;
}
