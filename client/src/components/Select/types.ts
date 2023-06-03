export interface IOption {
  value: string;
  label: string;
}

export interface IProps {
  options: Array<IOption>;
  name: string;
  placeholder: string;
  setSelected: (item: string) => void;
  selected: string | null;
}

export interface IPropsOpen {
  isOpen: boolean;
}
