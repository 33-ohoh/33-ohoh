import type { Dispatch, SetStateAction } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSignupData } from "../../store/signupSlice";

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

  const submitHandler = (e: any) => {
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
      <div style={{ display: "flex" }}>
        <div>개인정보처리방침</div>
        <div>
          <label>전체 동의</label>
          <input
            onChange={handleAllCheckChange}
            type="checkbox"
            checked={allChecked}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "675px",
          height: "410px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          flexShrink: 0,
          border: "1px solid black",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "16px",
          overflow: "scroll",
        }}
      >
        국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을
        도모함으로써 농·어민의 이익을 보호한다. 국가는 사회보장·사회복지의
        증진에 노력할 의무를 진다. 국회의원의 수는 법률로 정하되, 200인 이상으로
        한다. 대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안
        당시의 대통령에 대하여는 효력이 없다. 제3항의 승인을 얻지 못한 때에는 그
        처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에 의하여 개정
        또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을
        회복한다. 국회는 헌법 또는 법률에 특별한 규정이 없는 한 재적의원
        과반수의 출석과 출석의원 과반수의 찬성으로 의결한다. 가부동수인 때에는
        부결된 것으로 본다. 법률이 헌법에 위반되는 여부가 재판의 전제가 된
        경우에는 법원은 헌법재판소에 제청하여 그 심판에 의하여 재판한다. 모든
        국민은 직업선택의 자유를 가진다. 교육의 자주성·전문성·정치적 중립성 및
        대학의 자율성은 법률이 정하는 바에 의하여 보장된다. 정부는 회계연도마다
        예산안을 편성하여 회계연도 개시 90일전까지 국회에 제출하고, 국회는
        회계연도 개시 30일전까지 이를 의결하여야 한다. 헌법재판소는 법률에
        저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과 사무처리에
        관한 규칙을 제정할 수 있다. 이 헌법공포 당시의 국회의원의 임기는 제1항에
        의한 국회의 최초의 집회일 전일까지로 한다. 대법원은 법률에 저촉되지
        아니하는 범위안에서 소송에 관한 절차, 법원의 내부규율과 사무처리에 관한
        규칙을 제정할 수 있다. 국가는 노인과 청소년의 복지향상을 위한 정책을
        실시할 의무를 진다. 정당은 그 목적·조직과 활동이 민주적이어야 하며,
        국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다. 감사원의
        조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한 사항은
        법률로 정한다. 국가는 건전한 소비행위를 계도하고 생산품의 품질향상을
        촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다.
        국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로
        폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지
        아니하다.
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <label>동의</label>
          <input
            required
            onChange={() => handleAgreeCheckboxChange("privacyPolicy")}
            type="checkbox"
            checked={signupState.privacyPolicy}
          />
        </div>

        <div>
          <label>거부</label>
          <input
            onChange={() => handleDisagreeCheckboxChange("privacyPolicy")}
            type="checkbox"
            checked={!signupState.privacyPolicy}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "675px",
          height: "410px",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          flexShrink: 0,
          border: "1px solid black",
          fontSize: "12px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "16px",
          overflow: "scroll",
        }}
      >
        국가는 농수산물의 수급균형과 유통구조의 개선에 노력하여 가격안정을
        도모함으로써 농·어민의 이익을 보호한다. 국가는 사회보장·사회복지의
        증진에 노력할 의무를 진다. 국회의원의 수는 법률로 정하되, 200인 이상으로
        한다. 대통령의 임기연장 또는 중임변경을 위한 헌법개정은 그 헌법개정 제안
        당시의 대통령에 대하여는 효력이 없다. 제3항의 승인을 얻지 못한 때에는 그
        처분 또는 명령은 그때부터 효력을 상실한다. 이 경우 그 명령에 의하여 개정
        또는 폐지되었던 법률은 그 명령이 승인을 얻지 못한 때부터 당연히 효력을
        회복한다. 국회는 헌법 또는 법률에 특별한 규정이 없는 한 재적의원
        과반수의 출석과 출석의원 과반수의 찬성으로 의결한다. 가부동수인 때에는
        부결된 것으로 본다. 법률이 헌법에 위반되는 여부가 재판의 전제가 된
        경우에는 법원은 헌법재판소에 제청하여 그 심판에 의하여 재판한다. 모든
        국민은 직업선택의 자유를 가진다. 교육의 자주성·전문성·정치적 중립성 및
        대학의 자율성은 법률이 정하는 바에 의하여 보장된다. 정부는 회계연도마다
        예산안을 편성하여 회계연도 개시 90일전까지 국회에 제출하고, 국회는
        회계연도 개시 30일전까지 이를 의결하여야 한다. 헌법재판소는 법률에
        저촉되지 아니하는 범위안에서 심판에 관한 절차, 내부규율과 사무처리에
        관한 규칙을 제정할 수 있다. 이 헌법공포 당시의 국회의원의 임기는 제1항에
        의한 국회의 최초의 집회일 전일까지로 한다. 대법원은 법률에 저촉되지
        아니하는 범위안에서 소송에 관한 절차, 법원의 내부규율과 사무처리에 관한
        규칙을 제정할 수 있다. 국가는 노인과 청소년의 복지향상을 위한 정책을
        실시할 의무를 진다. 정당은 그 목적·조직과 활동이 민주적이어야 하며,
        국민의 정치적 의사형성에 참여하는데 필요한 조직을 가져야 한다. 감사원의
        조직·직무범위·감사위원의 자격·감사대상공무원의 범위 기타 필요한 사항은
        법률로 정한다. 국가는 건전한 소비행위를 계도하고 생산품의 품질향상을
        촉구하기 위한 소비자보호운동을 법률이 정하는 바에 의하여 보장한다.
        국회에 제출된 법률안 기타의 의안은 회기중에 의결되지 못한 이유로
        폐기되지 아니한다. 다만, 국회의원의 임기가 만료된 때에는 그러하지
        아니하다.
      </div>

      <div style={{ display: "flex" }}>
        <div>
          <label>동의</label>
          <input
            required
            onChange={() => handleAgreeCheckboxChange("termsOfService")}
            type="checkbox"
            checked={signupState.termsOfService}
          />
        </div>

        <div>
          <label>거부</label>
          <input
            onChange={() => handleDisagreeCheckboxChange("termsOfService")}
            type="checkbox"
            checked={!signupState.termsOfService}
          />
        </div>
      </div>

      <button
        disabled={!signupState.privacyPolicy || !signupState.termsOfService}
        type="submit"
        style={{
          display: "flex",
          width: "670px",
          height: "80px",
          padding: "25px 314px",
          justifyContent: "center",
          alignItems: "center",
          gap: "10px",
          flexShrink: 0,
          borderRadius: "15px",
          background: "var(--neutral-30, #B3B3B3)",
        }}
      >
        다음
      </button>
    </form>
  );
};

export default SignupTerm;
