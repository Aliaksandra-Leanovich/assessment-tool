import { doc, updateDoc } from "firebase/firestore";
import { ChangeEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import { Collections } from "../../enums";
import { useHandleDeleteQuestion } from "../../hooks";
import { db } from "../../utils/firebase";
import { IQuestion } from "../Questions/types";
import {
  ButtonContainerSC,
  ButtonEditSC,
  ButtonSC,
  ContainerQuestionSC,
  FormSC,
  InputSC,
  TextSC,
} from "./style";
import { IProps } from "./types";

export const AdminQueston = ({ question, checked, setChecked }: IProps) => {
  const { handleDelete } = useHandleDeleteQuestion(question);
  const [edit, setEdit] = useState<boolean>(false);
  const { handleSubmit } = useForm();
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
        } catch (err) {
          console.log("error", err);
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

  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    let updatedList: Array<IQuestion> = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, question];
    } else {
      updatedList.splice(checked.indexOf(question), 1);
    }
    setChecked(updatedList);
  };
  return (
    <ContainerQuestionSC>
      <input value={question.question} type="checkbox" onChange={handleCheck} />
      <FormSC onSubmit={handleSubmit(onSubmit)} edit={edit}>
        <InputSC placeholder="edit" onChange={handleChange} value={text} />
        <ButtonEditSC type="submit">save</ButtonEditSC>
      </FormSC>
      <TextSC onClick={handleEdit} edit={edit}>
        {question.question}
      </TextSC>
      <ButtonContainerSC>
        <ButtonSC onClick={handleDelete}>
          <Delete />
        </ButtonSC>
      </ButtonContainerSC>
    </ContainerQuestionSC>
  );
};
