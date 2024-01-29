"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import loginSlice from "./loginSlice";
import signupSlice from "./signupSlice";

const store: any = configureStore({
  reducer: { counter: counterSlice, signup: signupSlice, login: loginSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
