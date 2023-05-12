import { ChangeEvent } from "react";
import { InputSC } from "./style";
import { IInputProps } from "./types";

export const InputAnswer = ({ placeholder, onChange, value }: IInputProps) => {
  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = event.target.value;
    onChange(newValue);
  };

  return (
    <InputSC placeholder={placeholder} onChange={handleChange} value={value} />
  );
};
