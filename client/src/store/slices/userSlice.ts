import { createSlice } from "@reduxjs/toolkit";
import { IUserStore } from "../types";

const initialState: IUserStore = {
  isAuthorized: localStorage.getItem("userToken"),
  isAdmin: false,
  token: localStorage.getItem("userToken"),
  id: localStorage.getItem("userId"),
  email: "",
  level: "",
  uidLevel: localStorage.getItem("uid"),
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

    setUidLevel: (state, action) => {
      state.uidLevel = action.payload;
    },

    setAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },

    unsetUser: (state) => {
      state.isAuthorized = localStorage.removeItem("userToken");
      state.id = "";
      state.isAdmin = false;
      state.token = "";
      state.email = "";
      state.level = "";
      state.uidLevel = localStorage.removeItem("uid");
    },
  },
});

export const {
  setUserToken,
  unsetUser,
  setUserLevel,
  setUserId,
  setUserEmail,
  setAdmin,
  setUidLevel,
} = userSlice.actions;
export default userSlice.reducer;
