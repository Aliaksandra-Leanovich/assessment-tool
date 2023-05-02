export interface IQuestion {
  question: string;
  id: string;
}

export interface IProps {
  setStatus: (item: string) => void;
  setAnswersToDb: VoidFunction;
}
