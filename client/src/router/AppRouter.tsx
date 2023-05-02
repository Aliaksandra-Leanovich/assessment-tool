import { Route, Routes } from "react-router-dom";
import { MainTemplate } from "../components/MainTemplate";
import { Home, SignIn } from "../pages";
import { routes } from "../routes";
import { PrivateRoute } from "../utils";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={routes.SignIn} element={<SignIn />} />
      <Route element={<PrivateRoute />}>
        <Route path={routes.HOME} element={<MainTemplate />}>
          <Route index element={<Home />} />
        </Route>
      </Route>
    </Routes>
  );
};
