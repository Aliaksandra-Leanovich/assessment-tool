import { ChangeEvent, useCallback, useState } from "react";
import { ButtonVariants, Collections } from "../../enums";
import { useGetAdminsQuestions } from "../../hooks/use-get-admins-questions.hook";
import { AdminQueston } from "../AdminQuestion/AdminQueston";
import { Button } from "../Button";
import { ContainerSC, FormSC, InformationSC, InputSC, TextSC } from "./style";
import { useForm } from "react-hook-form";
import uuid from "react-uuid";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { IQuestion } from "../Questions/types";
import { useShowModal } from "../../hooks";
import { Modal } from "../Modal/Modal";
import { CreateTest } from "../CreateTest/CreateTest";

export const AdminQuestions = () => {
  const { questionsFromDB } = useGetAdminsQuestions();
  const [text, setText] = useState<string>("");
  const { handleSubmit } = useForm();
  const [checked, setChecked] = useState<Array<IQuestion>>([]);
  const { show, showModal } = useShowModal();

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
      <InformationSC>
        <TextSC>
          <p>Total questions: {questionsFromDB.length}</p>
          <p>Selected questions: {checked.length}</p>
        </TextSC>
        <form onSubmit={handleSubmit(showModal)}>
          <Button
            variant={ButtonVariants.primary}
            disabled={!checked.length}
            children="Create test"
          />
        </form>
      </InformationSC>
      <FormSC onSubmit={handleSubmit(onSubmit)}>
        <InputSC
          placeholder="Add new question"
          onChange={handleChange}
          value={text}
        />
        <Button
          variant={ButtonVariants.primary}
          children="Add"
          disabled={!text}
        />
      </FormSC>
      {questionsFromDB.map((question) => (
        <AdminQueston
          key={question.id}
          question={question}
          checked={checked}
          setChecked={setChecked}
        />
      ))}
      <Modal
        children={<CreateTest total={checked.length.toString()} />}
        show={show}
        handleClose={showModal}
      />
    </ContainerSC>
  );
};
