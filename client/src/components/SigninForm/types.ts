export interface IUserForm {
  email: string;
  password: string;
  errors?: string | null;
  level: string;
}

export interface IProps {
  level: string | null;
}
