"use client";

import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counterSlice";
import loginSlice from "./loginSlice";
import signupSlice from "./signupSlice";
import selectLogSlice from "./selectLogSlice";
import saveLogSlice from "./saveLogSlice";

const store: any = configureStore({
  reducer: {
    counter: counterSlice,
    signup: signupSlice,
    login: loginSlice,
    selectLog: selectLogSlice,
    saveLog: saveLogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
