import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";
import { Home, SignIn } from "../pages";
import { routes } from "../routes";
import { PrivateRoute } from "../utils";
import { Admin } from "../pages/Admin";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.SignIn} element={<SignIn />} />
      <Route element={<PrivateRoute />}>
        <Route path={routes.HOME} element={<MainTemplate />}>
          <Route index element={<Home />} />
          <Route path={routes.Admin} element={<Admin />} />
        </Route>
      </Route>
    </Routes>
  );
};
