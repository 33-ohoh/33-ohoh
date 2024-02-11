"use client";

import { InputHTMLAttributes, ReactNode } from "react";

import {
  CheckActive,
  CheckboxInActive,
  RadioActive,
  RadioInActive,
} from "@repo/ui/index";
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
    <div className="ui-flex ui-items-center ui-gap-1">
      <div onClick={props.onClick} className="ui-cursor-pointer">
        {checked ? <RadioActive /> : <RadioInActive />}
      </div>
      {label}
    </div>
  );
};
