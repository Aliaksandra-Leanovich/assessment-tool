import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { levels } from "../helper";
import { useAppDispatch } from "../store/hooks";
import { setUidLevel } from "../store/slices/userSlice";

export const useSetLevel = () => {
  let { uid } = useParams();
  let [level, setLevel] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (uid) {
      localStorage.setItem("uid", uid);
      dispatch(setUidLevel(uid));
      levels.map((level) => level.value === uid && setLevel(level.label));
    }
  }, [dispatch, uid]);

  return { level };
};
