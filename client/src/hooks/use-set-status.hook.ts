import { useState } from "react";
import { Statuses } from "../enums";

export const useSetStatus = () => {
  const [status, setStatus] = useState<string>(Statuses.Start);

  return { status, setStatus };
};
