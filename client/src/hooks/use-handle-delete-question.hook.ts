import { deleteDoc, doc } from "firebase/firestore";
import { IQuestion } from "../components/Questions/types";
import { db } from "../utils/firebase";
import { Collections } from "../enums";
import { useCallback } from "react";

export interface IProps {
  question: IQuestion;
}

export const useHandleDeleteQuestion = (question: IQuestion) => {
  const handleDelete = useCallback(async () => {
    try {
      await deleteDoc(doc(db, Collections.questions, question.id));
    } catch (error) {
      console.log("error", error);
    }
  }, [question]);
  return { handleDelete };
};
