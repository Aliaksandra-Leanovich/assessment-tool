import { useRef } from "react";
import { useOutsideClick, useSelect } from "../../hooks";
import { Option } from "../Option";
import {
  ArrowSC,
  Container,
  HtmlSelectSC,
  OptionsSC,
  SelectedOptionSC,
  SelectSC,
  TriggerSC,
  WrapperSC,
} from "./style";
import { IProps } from "./types";

export const Select = ({ options, name, setSelected, selected }: IProps) => {
  const selectRef = useRef(null);
  const { isOpen, setOpen, onHandleSelect } = useSelect();

  useOutsideClick(selectRef, () => {
    setOpen(false);
  });

  return (
    <Container>
      <HtmlSelectSC id={name}>
        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </HtmlSelectSC>
      <WrapperSC ref={selectRef} onClick={onHandleSelect}>
        <SelectSC isOpen={isOpen}>
          <TriggerSC>
            <SelectedOptionSC>
              {options.find((item) => item.value === selected)?.label ||
                "Select you level"}
            </SelectedOptionSC>
            <ArrowSC isOpen={isOpen} />
          </TriggerSC>
          <OptionsSC isOpen={isOpen}>
            {options.map((item) => (
              <Option key={item.value} item={item} setSelected={setSelected} />
            ))}
          </OptionsSC>
        </SelectSC>
      </WrapperSC>
    </Container>
  );
};
