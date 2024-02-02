"use client";

import { InputHTMLAttributes, ReactNode } from "react";

import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues | any>;
  name: string;
  isError?: boolean;
  isSuccess?: boolean;
  isVisible?: boolean;
  options?: RegisterOptions<FieldValues, string> | undefined;
  errorMessage?: ReactNode;
  successMessage?: ReactNode;
  width?: string;
  margin?: string;
  padding?: string;
  gap?: string;
  rounded?: string;
  horizon?: boolean;
}

interface ErrorTextProps {
  errorMessage: ReactNode;
}

interface SuccessTextProps {
  successMessage: ReactNode;
}

export const Input = ({
  register,
  options,
  name = "name",
  width = "ui-w-[670px]",
  margin,
  padding = "ui-pl-[25px] ui-py-[22px]",
  gap = "ui-gap-[8px]",
  rounded = "ui-rounded-radius15",
  errorMessage,
  successMessage,
  horizon,
  ...props
}: InputProps) => {
  return (
    <div className={`ui-flex ${horizon ? "" : "ui-flex-col"} ${margin} ${gap}`}>
      {props.title && <label>{props.title}</label>}
      <input
        {...props}
        {...register(name, options)}
        type={props.type}
        className={`${padding} ${rounded} ${width} ui-border ui-border-neutral50 ui-text-neutral50`}
        onChange={props.onChange}
      />
      {errorMessage && <ErrorText errorMessage={errorMessage} />}
      {successMessage && <SuccessText successMessage={successMessage} />}
    </div>
  );
};

export const ErrorText = ({ errorMessage }: ErrorTextProps) => {
  return (
    <span className="ui-body2R ui-text-systemWarning ui-pl-[8px]">
      {errorMessage}
    </span>
  );
};

export const SuccessText = ({ successMessage }: SuccessTextProps) => {
  return (
    <span className="ui-body2R ui-text-systemSuccess ui-pl-[8px]">
      {successMessage}
    </span>
  );
};
