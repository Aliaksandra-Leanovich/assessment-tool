import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAnswer, IAnswersInitial } from "../types";

const initialState: IAnswersInitial = {
  answers: [],
};

const answersSlice = createSlice({
  name: "answers",
  initialState,
  reducers: {
    setAllAnswers: (state, { payload }: PayloadAction<IAnswer>) => {
      state.answers = [
        ...state.answers.filter(
          (item) => item.questionId !== payload.questionId
        ),
        { ...payload },
      ];
    },
  },
});
export const { setAllAnswers } = answersSlice.actions;
export default answersSlice.reducer;
