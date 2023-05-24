import { ChangeEvent, useCallback } from "react";
import { Collections } from "../enums";
import uuid from "react-uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../utils/firebase";

export const useSetQuestion = (
  text: string,
  setText: (item: string) => void
) => {
  const setQuestionToDB = useCallback(async (text: string) => {
    let setId = uuid();

    if (text) {
      try {
        setDoc(doc(db, Collections.questions, setId), {
          question: text,
          id: setId,
          checked: false,
        });
      } catch (err) {
        console.log("error", err);
      }
    }
  }, []);

  const onSubmit = useCallback(() => {
    setQuestionToDB(text);
    setText("");
  }, [setQuestionToDB, setText, text]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [setText]
  );

  return { onSubmit, handleChange };
};
