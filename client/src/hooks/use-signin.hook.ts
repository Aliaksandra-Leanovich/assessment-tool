import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { useCallback, useState } from "react";
import { UseFormClearErrors } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUserForm } from "../components/SigninForm/types";
import { Collections } from "../enums";
import { getAuthError } from "../helper";
import { routes } from "../routes";
import { useAppDispatch } from "../store/hooks";
import { setAdmin } from "../store/slices/userSlice";
import { app } from "../utils";
import { db } from "../utils/firebase";
import { useSetUserToStorage } from "./use-set-user-to-storage.hook";

export interface IUser {
  email: string;
  password: string;
}

export const useSignIn = (
  clearErrors: UseFormClearErrors<IUserForm>,
  level: string | null
) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
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

  const SignIn = useCallback(
    ({ email, password }: IUserForm) => {
      const auth = getAuth(app);
      localStorage.setItem("admin", email);

      setPersistence(auth, browserLocalPersistence)
        .then(async () => {
          return await signInWithEmailAndPassword(auth, email, password)
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
    },
    [clearErrors, level, navigate, setUserToStorage]
  );

  const Signup = useCallback(
    ({ email, password }: IUserForm) => {
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
              if (error.code === "auth/email-already-in-use") {
                SignIn({ email, password });
              } else {
                setError(getAuthError(error.code));
              }
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [SignIn, clearErrors, level, navigate, setUserToStorage]
  );

  const checkAdminInDB = useCallback(
    async (user: IUser) => {
      const querySnapshotAdmins = await getDocs(collection(db, "admins"));

      querySnapshotAdmins.forEach((doc) => {
        if (user.email === doc.id) {
          dispatch(setAdmin(true));
          SignIn(user);
        } else {
          Signup(user);
        }
      });
    },
    [SignIn, Signup, dispatch]
  );

  const onSubmit = useCallback(
    async ({ email, password }: IUserForm) => {
      const user = { email: email, password: password };

      checkAdminInDB(user);
    },
    [checkAdminInDB]
  );

  return { error, onSubmit };
};
