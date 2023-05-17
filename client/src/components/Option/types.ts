export interface IOption {
  value: string;
  label: string;
}

export interface IProps {
  item: IOption;
  setSelected: (item: string) => void;
}
