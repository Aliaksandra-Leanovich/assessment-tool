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

  const sendEmail = async () => {
    try {
      await axios.post("https://assessment-tool-ff3c7.firebaseapp.com/pdf", {
        answers,
        questions,
        date,
        email,
        level,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return { sendEmail };
};
