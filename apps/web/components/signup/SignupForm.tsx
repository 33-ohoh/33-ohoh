import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  authenticateAdminWithPassword,
  authenticateWithPassword,
  createUser,
  getUsersByFields,
  requestVerification,
  updateUser,
  usernameDoubleCheck,
} from "../../apis/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setSignupData } from "../../store/signupSlice";

import { Button } from "@repo/ui/button";
import { Checkbox } from "@repo/ui/checkbox";
import { Input } from "@repo/ui/input";

import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { PATTERNS } from "../../constants/patterns";
import type { ListResponse } from "../../types/response";
import type { User } from "../../types/user";

interface InputDatas {
  [index: string]: string;
}
interface SignupFormProps {
  setStep: Dispatch<SetStateAction<number>>;
}

const SignupForm = ({ setStep }: SignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    getValues,
  } = useForm<InputDatas>({ mode: "onBlur" });

  const dispatch = useAppDispatch();
  const signupState = useAppSelector((state) => state.signup);

  const allChecked =
    signupState.collectionAndUse &&
    signupState.identification &&
    signupState.telCompany &&
    signupState.termsOfService;

  const disabled =
    !allChecked ||
    !isValid ||
    signupState.usernameVerification !== "Verified" ||
    signupState.usernameVerification !== "Verified";

  const [isEqualPassword, setIsEqualPassword] = useState(false);

  const validateEmail = (email: string): string | undefined => {
    if (!PATTERNS.EMAIL.test(email)) {
      return ERROR_MESSAGES.INVALID_EMAIL_FORMAT;
    }
  };

  const validatePassword = (password: string): string | undefined => {
    const password1 = getValues("password");
    const password2 = getValues("passwordConfirm");

    if (!PATTERNS.PASSWORD.test(password)) {
      return ERROR_MESSAGES.INVALID_PASSWORD_FORMAT;
    }

    if (password1 === password2) {
      setIsEqualPassword(true);
    } else {
      setIsEqualPassword(false);
    }
  };

  const handleDoubleCheck = async () => {
    const username = getValues("username");
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
    const email = getValues("email");
    const password = "dlatlqlalfqjsgh";
    const passwordConfirm = "dlatlqlalfqjsgh";
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

  const handleSignupSubmit: SubmitHandler<InputDatas> = async () => {
    const name = getValues("name");
    const username = getValues("username");
    const email = getValues("email");
    const password = getValues("password");
    const passwordConfirm = getValues("passwordConfirm");

    const response = await authenticateWithPassword({
      identity: email,
      password: "dlatlqlalfqjsgh",
    });

    if (response && "record" in response && response.record.id) {
      await updateUser(
        response.record.id,
        { name, oldPassword: "dlatlqlalfqjsgh", password, passwordConfirm },
        response.token,
      );

      dispatch(
        setSignupData({
          id: response.record.id,
          name: name,
          username: username,
          email: email,
          password: password,
          passwordConfirm: passwordConfirm,
          collectionAndUse: signupState.collectionAndUse,
          identification: signupState.identification,
          telCompany: signupState.telCompany,
          termsOfService: signupState.termsOfService,
          marketing: signupState.marketing,
          token: response.token,
        }),
      );
      setStep(3);
    }
  };

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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <form onSubmit={handleSubmit(handleSignupSubmit)}>
      <Input
        label={<label className="display5R">이름</label>}
        name="name"
        type="text"
        register={register}
        placeholder="이름"
        font="body1R"
        margin="mt-small1"
        options={{
          required: ERROR_MESSAGES.NAME_REQUIRED,
        }}
        errorMessage={errors.name?.message}
        padding="py-[20px] pl-[20px]"
      />

      <div className="flex items-center justify-between mt-extraSmall1">
        <Input
          label={<label className="display5R">닉네임</label>}
          name="username"
          type="text"
          register={register}
          placeholder="닉네임"
          readOnly={signupState.usernameVerification === "Verified"}
          width="w-[500px]"
          font="body1R"
          options={{
            required: ERROR_MESSAGES.USERNAME_REQUIRED,
          }}
          errorMessage={errors.username?.message}
          padding="py-[20px] pl-[20px]"
        />
        <Button
          padding="px-[42px] py-[20px]"
          border="rounded-radius15"
          font="body1R"
          margin={errors.username ? "" : "mt-[40px]"}
          disabled={signupState.usernameVerification === "Verified"}
          onClick={handleDoubleCheck}
          type="button"
        >
          {signupState.usernameVerification === "Unverified"
            ? "중복확인"
            : "사용가능"}
        </Button>
      </div>

      <div className="flex items-center justify-between mt-extraSmall1">
        <Input
          label={<label className="display5R">이메일</label>}
          name="email"
          type="text"
          width="w-[500px]"
          font="body1R"
          register={register}
          readOnly={signupState.emailVerification === "Verified"}
          options={{
            required: ERROR_MESSAGES.EMAIL_REQUIRED,
            validate: (email) => validateEmail(email),
          }}
          placeholder="example@example.com"
          errorMessage={errors.email?.message}
          padding="py-[20px] pl-[20px]"
        />
        <Button
          padding="px-[42px] py-[20px]"
          border="rounded-radius15"
          font="body1R"
          margin={errors.email ? "" : "mt-[40px]"}
          disabled={signupState.emailVerification === "Verified"}
          onClick={handleEmailAuthentication}
          type="button"
        >
          {signupState.emailVerification === "Unverified"
            ? "인증요청"
            : "인증확인"}
        </Button>
      </div>

      <Input
        label={<label className="display5R">비밀번호</label>}
        name="password"
        type="password"
        font="body1R"
        margin="mt-extraSmall1"
        register={register}
        options={{
          required: ERROR_MESSAGES.PASSWORD_REQUIRED,
          validate: (password) => validatePassword(password),
        }}
        placeholder="비밀번호"
        errorMessage={errors.password?.message}
        padding="py-[20px] pl-[20px]"
      />

      <Input
        label={<label className="display5R">비밀번호 확인</label>}
        name="passwordConfirm"
        type="password"
        font="body1R"
        margin="mt-extraSmall1"
        register={register}
        options={{
          required: ERROR_MESSAGES.PASSWORD_REQUIRED,
          validate: (password) => validatePassword(password),
        }}
        placeholder="비밀번호 확인"
        errorMessage={errors.passwordConfirm?.message}
        successMessage={
          isEqualPassword && !errors.passwordConfirm && "비밀번호가 일치합니다."
        }
        padding="py-[20px] pl-[20px]"
      />

      <div className="flex flex-col gap-5 body1R mt-small1">
        <Checkbox
          label={
            <label className="headline1">본인인증 약관 전체동의 (필수)</label>
          }
          checked={allChecked}
          onClick={handleAllCheckChange}
        />
        <Checkbox
          label={<label>개인정보 수집 이용 동의 (필수)</label>}
          checked={signupState.collectionAndUse}
          onClick={() => handleCheckboxChange("collectionAndUse")}
        />
        <Checkbox
          label={<label>고유식별 정보처리 동의 (필수)</label>}
          checked={signupState.identification}
          onClick={() => handleCheckboxChange("identification")}
        />
        <Checkbox
          label={<label>통신사 이용약관 동의 (필수)</label>}
          checked={signupState.telCompany}
          onClick={() => handleCheckboxChange("telCompany")}
        />
        <Checkbox
          label={<label>서비스 이용약관 동의 (필수)</label>}
          checked={signupState.termsOfService}
          onClick={() => handleCheckboxChange("termsOfService")}
        />
        <Checkbox
          label={<label>마케팅 정보 수신 동의 (선택)</label>}
          checked={signupState.marketing}
          onClick={() => handleCheckboxChange("marketing")}
        />
      </div>

      <Button
        size="full"
        color="blue-full"
        margin="mt-small1"
        disabled={disabled}
        type="submit"
        padding="py-[15px]"
      >
        다음
      </Button>
    </form>
  );
};

export default SignupForm;
