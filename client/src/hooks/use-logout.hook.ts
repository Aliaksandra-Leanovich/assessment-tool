import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { unsetUser } from "../store/slices/userSlice";
import { Statuses } from "../enums";
import { getUserInfo } from "../store/selectors";

export const useLogout = (status: string) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { uidLevel } = useAppSelector(getUserInfo);

  const handleLogout = () => {
    if (status !== Statuses.Test) {
      dispatch(unsetUser());
      navigate(`/signin/${uidLevel}`);
    }
  };

  return { handleLogout };
};
