import { IQuestion } from "../components/Questions/types";

export interface IUserStore {
  isAuthorized: string | null | void;
  token: string | null;
  id: string | null;
  level: string;
  email: string;
}

export interface IQuestionsInitial {
  questions: Array<IQuestion>;
}

export interface IAnswer {
  answer: string | null;
  questionId: string;
}

export interface IAnswersInitial {
  answers: Array<IAnswer>;
}
