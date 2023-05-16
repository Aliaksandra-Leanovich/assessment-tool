import { IQuestion } from "../Questions/types";

export interface IProps {
  question: IQuestion;
  questionNumber: number;
  text: string;
  setText: (item: string) => void;
  handleClick: VoidFunction;
  handleUpdateAnswer: (id: string) => void;
}

export interface IAnswerForm {
  answer: string;
}
