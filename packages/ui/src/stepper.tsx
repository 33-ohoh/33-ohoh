import React from "react";

interface StepperProps {
  stepCount: number;
  currentStep: number;
}

export const Stepper = ({ stepCount, currentStep }: StepperProps) => {
  const stepperItems = [];

  for (let i = 1; i <= stepCount; i++) {
    stepperItems.push(
      <React.Fragment key={i}>
        <div
          className={`flex ui-justify-center ui-items-center ui-w-[30px] ui-h-[30px] ui-rounded-radius100 
          ${
            i <= currentStep
              ? "ui-bg-primary90 ui-text-white"
              : "ui-border ui-border-solid ui-border-primary90 ui-text-primary90"
          }`}
        >
          {i}
        </div>
        {i < stepCount && (
          <div className="ui-w-[25px] ui-h-[2px] ui-bg-primary90 ui-mt-[15px]" />
        )}
      </React.Fragment>,
    );
  }

  return (
    <>
      <div className="flex">{stepperItems}</div>
    </>
  );
};
