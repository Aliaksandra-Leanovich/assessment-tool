import { Header } from "../components/Header";
import { Pdf } from "../components/Pdf/Pdf";
import { Queshions } from "../components/Questions/Questions";
import { Start } from "../components/Start";
import { Statuses } from "../enums";
import { useSetAnswersToDb, useSetStatus } from "../hooks";
import { useGetTests } from "../hooks/use-get-tests.hook";
import { WrapperSC } from "../styles/styles";

export const Home = () => {
  const { status, setStatus } = useSetStatus();
  const { test } = useGetTests();
  const { setAnswersToDb } = useSetAnswersToDb();

  return (
    <>
      <Header
        setStatus={setStatus}
        status={status}
        test={test}
        setAnswersToDb={setAnswersToDb}
      />
      <WrapperSC>
        {status === Statuses.Start && (
          <Start setStatus={setStatus} test={test} />
        )}
        {status === Statuses.Test && (
          <Queshions setStatus={setStatus} setAnswersToDb={setAnswersToDb} />
        )}
        {status === Statuses.End && <Pdf status={status} />}
      </WrapperSC>
    </>
  );
};
