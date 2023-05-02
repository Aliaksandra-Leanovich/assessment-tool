import { useCallback, useState } from "react";

export const useSelect = () => {
  const [isOpen, setOpen] = useState(false);

  const onHandleSelect = useCallback(() => {
    setOpen(!isOpen);
  }, [isOpen]);

  return { isOpen, setOpen, onHandleSelect };
};
