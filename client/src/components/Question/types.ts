import { IQuestion } from "../Questions/types";

export interface IProps {
  question: IQuestion;
  handleClick: VoidFunction;
  questionNumber: number;
  button: string;
}

export interface IAnswerForm {
  answer: string;
}
