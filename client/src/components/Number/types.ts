import { IQuestion } from "../Questions/types";

export interface IProps {
  question: IQuestion;
  children: number;
  setQuestionNumber: (item: number) => void;
  setCurrentQuestion: (item: IQuestion) => void;
  currentQuestion: IQuestion;
  questionNumber: number;
  handleUpdateAnswer: (id: string) => void;
}

export interface IStylesProps {
  currentNumber: boolean;
  answered: boolean;
}
