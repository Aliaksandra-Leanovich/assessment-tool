import React from "react";
import { useGetAdminsQuestions } from "../../hooks/use-get-admins-questions.hook";
import { AdminQueston } from "../AdminQuestion/AdminQueston";
import { ContainerSC } from "./style";

export const AdminQuestions = () => {
  const { adminQuestions } = useGetAdminsQuestions();

  return (
    <ContainerSC>
      {adminQuestions.map((question) => (
        <AdminQueston key={question.id} question={question} />
      ))}
    </ContainerSC>
  );
};
