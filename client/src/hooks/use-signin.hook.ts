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
import { IUserForm } from "../components/SigninForm/types";
import { Collections } from "../enums";
import { getAuthError } from "../helper";
import { routes } from "../routes";
import { app } from "../utils";
import { db } from "../utils/firebase";
import { useSetUserToStorage } from "./use-set-user-to-storage.hook";

export const useSignIn = (
  clearErrors: UseFormClearErrors<IUserForm>,
  level: string | null
) => {
  const navigate = useNavigate();
  const { setUserToStorage } = useSetUserToStorage();

  const [error, setError] = useState<string | null>(null);

  const setUsersToDB = async (
    email: string | null,
    level: string,
    id: string,
    token: string | undefined
  ) => {
    const user = {
      email: email,
      id: id,
      level: level,
      token: token,
    };

    try {
      if (user?.email) {
        await setDoc(doc(db, Collections.users, user.id), user);
      }
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };

  const onSubmit = ({ email, password }: IUserForm) => {
    const auth = getAuth(app);

    setPersistence(auth, browserLocalPersistence)
      .then(async () => {
        return await createUserWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const token = await userCredential.user.getIdToken();
            const id = userCredential.user.uid;

            if (level && token) {
              setUsersToDB(email, level, id, token);
              setUserToStorage(token, level, email, id);
            }

            clearErrors();
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
