import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { getAnswers } from "../store/selectors/answersSelector";
import { IAnswer } from "../store/types";

export const useHandleUpdateAnswer = (
  setText: (item: string) => void,
  setAnswered: (item: boolean) => void
) => {
  const { answers } = useAppSelector(getAnswers);
  const [currentAnswer, setCurrentAnswer] = useState<IAnswer>();
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    if (currentAnswer && id === currentAnswer?.questionId) {
      if (currentAnswer.answer) {
        setText(currentAnswer.answer);
        setAnswered(true);
      }
    } else {
      setText("");
      setAnswered(false);
    }
  }, [currentAnswer, id, setAnswered, setText]);

  const handleUpdateAnswer = useCallback(
    (currentId: string) => {
      setId(currentId);
      answers.forEach((item) => {
        if (item.questionId === currentId) {
          setCurrentAnswer(item);
        }
      });
    },
    [answers]
  );
  return { handleUpdateAnswer };
};
