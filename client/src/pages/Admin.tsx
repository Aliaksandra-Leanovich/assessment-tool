import { AdminQuestions } from "../components/AdminQuestions/AdminQuestions";
import { HeaderAdmin } from "../components/HeaderAdmin/HeaderAdmin";
import { WrapperAdminSC } from "../styles/styles";

export const Admin = () => {
  return (
    <>
      <HeaderAdmin />
      <WrapperAdminSC>
        <AdminQuestions />
      </WrapperAdminSC>
    </>
  );
};
