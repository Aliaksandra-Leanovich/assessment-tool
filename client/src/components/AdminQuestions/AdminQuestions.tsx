import { useState } from "react";
import { useForm } from "react-hook-form";
import { ButtonVariants } from "../../enums";
import { useSetQuestion, useShowModal } from "../../hooks";
import { useGetAdminsQuestions } from "../../hooks/use-get-admins-questions.hook";
import { AdminQueston } from "../AdminQuestion/AdminQueston";
import { Button } from "../Button";
import { CreateTest } from "../CreateTest/CreateTest";
import { Modal } from "../Modal/Modal";
import { ContainerSC, FormSC, InformationSC, InputSC, TextSC } from "./style";

export const AdminQuestions = () => {
  const { questionsFromDB, checked } = useGetAdminsQuestions();
  const [text, setText] = useState<string>("");
  const { show, showModal } = useShowModal();
  const { handleSubmit } = useForm();
  const { onSubmit, handleChange } = useSetQuestion(text, setText);

  return (
    <ContainerSC>
      <InformationSC>
        <TextSC>
          <p>Total questions: {questionsFromDB.length}</p>
          <p>Selected questions: {checked?.length}</p>
        </TextSC>
        <form onSubmit={handleSubmit(showModal)}>
          <Button
            variant={ButtonVariants.primary}
            disabled={!checked?.length}
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
        <AdminQueston key={question.id} question={question} checked={checked} />
      ))}
      <Modal
        children={
          <CreateTest
            total={checked?.length.toString()}
            checked={checked}
            handleClose={showModal}
            questions={questionsFromDB}
          />
        }
        show={show}
        handleClose={showModal}
      />
    </ContainerSC>
  );
};
