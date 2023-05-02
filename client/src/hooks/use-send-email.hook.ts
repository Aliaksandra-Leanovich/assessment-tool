import axios from "axios";
import { useAppSelector } from "../store/hooks";
import { getUserInfo } from "../store/selectors";
import { getAnswers } from "../store/selectors/answersSelector";
import { getQuestions } from "../store/selectors/questionsSelector";
import { useGetTime } from "./use-get-time.hook";

export const useSendEmail = () => {
  const { answers } = useAppSelector(getAnswers);
  const { questions } = useAppSelector(getQuestions);
  const { email, level } = useAppSelector(getUserInfo);
  const { date } = useGetTime();

  const data = { answers, questions, date, email, level };

  const sendEmail = async () => {
    await axios.post(`http://localhost:8000/createPdf`, data).then(() =>
      axios
        .get(`http://localhost:8000/fetchPdf`, { responseType: "blob" })
        .then(() =>
          axios.post("http://localhost:8000/sendPdf", {
            email: "candidatestest73@gmail.com",
          })
        )
    );
  };

  return { sendEmail };
};
