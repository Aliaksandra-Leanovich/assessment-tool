export interface IProps {
  status: string;
  setStatus: (status: string) => void;
  setAnswersToDb: VoidFunction;
  test: {
    total: string;
    time: string;
  };
}
