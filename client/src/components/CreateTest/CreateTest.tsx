import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { IProps } from "./types";

export const CreateTest = ({ total }: IProps) => {
  const { handleSubmit } = useForm();

  const onSubmit = useCallback(() => {}, []);

  return (
    <div>
      <p>Total questions: {total}</p>
      <p>Please Select level</p>
      <p>select</p>
      <p>Pleas select duration in minutes</p>
      <p>select</p>
      <button>create</button>
    </div>
  );
};
