"use client";

import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.counter += 1;
    },
    decrement: (state) => {
      state.counter -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export const selectCount = (state: CounterState) => state.counter;
export default counterSlice.reducer;
