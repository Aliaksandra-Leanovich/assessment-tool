import {
  getAuth,
  GoogleAuthProvider,
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
import { useSetUserToStorage } from "./use-set-user-to-storage.hook";
import { setAdmin } from "../store/slices/userSlice";
import { useAppDispatch } from "../store/hooks";

export const useSignInGoogle = (level: string | null) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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
        console.log(error);
      });
  };

  return { error, signInWithGoogle };
};
