import React, { useCallback } from "react";
import { OptionSC, OptionTextSC } from "./style";
import { IProps } from "./types";

export const Option = ({ item, setSelected }: IProps) => {
  const onHandleOption = useCallback(() => {
    setSelected(item.value);
  }, [item.value, setSelected]);

  return (
    <OptionSC key={item.value} onClick={onHandleOption}>
      <OptionTextSC data-value={item.value}>{item.label}</OptionTextSC>
    </OptionSC>
  );
};
