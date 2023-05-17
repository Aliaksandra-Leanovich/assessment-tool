import { ChangeEvent, useCallback, useState } from "react";
import { ButtonVariants, Collections } from "../../enums";
import { useGetAdminsQuestions } from "../../hooks/use-get-admins-questions.hook";
import { AdminQueston } from "../AdminQuestion/AdminQueston";
import { Button } from "../Button";
import { ContainerSC, FormSC, InputSC } from "./style";
import { useForm } from "react-hook-form";
import uuid from "react-uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";

export const AdminQuestions = () => {
  const { questionsFromDB } = useGetAdminsQuestions();
  const [text, setText] = useState<string>("");
  const { handleSubmit } = useForm();

  const setQuestionToDB = useCallback(async (text: string) => {
    let setId = uuid();

    if (text) {
      try {
        setDoc(doc(db, Collections.questions, setId), {
          question: text,
          id: setId,
        });
      } catch (err) {
        console.log("error", err);
      }
    }
  }, []);

  const onSubmit = useCallback(() => {
    setQuestionToDB(text);
    setText("");
  }, [setQuestionToDB, text]);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setText(event.target.value);
    },
    [setText]
  );

  return (
    <ContainerSC>
      <FormSC onSubmit={handleSubmit(onSubmit)}>
        <InputSC
          placeholder="Add new question"
          onChange={handleChange}
          value={text}
        />
        <Button variant={ButtonVariants.primary} children="Add" />
      </FormSC>
      {questionsFromDB.map((question) => (
        <AdminQueston key={question.id} question={question} />
      ))}
    </ContainerSC>
  );
};
