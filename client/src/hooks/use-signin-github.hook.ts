import {
  getAuth,
  GithubAuthProvider,
  inMemoryPersistence,
  setPersistence,
  signInWithPopup,
} from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Collections } from "../enums";
import { getAuthError } from "../helper";
import { routes } from "../routes";
import { app } from "../utils";
import { db } from "../utils/firebase";
import { useSetUserToStorage } from ".";
import { setAdmin } from "../store/slices/userSlice";
import { useAppDispatch } from "../store/hooks";

export const useSignInWithGithub = (level: string | null) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [error, setError] = useState<string | null>(null);
  const { setUserToStorage } = useSetUserToStorage();

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

  const checkAdminInDB = useCallback(
    async (email: string) => {
      const querySnapshotAdmins = await getDocs(
        collection(db, Collections.admins)
      );
      localStorage.setItem("admin", email);

      querySnapshotAdmins.forEach((doc) => {
        if (email === doc.id) {
          dispatch(setAdmin(true));
        }
      });
    },
    [dispatch]
  );

  const signInWithGithub = () => {
    const auth = getAuth(app);

    setPersistence(auth, inMemoryPersistence)
      .then(async () => {
        const provider = new GithubAuthProvider();

        return await signInWithPopup(auth, provider)
          .then(async (userCredential) => {
            const credential =
              GithubAuthProvider.credentialFromResult(userCredential);
            const token = await credential?.accessToken;
            const user = userCredential.user;
            const id = user.uid;
            const email = userCredential.user.providerData[0].email;

            if (level && token) {
              setUsersToDB(email, level, id, token);
              setUserToStorage(token, level, email, id);
            }

            if (email) {
              checkAdminInDB(email);
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
