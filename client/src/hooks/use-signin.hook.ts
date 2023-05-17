import {
  browserLocalPersistence,
  createUserWithEmailAndPassword,
  getAuth,
  setPersistence,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  onSnapshot,
  setDoc,
} from "firebase/firestore";
import { useCallback, useEffect, useState } from "react";
import { UseFormClearErrors } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { IUserForm } from "../components/SigninForm/types";
import { Collections } from "../enums";
import { getAuthError } from "../helper";
import { routes } from "../routes";
import { app } from "../utils";
import { db } from "../utils/firebase";
import { useSetUserToStorage } from "./use-set-user-to-storage.hook";
import { useAppDispatch } from "../store/hooks";
import { setAdmin } from "../store/slices/userSlice";

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
              setError(getAuthError(error.code));
            });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    [clearErrors, level, navigate, setUserToStorage]
  );

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
              navigate(routes.Admin);
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

  const checkAdminInDB = useCallback(async ({ email, password }: IUserForm) => {
    const user = { email: email, password: password };
    const querySnapshot = await getDocs(collection(db, "admins"));
    console.log(user);
    querySnapshot.forEach((doc) => {
      if (email === doc.id) {
        // setAdmin(doc.id);
        console.log(doc.id);
      }
    });
  }, []);

  const onSubmit = useCallback(
    async ({ email, password }: IUserForm) => {
      const user = { email: email, password: password };
      // checkAdminInDB(user);
      const querySnapshot = await getDocs(collection(db, "admins"));
      console.log(user);
      querySnapshot.forEach((doc) => {
        if (email === doc.id) {
          // setAdmin(doc.id);
          console.log(doc.id);
          dispatch(setAdmin(true));

          // console.log("in");
          SignIn(user);
        } else {
          Signup(user);
          // console.log("up");
        }
      });
      // if (admin) {
      //   // console.log("in");
      //   SignIn(user);
      // } else {
      //   Signup(user);
      //   // console.log("up");
      // }
      // const auth = getAuth(app);

      // setPersistence(auth, browserLocalPersistence)
      //   .then(async () => {
      //     return await createUserWithEmailAndPassword(auth, email, password)
      //       .then(async (userCredential) => {
      //         const token = await userCredential.user.getIdToken();
      //         const id = userCredential.user.uid;

      //         if (level && token) {
      //           setUsersToDB(email, level, id, token);
      //           setUserToStorage(token, level, email, id);
      //         }

      //         clearErrors();
      //         navigate(routes.HOME);
      //       })
      //       .catch((error) => {
      //         setError(getAuthError(error.code));
      //       });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
    },
    [SignIn, Signup]
  );

  return { error, onSubmit };
};
