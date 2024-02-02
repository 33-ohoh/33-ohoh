"use client";

import { InputHTMLAttributes, ReactNode } from "react";

import { CheckActive, CheckboxInActive } from "./icon";
interface CheckProps extends InputHTMLAttributes<HTMLInputElement> {
  checked: boolean;
}

interface CheckboxProps extends CheckProps {
  label: ReactNode;
}

export const Check = ({ checked, ...props }: CheckProps) => {
  return (
    <div onClick={props.onClick} className="ui-cursor-pointer">
      {checked ? <CheckActive /> : <CheckboxInActive />}
    </div>
  );
};

export const Checkbox = ({ checked, label, ...props }: CheckboxProps) => {
  return (
    <div className="ui-flex items-center ui-gap-3">
      <div onClick={props.onClick} className="ui-cursor-pointer">
        {checked ? <CheckActive /> : <CheckboxInActive />}
      </div>
      {label}
    </div>
  );
};

export const Radio = ({ checked, label, ...props }: CheckboxProps) => {
  return (
    <div className="ui-flex ui-gap-3">
      <div onClick={props.onClick} className="ui-cursor-pointer">
        {checked ? <CheckActive /> : <CheckboxInActive />}
      </div>
      {label}
    </div>
  );
};
