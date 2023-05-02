export interface IStartProps {
  setStatus: (status: string) => void;
  test: {
    total: string;
    time: string;
  };
}
