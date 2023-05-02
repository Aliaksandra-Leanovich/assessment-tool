import { configureStore } from "@reduxjs/toolkit";
import answersSlice from "./slices/answersSlice";
import questionSlice from "./slices/questionSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    questions: questionSlice,
    answers: answersSlice,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
