import { doc, updateDoc } from "firebase/firestore";
import { ChangeEvent, useCallback } from "react";
import { db } from "../utils/firebase";
import { Collections } from "../enums";
import { IQuestion } from "../components/Questions/types";

export const useHandleCheckedQuestion = (question: IQuestion) => {
  const setCheckQuestion = useCallback(
    async (checked: boolean) => {
      try {
        await updateDoc(doc(db, Collections.questions, question.id), {
          checked: checked,
        });
      } catch (error) {
        console.log("error", error);
      }
    },
    [question]
  );

  const handleCheck = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      if (event.target.checked) {
        setCheckQuestion(true);
      } else {
        setCheckQuestion(false);
      }
    },
    [setCheckQuestion]
  );
  return { handleCheck };
};
