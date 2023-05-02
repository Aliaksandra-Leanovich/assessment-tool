import { doc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { Collections } from "../enums";
import { useAppSelector } from "../store/hooks";
import { getUserInfo } from "../store/selectors";
import { db } from "../utils/firebase";

export const useGetTests = () => {
  const { level } = useAppSelector(getUserInfo);
  const [test, setTest] = useState({ total: "0", time: "0" });

  const getData = useCallback(async () => {
    const docSnap = await getDoc(doc(db, Collections.test, level));
    if (docSnap.exists()) {
      const { time, total } = docSnap.data() || {};
      setTest({ time, total });
    } else {
      console.log("No such document!");
    }
  }, [level]);

  useEffect(() => {
    if (level) {
      getData();
    }
  }, [level]);

  return { test };
};
