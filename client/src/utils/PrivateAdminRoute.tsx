import React from "react";
import { useAppSelector } from "../store/hooks";
import { getUserInfo } from "../store/selectors";
import { Navigate, Outlet } from "react-router-dom";
import { routes } from "../routes";

export const PrivateAdminRoute = () => {
  const { isAdmin } = useAppSelector(getUserInfo);
  return isAdmin ? <Outlet /> : <Navigate to={routes.HOME} />;
};
