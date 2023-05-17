import { deleteDoc, doc } from "firebase/firestore";
import { IQuestion } from "../components/Questions/types";
import { db } from "../utils/firebase";
import { Collections } from "../enums";
import { useCallback } from "react";

export const useHandleDeleteQuestion = (question: IQuestion) => {
  const handleDelete = useCallback(async () => {
    try {
      await deleteDoc(doc(db, Collections.questions, question.id));
    } catch (err) {
      console.log("error", err);
    }
  }, [question.id]);
  return { handleDelete };
};
