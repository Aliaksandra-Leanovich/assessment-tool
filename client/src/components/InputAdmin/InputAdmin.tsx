import { InputSC } from "./style";
import { IInputProps } from "./types";

const InputAdmin = ({ value, onChange, placeholder }: IInputProps) => {
  return (
    <InputSC value={value} onChange={onChange} placeholder={placeholder} />
  );
};

export default InputAdmin;
