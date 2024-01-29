import type { Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSignupData } from "../../store/signupSlice";

interface InterestAndPrivacyFormProps {
  setStep: Dispatch<SetStateAction<number>>;
}

const InterestAndPrivacyForm = ({ setStep }: InterestAndPrivacyFormProps) => {
  const dispatch = useAppDispatch();
  const signupState = useAppSelector((state) => state.signup);
  const isMinInterestsSelected = signupState.interests.length >= 2;
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
  const allInterestsCheckboxHandler = (e: any) => {
    if (e.target.checked) {
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

  const submitHandler = (e: any) => {
    console.log(signupState);
    e.preventDefault();
    dispatch(
      setSignupData({
        interests: signupState.interests,
        projectProposal: signupState.projectProposal,
        feedbackProposal: signupState.feedbackProposal,
        jobProposal: signupState.jobProposal,
      }),
    );
    setStep(4);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <input
          type="checkbox"
          onChange={(e) => allInterestsCheckboxHandler(e)}
        />
        <label>전체</label>

        {allInterests.map((interest) => (
          <div key={interest}>
            <input
              type="checkbox"
              checked={signupState.interests.includes(interest)}
              onChange={() => interestCheckboxHandler(interest)}
            />
            <label>{interest}</label>
          </div>
        ))}

        <div>관심 분야</div>
        <div>최소 2개 이상</div>
      </div>

      <div>
        <div>제안 허용</div>

        <label>채용 제안</label>
        <input
          type="checkbox"
          onChange={() => proposalCheckboxHandler("jobProposal")}
          checked={signupState.jobProposal}
        />

        <label>의견 제안</label>
        <input
          type="checkbox"
          onChange={() => proposalCheckboxHandler("feedbackProposal")}
          checked={signupState.feedbackProposal}
        />

        <label>프로젝트 제안</label>
        <input
          type="checkbox"
          onChange={() => proposalCheckboxHandler("projectProposal")}
          checked={signupState.projectProposal}
        />
      </div>
      <button disabled={!isMinInterestsSelected} type="submit">
        완료
      </button>
    </form>
  );
};

export default InterestAndPrivacyForm;
