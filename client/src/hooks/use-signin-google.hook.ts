import {
  getAuth,
  GoogleAuthProvider,
  inMemoryPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Collections } from "../enums";
import { getAuthError } from "../helper";
import { routes } from "../routes";
import { app } from "../utils";
import { db } from "../utils/firebase";
import { useSetUserToStorage } from "./use-set-user-to-storage.hook";

export const useSignInGoogle = (level: string | null) => {
  const navigate = useNavigate();
  const { setUserToStorage } = useSetUserToStorage();

  const [error, setError] = useState<string | null>(null);

  const setUsersToDB = async (
    email: string | null,
    level: string,
    id: string,
    token: string
  ) => {
    const user = {
      email: email,
      id: id,
      token: token,
      level: level,
    };

    try {
      if (user?.email) {
        await setDoc(doc(db, Collections.users, user.id), user);
      }
    } catch (event) {
      console.error("Error adding document: ", event);
    }
  };

  const signInWithGoogle = () => {
    const auth = getAuth(app);

    setPersistence(auth, inMemoryPersistence)
      .then(async () => {
        const provider = new GoogleAuthProvider();
        return await signInWithPopup(auth, provider)
          .then(async (userCredential) => {
            const token = await userCredential.user.getIdToken();
            const id = userCredential.user.uid;
            const email = userCredential.user.email;

            if (level && token) {
              setUsersToDB(email, level, id, token);
              setUserToStorage(token, level, email, id);
            }

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

  return { error, signInWithGoogle };
};
