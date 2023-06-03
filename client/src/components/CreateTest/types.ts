import { IQuestion } from "../Questions/types";

export interface IProps {
  total: string;
  handleClose: VoidFunction;
  checked: Array<IQuestion>;
  questions: Array<IQuestion>;
}
