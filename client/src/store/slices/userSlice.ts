import { createSlice } from "@reduxjs/toolkit";
import { IUserStore } from "../types";

const initialState: IUserStore = {
  isAuthorized: localStorage.getItem("userToken"),
  token: localStorage.getItem("userToken"),
  id: localStorage.getItem("userId"),
  email: "",
  level: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserToken: (state, action) => {
      state.isAuthorized = localStorage.getItem("userToken");
      state.token = action.payload;
    },

    setUserLevel: (state, action) => {
      state.level = action.payload;
    },

    setUserEmail: (state, action) => {
      state.email = action.payload;
    },

    setUserId: (state, action) => {
      state.id = action.payload;
    },

    unsetUser: (state) => {
      state.isAuthorized = localStorage.removeItem("userToken");
      state.token = "";
    },
  },
});

export const {
  setUserToken,
  unsetUser,
  setUserLevel,
  setUserId,
  setUserEmail,
} = userSlice.actions;
export default userSlice.reducer;
