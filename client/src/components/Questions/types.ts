export interface IQuestion {
  question: string;
  id: string;
  checked: boolean;
}

export interface IProps {
  setStatus: (item: string) => void;
  setAnswersToDb: VoidFunction;
}
