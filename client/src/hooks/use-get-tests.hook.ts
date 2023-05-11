import { doc, getDoc } from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { Collections } from "../enums";
import { db } from "../utils/firebase";
import { useAppSelector } from "../store/hooks";
import { getUserInfo } from "../store/selectors";

export const useGetTests = () => {
  const { uidLevel } = useAppSelector(getUserInfo);
  const [test, setTest] = useState({ total: "0", time: "0" });

  const getData = useCallback(async () => {
    if (uidLevel) {
      const docSnap = await getDoc(doc(db, Collections.test, uidLevel));
      if (docSnap.exists()) {
        const { time, total } = docSnap.data() || {};
        setTest({ time, total });
      } else {
        console.log("No such document!");
      }
    }
  }, [uidLevel]);

  useEffect(() => {
    if (uidLevel) {
      getData();
    }
  }, [uidLevel]);

  return { test };
};
