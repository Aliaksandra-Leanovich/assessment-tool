import { useForm } from "react-hook-form";
import { ReactComponent as Delete } from "../../assets/delete.svg";
import {
  useHandleCheckedQuestion,
  useHandleDeleteQuestion,
  useHandleEditQuestion,
  useOutsideClick,
} from "../../hooks";
import {
  ButtonContainerSC,
  ButtonEditSC,
  ButtonSC,
  CheckboxSC,
  ContainerQuestionSC,
  FormSC,
  InputSC,
  TextSC,
} from "./style";
import { IProps } from "./types";
import { useTranslation } from "react-i18next";
import { useRef } from "react";

export const AdminQueston = ({ question, checked }: IProps) => {
  const selectRef = useRef(null);
  const { t } = useTranslation();
  const { handleSubmit } = useForm();
  const { handleCheck } = useHandleCheckedQuestion(question);
  const { handleDelete } = useHandleDeleteQuestion(question);
  const { edit, text, disabled, handleEdit, handleChange, onSubmit, setEdit } =
    useHandleEditQuestion(question);

  useOutsideClick(selectRef, () => {
    if (edit) {
      setEdit(false);
    }
  });

  return (
    <ContainerQuestionSC ref={selectRef}>
      <CheckboxSC
        edit={edit}
        value={question.question}
        type="checkbox"
        defaultChecked={question.checked}
        onChange={handleCheck}
      />
      <FormSC onSubmit={handleSubmit(onSubmit)} edit={edit}>
        <InputSC
          type="text"
          onChange={handleChange}
          value={text}
          ref={selectRef}
        />
        <ButtonEditSC type="submit" disabled={disabled}>
          {t("button.save")}
        </ButtonEditSC>
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
