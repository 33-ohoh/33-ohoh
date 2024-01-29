"use client";
import InterestAndPrivacyForm from "../../components/signup/InterestAndPrivacyForm";
import SignupForm from "../../components/signup/SignupForm";
import SignUpSuccess from "../../components/signup/SignUpSuccess";
import SignupTerm from "../../components/signup/SignupTerm";

import { useState } from "react";
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
    <>
      <h1>signup</h1>
      {step !== 4 && <div>stepper</div>}
      {currentPage}
    </>
  );
};

export default withAuth(Signup);
