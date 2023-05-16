export interface IStylesProps {
  show?: boolean;
}

export interface IModalProps {
  handleClose: VoidFunction;
  show: boolean;
  children: JSX.Element;
}
