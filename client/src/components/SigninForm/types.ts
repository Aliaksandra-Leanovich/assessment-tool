export interface IUserForm {
  email: string;
  password: string;
  errors?: string | null;
  level: string;
}

export interface IProps {
  selected: string | null;
  setSelected: (item: string | null) => void;
}
