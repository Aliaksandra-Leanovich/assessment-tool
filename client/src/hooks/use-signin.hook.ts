import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { UseFormClearErrors } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
import { IUserForm } from "../components/SigninForm/types";
import { Collections } from "../enums";
import { getAuthError } from "../helper";
import { routes } from "../routes";
import { useAppDispatch } from "../store/hooks";
import {
  setUserEmail,
  setUserId,
  setUserLevel,
  setUserToken,
} from "../store/slices/userSlice";
import { app } from "../utils";
import { db } from "../utils/firebase";

export const useSignIn = (
  clearErrors: UseFormClearErrors<IUserForm>,
  level: string | null
) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const localStorageKey = "userToken";
  const localStorageId = "userId";

  const [error, setError] = useState<string | null>(null);

  const setUserTokenToStorage = (token: string) => {
    localStorage.setItem(localStorageKey, token);
    dispatch(setUserToken(token));
  };

  const setUsersToDB = async (
    email: string | null,
    level: string,
    uid: string,
    token: string | undefined
  ) => {
    const user = {
      email: email,
      id: uuid(),
      level: level,
      token: token,
      uid: uid,
    };

    try {
      if (user?.email) {
        await setDoc(doc(db, Collections.users, user.uid), user);
        dispatch(setUserLevel(level));
        dispatch(setUserEmail(email));
        localStorage.setItem(localStorageId, user.uid);
        dispatch(setUserId(user.uid));
      }
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };

  const onSubmit = (data: IUserForm) => {
    const auth = getAuth(app);

    setPersistence(auth, browserLocalPersistence)
      .then(async () => {
        return await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        )
          .then(async (userCredential) => {
            const token = await userCredential.user.getIdToken();
            const uid = userCredential.user.uid;
            if (level) {
              setUsersToDB(data.email, level, uid, token);
            }

            clearErrors();
            setUserTokenToStorage(token);
            navigate(routes.HOME);
          })
          .catch((error) => {
            setError(getAuthError(error.code));
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return { error, onSubmit };
};
