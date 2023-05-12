import { IQuestion } from "../Questions/types";

export interface IProps {
  question: IQuestion;
  children: number;
  setText: (item: string) => void;
  setQuestionNumber: (item: number) => void;
  setCurrentQuestion: (item: IQuestion) => void;
  questions: Array<IQuestion>;
  currentQuestion: IQuestion;
  questionNumber: number;
}
