import { deleteDoc, doc } from "firebase/firestore";
import { IQuestion } from "../components/Questions/types";
import { db } from "../utils/firebase";
import { Collections } from "../enums";
import { useCallback } from "react";

export interface IProps {
  question: IQuestion;
  checked: Array<IQuestion>;
}

export const useHandleDeleteQuestion = (
  question: IQuestion,
  checked: IQuestion[]
) => {
  const handleDelete = useCallback(async () => {
    try {
      await deleteDoc(doc(db, Collections.questions, question.id));

      // let index = checked
      //   .map((item) => {
      //     return item.id;
      //   })
      //   .indexOf(question.id);
      // checked.splice(index, 1);
    } catch (err) {
      console.log("error", err);
    }
  }, [question]);
  return { handleDelete };
};
