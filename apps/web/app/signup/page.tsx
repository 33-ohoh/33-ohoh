"use client";
import { Stepper } from "@repo/ui/stepper";
import { useState } from "react";
import InterestAndPrivacyForm from "../../components/signup/InterestAndPrivacyForm";
import SignUpSuccess from "../../components/signup/SignUpSuccess";
import SignupForm from "../../components/signup/SignupForm";
import SignupTerm from "../../components/signup/SignupTerm";
import withAuth from "../../utils/withAuth";

const Signup = () => {
  const [step, setStep] = useState(1);
  let currentPage = <SignupTerm setStep={setStep} />;

  switch (step) {
    case 1:
      currentPage = <SignupTerm setStep={setStep} />;
      break;
    case 2:
      currentPage = <SignupForm setStep={setStep} />;
      break;
    case 3:
      currentPage = <InterestAndPrivacyForm setStep={setStep} />;
      break;
    case 4:
      currentPage = <SignUpSuccess />;
      break;
    default:
      currentPage = <SignupTerm setStep={setStep} />;
      break;
  }

  return (
    <div className="flex flex-col items-center mt-regular1">
      {step !== 4 && (
        <>
          <h1 className="display4 mb-small4">회원 가입</h1>
          <Stepper currentStep={step} stepCount={3} />
        </>
      )}
      {currentPage}
    </div>
  );
};

export default withAuth(Signup);
