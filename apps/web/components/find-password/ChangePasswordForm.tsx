"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { requestPasswordReset } from "../../apis/auth";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/loginSlice";

import { ERROR_MESSAGES } from "../../constants/errorMessages";
import { PATTERNS } from "./../../constants/patterns";

import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";

interface InputDatas {
  [index: string]: string;
}

interface ChangePasswordFormProps {
  email: string;
}

const ChangePasswordForm = ({ email }: ChangePasswordFormProps) => {
  const {
    register,
    formState: { errors, isValid },
    getValues,
  } = useForm<InputDatas>({ mode: "onBlur" });

  const dispatch = useAppDispatch();
  const router = useRouter();

  const [isEqualPassword, setIsEqualPassword] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const requestPasswordResetHandler = async () => {
    const response = await requestPasswordReset(email);
    if (response === null) {
      dispatch(logout());
      setIsOpen(true);
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      {isOpen && (
        <div className="flex justify-center items-center bg-[#0000005A] top-0 left-0 fixed w-full h-full z-[999]">
          <div className="w-[444px] h-[222px] rounded-radius15">
            <div className="flex flex-col justify-center items-center bg-white h-[162px] rounded-t-radius15">
              <span className="headline2">비밀번호가 변경되었습니다</span>
              <span>다시 로그인해주세요.</span>
            </div>
            <button
              onClick={() => router.replace("/login")}
              className="w-full h-[60px] bg-primary90 text-white rounded-b-radius15"
            >
              확인
            </button>
          </div>
        </div>
      )}
      <h1 className="display4 mt-regular1">비밀번호 변경하기</h1>
      <Input
        label={<label className="display5R">새 비밀번호</label>}
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
      />

      <Input
        label={<label className="display5R">새 비밀번호 확인</label>}
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
      />
      <Button
        onClick={requestPasswordResetHandler}
        size="full"
        color="blue-full"
        margin="mt-medium"
        disabled={!isValid || !isEqualPassword}
        type="button"
      >
        완료
      </Button>
    </div>
  );
};

export default ChangePasswordForm;
