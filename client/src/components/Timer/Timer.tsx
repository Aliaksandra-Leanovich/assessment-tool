import { Statuses } from "../../enums";
import { useSetTimer } from "../../hooks";
import { Loader } from "../Loader/Loader";
import { IProps } from "./types";

export const Timer = ({ setStatus, status, test, setAnswersToDb }: IProps) => {
  const { minutes, seconds } = useSetTimer(
    status,
    setStatus,
    test.time,
    setAnswersToDb
  );
  const timeInSeconds = seconds < 10 ? `0${seconds}` : seconds;

  return (
    <div>
      {status === Statuses.End ? (
        <h2>00:00</h2>
      ) : minutes || seconds ? (
        <h2>
          {minutes}:{timeInSeconds}
        </h2>
      ) : (
        <Loader />
      )}
    </div>
  );
};
