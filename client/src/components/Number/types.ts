import { IQuestion } from "../Questions/types";

export interface IProps {
  question: IQuestion;
  children: number;
  answered: boolean;
  setQuestionNumber: (item: number) => void;
  setCurrentQuestion: (item: IQuestion) => void;
  questions: Array<IQuestion>;
  currentQuestion: IQuestion;
  questionNumber: number;
  text: string;
  handleUpdateAnswer: (item: string) => void;
}
