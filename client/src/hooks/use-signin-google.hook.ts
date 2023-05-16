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
import { useAppDispatch } from "../store/hooks";
import {
  setUserEmail,
  setUserId,
  setUserLevel,
  setUserToken,
} from "../store/slices/userSlice";
import { app } from "../utils";
import { db } from "../utils/firebase";

export const useSignInGoogle = (level: string | null) => {
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
        dispatch(setUserLevel(level));
        dispatch(setUserEmail(email));
        localStorage.setItem(localStorageId, user.id);
        dispatch(setUserId(user.id));
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

            if (level) {
              setUsersToDB(email, level, id, token);
            }

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

  return { error, signInWithGoogle };
};
