import { ChangeEvent, useCallback, useState } from "react";
import { IQuestion } from "../components/Questions/types";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../utils/firebase";
import { Collections } from "../enums";

export const useHandleEditQuestion = (question: IQuestion) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [text, setText] = useState<string>("");

  const handleEdit = () => {
    setEdit(true);
    setText(question.question);
  };

  const editQuestion = useCallback(
    async (text: string) => {
      if (text) {
        try {
          await updateDoc(doc(db, Collections.questions, question.id), {
            question: text,
          });
          setEdit(false);
          setText("");
        } catch (error) {
          console.log("error", error);
        }
      }
    },
    [question]
  );

  const onSubmit = useCallback(() => {
    editQuestion(text);
  }, [editQuestion, text]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [setText]
  );

  return { edit, text, handleEdit, handleChange, onSubmit };
};
