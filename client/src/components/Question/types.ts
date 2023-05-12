import { IQuestion } from "../Questions/types";

export interface IProps {
  question: IQuestion;
  questionNumber: number;
  button: string;
  text: string;
  setText: (item: string) => void;
  handleClick: VoidFunction;
}

export interface IAnswerForm {
  answer: string;
}
