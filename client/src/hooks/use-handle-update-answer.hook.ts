import { useCallback, useEffect, useState } from "react";
import { useAppSelector } from "../store/hooks";
import { getAnswers } from "../store/selectors/answersSelector";
import { IAnswer } from "../store/types";

export const useHandleUpdateAnswer = (setText: (item: string) => void) => {
  const { answers } = useAppSelector(getAnswers);
  const [currentAnswer, setCurrentAnswer] = useState<IAnswer>();
  const [id, setId] = useState<string | null>(null);

  useEffect(() => {
    if (currentAnswer && id === currentAnswer.questionId) {
      if (currentAnswer.answer) {
        setText(currentAnswer.answer);
      }
    } else {
      setText("");
    }
  }, [currentAnswer, id, setText]);

  useEffect(() => {
    if (!currentAnswer) {
      setCurrentAnswer(answers[0]);
    }
  }, [currentAnswer, answers]);

  const handleUpdateAnswer = useCallback(
    (currentId: string) => {
      setId(currentId);
      const answer = answers.find((answer) => answer.questionId === currentId);
      if (answer) {
        setCurrentAnswer(answer);
      }
    },
    [answers]
  );
  return { handleUpdateAnswer };
};
