import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { levels } from "../helper";

export const useSetLevel = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  let [level, setLevel] = useState<string | null>(null);
  const uid = searchParams.get("uid");

  useEffect(() => {
    if (uid) {
      localStorage.setItem("uid", uid);
      levels.map((level) => level.value === uid && setLevel(level.label));
    }
  }, [uid]);

  return { level };
};
