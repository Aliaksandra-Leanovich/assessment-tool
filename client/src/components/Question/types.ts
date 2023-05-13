import { IQuestion } from "../Questions/types";

export interface IProps {
  question: IQuestion;
  questionNumber: number;
  button: string;
  text: string;
  setText: (item: string) => void;
  handleClick: VoidFunction;
  setAnswered: (item: boolean) => void;
  handleUpdateAnswer: (item: string) => void;
}

export interface IAnswerForm {
  answer: string;
}
