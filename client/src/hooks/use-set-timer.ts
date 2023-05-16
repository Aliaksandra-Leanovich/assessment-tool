import { useEffect, useState } from "react";
import { Statuses } from "../enums";

export const useSetTimer = (
  status: string,
  setStatus: (item: string) => void,
  time: string,
  setAnswersToDb: VoidFunction
) => {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (!minutes && !seconds && time) {
      setMinutes(+time);
    }
  }, [minutes, seconds, time]);

  useEffect(() => {
    if (status === Statuses.Test) {
      let myInterval = setInterval(() => {
        if (seconds > 0) {
          setSeconds(seconds - 1);
        }
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(myInterval);
            setStatus(Statuses.End);
            setAnswersToDb();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        }
      }, 1000);

      return () => {
        clearInterval(myInterval);
      };
    }
  }, [minutes, seconds, setAnswersToDb, setStatus, status]);

  return { minutes, seconds, setMinutes };
};
