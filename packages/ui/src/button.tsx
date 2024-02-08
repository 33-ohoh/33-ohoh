"use client";

import { ReactNode } from "react";

interface ButtonProps {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
}

export const Button = ({ className, onClick, children }: ButtonProps) => {
  return (
    <button
      className={`${className} border border-solid border-primary80 rounded-radius5 flex items-center mx-auto gap-[7px] justify-center py-[12px] font-semibold`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
