import { useEffect, useState } from "react";

export const useSetCurrentNumber = (
  children: number,
  questionNumber: number
) => {
  const [currentNumber, setCurrentNumber] = useState(false);

  useEffect(() => {
    if (children === questionNumber) {
      setCurrentNumber(true);
    } else {
      setCurrentNumber(false);
    }
  }, [children, questionNumber]);

  return { currentNumber };
};
