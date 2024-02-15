import type { Dispatch, FormEvent, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSignupData } from "../../store/signupSlice";

import { Button } from "@repo/ui/button";
import { Radio } from "@repo/ui/checkbox";

import { TERMS } from "../../constants/terms";
interface SignupTermProps {
  setStep: Dispatch<SetStateAction<number>>;
}
const SignupTerm = ({ setStep }: SignupTermProps) => {
  const dispatch = useAppDispatch();
  const signupState = useAppSelector((state) => state.signup);
  const allChecked = signupState.privacyPolicy && signupState.termsOfService;

  const handleAllCheckChange = () => {
    dispatch(
      setSignupData({
        privacyPolicy: !allChecked,
        termsOfService: !allChecked,
      }),
    );
  };

  const handleAgreeCheckboxChange = (fieldName: string) => {
    dispatch(setSignupData({ [fieldName]: true }));
  };

  const handleDisagreeCheckboxChange = (fieldName: string) => {
    dispatch(setSignupData({ [fieldName]: false }));
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      setSignupData({
        privacyPolicy: signupState.privacyPolicy,
        termsOfService: !signupState.termsOfService,
      }),
    );
    setStep(2);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="flex items-center justify-between">
        <span>개인정보처리방침</span>
        <Radio
          label={<label>전체 동의</label>}
          onClick={handleAllCheckChange}
          checked={allChecked}
        />
      </div>

      <div className="terms flex flex-col w-[675px] h-[410px] whitespace-pre-line border border-neutral80 body5R overflow-y-scroll scrollBar">
        {TERMS.PRIVACY_POLICY}
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <Radio
            label={<label>동의</label>}
            onClick={() => handleAgreeCheckboxChange("privacyPolicy")}
            checked={signupState.privacyPolicy}
          />
        </div>

        <div>
          <Radio
            label={<label>거부</label>}
            onClick={() => handleDisagreeCheckboxChange("privacyPolicy")}
            checked={!signupState.privacyPolicy}
          />
        </div>
      </div>

      <div className="terms flex flex-col w-[675px] h-[410px] whitespace-pre-line border border-neutral80 body5R overflow-y-scroll scrollBar">
        {TERMS.TERMS_OF_SERVICE}
      </div>

      <div className="flex">
        <Radio
          label={<label>동의</label>}
          onClick={() => handleAgreeCheckboxChange("termsOfService")}
          checked={signupState.termsOfService}
        />
        <Radio
          label={<label>거부</label>}
          onClick={() => handleDisagreeCheckboxChange("termsOfService")}
          checked={!signupState.termsOfService}
        />
      </div>

      <Button
        size="full"
        color="blue-full"
        margin="mt-medium"
        disabled={!signupState.privacyPolicy || !signupState.termsOfService}
        type="submit"
      >
        다음
      </Button>
    </form>
  );
};

export default SignupTerm;
