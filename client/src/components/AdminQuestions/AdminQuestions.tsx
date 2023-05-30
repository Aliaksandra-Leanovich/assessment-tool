import { useState } from "react";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ButtonVariants } from "../../enums";
import { useSetQuestion, useShowModal } from "../../hooks";
import { useGetAdminsQuestions } from "../../hooks/use-get-admins-questions.hook";
import { AdminQueston } from "../AdminQuestion/AdminQueston";
import { Button } from "../Button";
import { CreateTest } from "../CreateTest/CreateTest";
import { Modal } from "../Modal/Modal";
import InputAdmin from "../InputAdmin/InputAdmin";
import { ContainerSC, FormSC, InformationSC, TextSC } from "./style";

export const AdminQuestions = () => {
  const { t } = useTranslation();
  const {
    adminQuestions,
    checked,
    filteredQuestions,
    handleSearchName,
    searchValueName,
  } = useGetAdminsQuestions();
  const [text, setText] = useState<string>("");
  const { show, showModal } = useShowModal();
  const { handleSubmit } = useForm();
  const { onSubmit, handleChange } = useSetQuestion(text, setText);

  return (
    <ContainerSC>
      <InformationSC>
        <TextSC>
          <p>
            {t("admin.questions")} {checked.length}/{adminQuestions.length}
          </p>
        </TextSC>
        <InputAdmin
          value={searchValueName}
          onChange={handleSearchName}
          placeholder={t("search.input")}
        />
        <form onSubmit={handleSubmit(showModal)}>
          <Button
            variant={ButtonVariants.primary}
            disabled={!checked.length}
            children={t("admin.link")}
          />
        </form>
      </InformationSC>
      <FormSC onSubmit={handleSubmit(onSubmit)}>
        <InputAdmin
          placeholder={t("add.input")}
          onChange={handleChange}
          value={text}
        />
        <Button
          variant={ButtonVariants.primary}
          children={t("button.add")}
          disabled={!text}
        />
      </FormSC>
      {filteredQuestions?.length > 0 ? (
        filteredQuestions.map((question) => (
          <AdminQueston
            key={question.id}
            question={question}
            checked={checked}
          />
        ))
      ) : (
        <p>{t("search.result")}</p>
      )}
      <Modal
        children={
          <CreateTest
            total={checked.length.toString()}
            checked={checked}
            handleClose={showModal}
            questions={adminQuestions}
          />
        }
        show={show}
        handleClose={showModal}
      />
    </ContainerSC>
  );
};
