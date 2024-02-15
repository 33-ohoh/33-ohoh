"use client";

import store from "../store/store";
import { ReactNode } from "react";
import { Provider as ReduxProvider } from "react-redux";

const Provider = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <ReduxProvider store={store}>{children}</ReduxProvider>
    </div>
  );
};

export default Provider;
