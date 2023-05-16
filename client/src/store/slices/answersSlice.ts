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
    unsetAllAnswers: (state) => {
      state.answers = [];
    },
  },
});
export const { setAllAnswers, unsetAllAnswers } = answersSlice.actions;
export default answersSlice.reducer;
