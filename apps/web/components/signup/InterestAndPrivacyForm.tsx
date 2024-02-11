import type { Dispatch, FormEvent, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSignupData } from "../../store/signupSlice";
import { updateUser } from "./../../apis/auth";

import { Button } from "@repo/ui/button";
import { Checkbox } from "@repo/ui/checkbox";
import FilterTag from "../main/FilterTag";

const allInterests = [
  "서버/백앤드 개발자",
  "웹 풀스택 개발자",
  "안드로이드 개발자",
  "IOS 개발자",
  "크로스플랫폼 앱개발자",
  "게임 클라이언트 개발자",
  "DBA",
  "빅데이터 엔지니어",
  "인공지능/머신러닝",
  "프론트엔드 개발자",
  "개발 PM",
  "게임 서버 개발자",
  "블록체인",
  "QA엔지니어",
  "웹퍼블리셔",
];
interface InterestAndPrivacyFormProps {
  setStep: Dispatch<SetStateAction<number>>;
}

const InterestAndPrivacyForm = ({ setStep }: InterestAndPrivacyFormProps) => {
  const dispatch = useAppDispatch();
  const signupState = useAppSelector((state) => state.signup);
  const isMinInterestsSelected = signupState.interests.length >= 2;

  const SignupSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await updateUser(
      signupState.id,
      {
        name: signupState.name,
        username: signupState.username,
        termConsents: JSON.stringify({
          collectionAndUse: signupState.collectionAndUse,
          identification: signupState.identification,
          marketing: signupState.marketing,
          privacyPolicy: signupState.privacyPolicy,
          telCompany: signupState.telCompany,
          termsOfService: signupState.termsOfService,
        }),
        proposalConsents: JSON.stringify({
          feedback: signupState.feedbackProposal,
          job: signupState.jobProposal,
          project: signupState.projectProposal,
        }),
        interests: signupState.interests,
      },
      signupState.token,
    );

    const expiresIn = 3600;
    const expirationTime = new Date().getTime() + expiresIn * 1000;
    sessionStorage.setItem("token", signupState.token);
    sessionStorage.setItem("tokenExpiration", expirationTime.toString());

    setStep(4);
  };

  const allInterestsCheckboxHandler = () => {
    if (signupState.interests.length !== allInterests.length) {
      dispatch(
        setSignupData({
          interests: allInterests,
        }),
      );
    } else {
      dispatch(
        setSignupData({
          interests: [],
        }),
      );
    }
  };

  const interestCheckboxHandler = (selectedInterest: string) => {
    const isExist = signupState.interests.includes(selectedInterest);
    if (!isExist) {
      dispatch(
        setSignupData({
          interests: [...signupState.interests, selectedInterest],
        }),
      );
    } else {
      dispatch(
        setSignupData({
          interests: [
            ...signupState.interests.filter(
              (interest: string) => interest !== selectedInterest,
            ),
          ],
        }),
      );
    }
  };

  const proposalCheckboxHandler = (proposal: string) => {
    dispatch(
      setSignupData({
        [proposal]: !signupState[proposal],
      }),
    );
  };

  return (
    <form
      className="flex flex-col items-center mt-small1"
      onSubmit={SignupSubmitHandler}
    >
      <div>
        <div className="flex items-end">
          <span className="mr-[13px] display5R">관심 분야</span>
          <span className="body4M text-[#494949]">최소 2개 이상</span>
        </div>

        <div className="w-[680px] flex flex-wrap gap-[10px] mt-extraSmall2">
          <FilterTag
            text="전체"
            isActive={signupState.interests.length === allInterests.length}
            onClick={() => allInterestsCheckboxHandler()}
          />
          {allInterests.map((interest) => (
            <FilterTag
              key={interest}
              text={interest}
              isActive={signupState.interests.includes(interest)}
              onClick={() => interestCheckboxHandler(interest)}
            />
          ))}
        </div>
      </div>

      <div className="w-full">
        <div className="display5R mt-small1">제안 허용</div>
        <div className="flex gap-[50px] py-3">
          <Checkbox
            label={<label>채용 제안</label>}
            onClick={() => proposalCheckboxHandler("jobProposal")}
            checked={signupState.jobProposal}
          />
          <Checkbox
            label={<label>의견 제안</label>}
            onClick={() => proposalCheckboxHandler("feedbackProposal")}
            checked={signupState.feedbackProposal}
          />
          <Checkbox
            label={<label>프로젝트 제안</label>}
            onClick={() => proposalCheckboxHandler("projectProposal")}
            checked={signupState.projectProposal}
          />
        </div>
      </div>

      <Button
        size="full"
        color="blue-full"
        margin="mt-small1"
        disabled={!isMinInterestsSelected}
        type="submit"
      >
        완료
      </Button>
    </form>
  );
};

export default InterestAndPrivacyForm;
