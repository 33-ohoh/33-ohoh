"use client";

import { ButtonHTMLAttributes, ReactNode } from "react";
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?:
    | "gray-line"
    | "gray-full"
    | "blue-line"
    | "blue-full"
    | "sky-blue-full";
  size?:
    | "full"
    | "full-medium"
    | "full-small"
    | "medium"
    | "round"
    | "round-small";
  width?: string;
  height?: string;
  padding?: string;
  margin?: string;
  border?: string;
  font?: string;
  children: ReactNode;
}

export const Button = ({
  color,
  size,
  width,
  height,
  padding,
  margin,
  border,
  font,
  children,
  ...props
}: ButtonProps) => {
  let colorStyle = "";
  let sizeStyle = "";
  switch (color) {
    case "gray-line":
      colorStyle = "ui-border ui-border-neutral50 ui-text-neutral50";
      break;
    case "gray-full":
      colorStyle = "ui-bg-neutral30 ui-text-white";
      break;
    case "blue-line":
      colorStyle = "ui-border ui-border-primary90 ui-text-primary90";
      break;
    case "blue-full":
      colorStyle = "ui-bg-primary90 ui-text-white";
      break;
    case "sky-blue-full":
      colorStyle = "ui-bg-primary10 ui-text-primary90";
      break;
    default:
      colorStyle = "ui-border ui-border-neutral50 ui-text-neutral50";
  }

  switch (size) {
    case "full":
      sizeStyle = "ui-w-[670px] ui-h-[80px] ui-rounded-radius15 display5B";
      break;
    case "full-medium":
      sizeStyle = "ui-px-[108px] ui-py-[14px] ui-rounded-radius5 subhead1";
      break;
    case "full-small":
      sizeStyle = "ui-px-[48px] ui-py-[10px] ui-rounded-radius5 headline2";
      break;
    case "medium":
      sizeStyle = "ui-px-[90px] ui-py-[12px] ui-rounded-radius5 subhead1";
      break;
    case "round":
      sizeStyle = "ui-px-[22px] ui-py-[12px] ui-rounded-radius100 body2M";
      break;
    case "round-small":
      sizeStyle = "ui-px-[20px] ui-py-[8px] ui-rounded-radius100 body4M";
      break;
    default:
      sizeStyle = "";
  }
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
      className={`ui-flex ui-justify-center ui-items-center disabled:ui-bg-neutral30 ${sizeStyle} ${colorStyle} ${width} ${height} ${padding} ${margin} ${border} ${font}`}
    >
      {children}
    </button>
  );
};
