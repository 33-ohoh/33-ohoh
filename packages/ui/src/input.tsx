"use client";

import { InputHTMLAttributes, ReactNode } from "react";

import { FieldValues, RegisterOptions, UseFormRegister } from "react-hook-form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegister<FieldValues | any>;
  name: string;
  label?: ReactNode;
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
  font?: string;
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
  label,
  width = "ui-w-[670px]",
  height = "",
  margin = "",
  padding = "ui-pl-[25px] ui-py-[26px]",
  gap = "ui-gap-[8px]",
  rounded = "ui-rounded-radius15",
  font = "",
  errorMessage,
  successMessage,
  horizon,
  ...props
}: InputProps) => {
  return (
    <div
      className={`ui-flex ${horizon ? "" : "ui-flex-col"} ${width} ${height} ${margin} ${gap}`}
    >
      {label}
      <input
        {...props}
        {...register(name, options)}
        type={props.type}
        readOnly={props.readOnly}
        className={`${padding} ${rounded} ${font} ui-w-full ui-border ui-border-neutral50 ui-text-neutral50`}
        onChange={props.onChange}
        value={props.value}
      />
      {errorMessage && <ErrorText errorMessage={errorMessage} />}
      {successMessage && <SuccessText successMessage={successMessage} />}
    </div>
  );
};

export const ErrorText = ({ errorMessage }: ErrorTextProps) => {
  return (
    <span className="ui-text-systemWarning ui-pl-[8px] body2M ui-font-normal">
      {errorMessage}
    </span>
  );
};

export const SuccessText = ({ successMessage }: SuccessTextProps) => {
  return (
    <span className="ui-text-systemSuccess ui-pl-[8px] body2M ui-font-normal">
      {successMessage}
    </span>
  );
};
