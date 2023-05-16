import { useCallback, useState } from "react";

export interface IUseShowModalReturnValues {
  show: boolean;
  showModal: VoidFunction;
}

export const useShowModal = (): IUseShowModalReturnValues => {
  const [show, setShow] = useState(false);

  const showModal = useCallback(() => {
    setShow(!show);

    document.body.style.overflow = show ? "auto" : "hidden";
  }, [show]);

  return { show, showModal };
};
