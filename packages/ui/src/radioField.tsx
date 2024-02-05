import React, {
  MouseEvent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import { CheckActive, CheckboxInActive } from "./icon";

interface RadioFieldProps {
  method: any;
  id: string;
}

const RadioField = ({ id, method }: RadioFieldProps) => {
  const { register, getValues, watch, setValue } = method;
  const [isCheckedState, setIsCheckedState] = useState(false);
  const logState = watch("log");
  useEffect(() => {
    if (id === getValues("log")) {
      setIsCheckedState(true);
    } else {
      setIsCheckedState(false);
    }
    console.log(isCheckedState);
  }, [watch, logState]);
  return (
    <>
      <input
        className="hidden"
        {...register(id)}
        id={id}
        type="radio"
        checked={isCheckedState}
        value={id}
      />
      <label htmlFor={id} className="flex w-full h-full">
        {isCheckedState ? <CheckActive /> : <CheckboxInActive />}
      </label>
    </>
  );
};

export default RadioField;
