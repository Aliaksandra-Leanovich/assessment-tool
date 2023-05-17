import { doc, updateDoc } from "firebase/firestore";
import { useCallback, useMemo } from "react";
import { Collections } from "../enums";
import { useAppSelector } from "../store/hooks";
import { getUserInfo } from "../store/selectors";
import { getAnswers } from "../store/selectors/answersSelector";
import { db } from "../utils/firebase";

export const useSetAnswersToDb = () => {
  const { answers } = useAppSelector(getAnswers);
  const { id } = useAppSelector(getUserInfo);
  const noAnswers = useMemo(
    () => [{ answer: "no answers", questionId: "no questions" }],
    []
  );

  const setAnswersToDb = useCallback(async () => {
    if (id) {
      try {
        await updateDoc(doc(db, Collections.users, id), {
          answers: answers.length ? answers : noAnswers,
        });
      } catch (err) {
        console.log("error", err);
      }
    } else {
    }
  }, [id, noAnswers, answers]);

  return { setAnswersToDb };
};
