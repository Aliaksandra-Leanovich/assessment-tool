import {
  getAuth,
  GithubAuthProvider,
  inMemoryPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import uuid from "react-uuid";
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

export const useSignInWithGithub = (selected: string | null) => {
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
    token: string
  ) => {
    const user = {
      email: email,
      id: uuid(),
      token: token,
      level: level,
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

  const signInWithGithub = () => {
    const auth = getAuth(app);

    setPersistence(auth, inMemoryPersistence)
      .then(async () => {
        const provider = new GithubAuthProvider();

        return await signInWithPopup(auth, provider)
          .then(async (userCredential) => {
            const credential =
              GithubAuthProvider.credentialFromResult(userCredential);
            const token = await credential!.accessToken;
            const user = userCredential.user;
            const uid = user.uid;
            const email = user.email;

            if (selected && token) {
              setUsersToDB(email, selected, uid, token);
            }

            if (token) {
              setUserTokenToStorage(token);
            }

            navigate(routes.HOME);
          })
          .catch((error) => {
            setError(getAuthError(error.code));
          });
      })

      .catch((error) => {
        console.log("error", error);
      });
  };

  return { error, signInWithGithub };
};
