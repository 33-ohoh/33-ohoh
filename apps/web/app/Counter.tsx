"use client";

import { useAppDispatch, useAppSelector } from "../app/hooks/redux";
import { decrement, increment } from "../app/store/counterSlice";

const Counter = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.counter);

  return (
    <div>
      <p>Counter: {counter}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

export default Counter;
