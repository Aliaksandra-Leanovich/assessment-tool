import { useAppDispatch } from "../store/hooks";
import {
  setUserEmail,
  setUserId,
  setUserLevel,
  setUserToken,
} from "../store/slices/userSlice";

export const useSetUserToStorage = () => {
  const dispatch = useAppDispatch();
  const localStorageKey = "userToken";
  const localStorageId = "userId";

  const setUserToStorage = (
    token: string,
    level: string,
    email: string | null,
    id: string
  ) => {
    localStorage.setItem(localStorageKey, token);
    dispatch(setUserToken(token));
    dispatch(setUserLevel(level));
    dispatch(setUserEmail(email));
    localStorage.setItem(localStorageId, id);
    dispatch(setUserId(id));
  };

  return { setUserToStorage };
};
