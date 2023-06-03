export interface IProps {
  status: string;
  setStatus: (status: string) => void;
  test: {
    total: string;
    time: string;
  };
  setAnswersToDb: VoidFunction;
  handleLogout: VoidFunction;
}

export interface IStyleProps {
  disabled: boolean;
}
