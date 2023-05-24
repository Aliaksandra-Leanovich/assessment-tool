import { deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
import { useCallback } from "react";
import { db } from "../utils/firebase";
import { Collections } from "../enums/Collections";
import { IQuestion } from "../components/Questions/types";
import { levels } from "../helper";

export const useSetTest = (
  checked: Array<IQuestion>,
  duration: string,
  handleClose: VoidFunction,
  level: string,
  questions: Array<IQuestion>,
  total: string
) => {
  const setChekedQuestions = useCallback(
    (checked: Array<IQuestion>) => {
      checked.map(async (question) => {
        await setDoc(
          doc(db, Collections.test, level, Collections.questions, question.id),
          {
            question: question.question,
            id: question.id,
          }
        );
      });
    },
    [level]
  );

  const unsetUncheckedQuestions = useCallback(
    (checked: Array<IQuestion>) => {
      checked.forEach((question) => {
        const unchecked = questions.filter((item) => item.id !== question.id);

        unchecked.forEach((item) => {
          deleteDoc(
            doc(db, Collections.test, level, Collections.questions, item.id)
          )
            .then(() => {
              console.log("Entire Document has been deleted successfully.");
            })
            .catch((error) => {
              console.log(error);
            });
        });
      });
    },
    [level, questions]
  );

  const onSubmit = useCallback(async () => {
    if (level && duration) {
      try {
        await updateDoc(doc(db, Collections.test, level), {
          id: level,
          time: duration,
          total: total,
          level: levels.filter((item) => level === item.value)[0].label,
        });

        unsetUncheckedQuestions(checked);
        setChekedQuestions(checked);
        handleClose();
      } catch (err) {
        console.log("error", err);
      }
    }
  }, [
    checked,
    duration,
    handleClose,
    level,
    setChekedQuestions,
    total,
    unsetUncheckedQuestions,
  ]);

  return { onSubmit };
};
