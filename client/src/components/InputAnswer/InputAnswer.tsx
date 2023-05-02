import { useEffect } from "react";
import { InputSC } from "./style";
import { IInputProps } from "./types";

export const InputAnswer = ({
  placeholder,
  label,
  register,
  setAnswer,
  value,
}: IInputProps) => {
  useEffect(() => {
    if (value) {
      setAnswer(value.toString());
    }
  }, [setAnswer, value]);

  return <InputSC placeholder={placeholder} {...register(label)} />;
};
