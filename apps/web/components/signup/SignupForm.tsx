import type { Dispatch, SetStateAction } from "react";
import {
  authenticateAdminWithPassword,
  createUser,
  getUsersByFields,
  requestVerification,
  usernameDoubleCheck,
} from "../../apis/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSignupData } from "../../store/signupSlice";
import type { ListResponse } from "../../types/response";
import type { User } from "../../types/user";

interface SignupFormProps {
  setStep: Dispatch<SetStateAction<number>>;
}

const SignupForm = ({ setStep }: SignupFormProps) => {
  const dispatch = useAppDispatch();
  const signupState = useAppSelector((state) => state.signup);
  const allChecked =
    signupState.collectionAndUse &&
    signupState.identification &&
    signupState.telCompany &&
    signupState.termsOfService;

  const handleCheckboxChange = (fieldName: string) => {
    dispatch(setSignupData({ [fieldName]: !signupState[fieldName] }));
  };

  const handleAllCheckChange = () => {
    dispatch(
      setSignupData({
        collectionAndUse: !allChecked,
        identification: !allChecked,
        telCompany: !allChecked,
        termsOfService: !allChecked,
        marketing: !allChecked,
      }),
    );
  };

  const handleDoubleCheck = async () => {
    const username = "jwjeon";
    const response = await usernameDoubleCheck(username);

    if (response && "items" in response && response.items.length !== 0) {
      dispatch(setSignupData({ usernameVerification: "Unverified" }));
      alert("사용중인 닉네임입니다.");
    } else {
      dispatch(setSignupData({ usernameVerification: "Verified" }));
      alert("사용가능한 닉네임입니다.");
    }
  };

  const handleEmailAuthentication = async () => {
    const email = "aaawodhks@nate.com";
    const password = "password!";
    const passwordConfirm = "password!";
    const emailVisibility = true;

    const response = await getUsersByFields("email", email);

    if (response && "items" in response && response.items.length !== 0) {
      emailVerificationCheck(response, email);
    } else {
      createUserAndEmailVerification({
        email,
        password,
        passwordConfirm,
        emailVisibility,
      });
    }
  };

  const emailVerificationCheck = async (
    response: ListResponse<User>,
    email: string,
  ) => {
    const user = response.items[0];
    if (user?.verified) {
      dispatch(setSignupData({ emailVerification: "Verified" }));
      alert("인증이 완료된 이메일 입니다.");
    } else {
      const emailResponse = await requestVerification(email);

      if (emailResponse === null) {
        dispatch(setSignupData({ emailVerification: "InProgress" }));
        alert("인증 메일을 발송하였습니다.");
      }
    }
  };

  const createUserAndEmailVerification = async ({
    email,
    password,
    passwordConfirm,
    emailVisibility,
  }: User) => {
    const adminToken = await getAdminToken();

    await createUser(
      {
        email,
        password,
        passwordConfirm,
        emailVisibility,
      },
      adminToken,
    );

    const emailResponse = await requestVerification(email);

    if (emailResponse === null) {
      dispatch(setSignupData({ emailVerification: "InProgress" }));
      alert("인증 메일을 발송하였습니다.");
    }
  };

  const getAdminToken = async () => {
    const response = await authenticateAdminWithPassword();
    return response && "token" in response ? response.token : "";
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
    dispatch(
      setSignupData({
        name: "testname",
        username: "testUsername",
        email: "testemail@test.com",
        password: "testpassword!",
        passwordConfirm: "testpassword!",
        collectionAndUse: signupState.collectionAndUse,
        identification: signupState.identification,
        telCompany: signupState.telCompany,
        termsOfService: signupState.termsOfService,
        marketing: signupState.marketing,
      }),
    );
    setStep(3);
  };
  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>이름</label>
        <input type="text" className="border border-gray-400" />
      </div>
      <div>
        <label>닉네임</label>
        <input type="text" className="border border-gray-400" />
        <button
          disabled={signupState.usernameVerification === "Verified"}
          onClick={handleDoubleCheck}
          type="button"
        >
          {signupState.usernameVerification === "Unverified"
            ? "중복 확인"
            : "사용 가능"}
        </button>
      </div>

      <div>
        <label>이메일</label>
        <input type="text" className="border border-gray-400" />
        <button
          disabled={signupState.emailVerification === "Verified"}
          onClick={handleEmailAuthentication}
          type="button"
        >
          {signupState.emailVerification === "Unverified"
            ? "인증요청"
            : "인증확인"}
        </button>
      </div>

      <div>
        <label>비밀번호</label>
        <input type="password" className="border border-gray-400" />
      </div>

      <div>
        <label>비밀번호 확인</label>
        <input type="password" className="border border-gray-400" />
      </div>

      <div>
        <label>본인인증 약관 전체동의 (필수)</label>
        <input
          type="checkbox"
          checked={allChecked}
          onChange={handleAllCheckChange}
        />

        <label>개인정보 수집 이용 동의 (필수)</label>
        <input
          required
          type="checkbox"
          checked={signupState.collectionAndUse}
          onChange={() => handleCheckboxChange("collectionAndUse")}
        />

        <label>고유식별 정보처리 동의 (필수)</label>
        <input
          required
          type="checkbox"
          checked={signupState.identification}
          onChange={() => handleCheckboxChange("identification")}
        />

        <label>통신사 이용약관 동의 (필수)</label>
        <input
          required
          type="checkbox"
          checked={signupState.telCompany}
          onChange={() => handleCheckboxChange("telCompany")}
        />

        <label>서비스 이용약관 동의 (필수)</label>
        <input
          required
          type="checkbox"
          checked={signupState.termsOfService}
          onChange={() => handleCheckboxChange("termsOfService")}
        />

        <label>마케팅 정보 수신 동의 (선택)</label>
        <input
          type="checkbox"
          checked={signupState.marketing}
          onChange={() => handleCheckboxChange("marketing")}
        />
      </div>

      <div>
        <button
          disabled={!allChecked}
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
      </div>
    </form>
  );
};

export default SignupForm;
