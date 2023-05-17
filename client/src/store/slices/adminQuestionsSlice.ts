import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IQuestion } from "../../components/Questions/types";
import { IAdminQuestionsInitial } from "../types";

const initialState: IAdminQuestionsInitial = {
  adminQuestions: [],
};

const adminQuestionsSlice = createSlice({
  name: "adminQuestions",
  initialState,
  reducers: {
    setAllAdminQuestions: (state, { payload }: PayloadAction<IQuestion>) => {
      state.adminQuestions = [
        ...state.adminQuestions.filter((item) => item.id !== payload.id),
        { ...payload },
      ];
    },

    unsetAllAdminQuestions: (state) => {
      state.adminQuestions = [];
    },
  },
});
export const { setAllAdminQuestions, unsetAllAdminQuestions } =
  adminQuestionsSlice.actions;
export default adminQuestionsSlice.reducer;
