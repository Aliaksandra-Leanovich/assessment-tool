import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/hooks";
import { unsetUser } from "../store/slices/userSlice";
import { routes } from "../routes";
import { Statuses } from "../enums";

export const useLogout = (status: string) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    if (status !== Statuses.Test) {
      dispatch(unsetUser());
      navigate(routes.SignIn);
    }
  };

  return { handleLogout };
};
