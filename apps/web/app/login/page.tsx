"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { authenticateWithPassword } from "../../apis/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { login, setLoginData } from "../../store/loginSlice";
import withAuth from "../../utils/withAuth";

import { Button } from "@repo/ui/button";
import { Checkbox } from "@repo/ui/checkbox";
import { Divider } from "@repo/ui/divider";
import { Input } from "@repo/ui/input";

import { ERROR_MESSAGES } from "../../constants/errorMessages";
import type { LoginFormData, LoginResponse } from "../../types/auth";
import { ErrorResponse } from "../../types/response";
import { PATTERNS } from "./../../constants/patterns";

interface InputDatas {
  [index: string]: string;
}

const validateEmail = (email: string): string | undefined => {
  if (!PATTERNS.EMAIL.test(email)) {
    return ERROR_MESSAGES.INVALID_EMAIL_FORMAT;
  }
};

const validatePassword = (password: string): string | undefined => {
  if (!PATTERNS.PASSWORD.test(password)) {
    return ERROR_MESSAGES.INVALID_PASSWORD_FORMAT;
  }
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm<InputDatas>({ mode: "onBlur" });

  const dispatch = useAppDispatch();
  const loginState = useAppSelector((state) => state.login);
  const router = useRouter();

  const handleLoginSubmit: SubmitHandler<InputDatas> = async () => {
    const email = getValues("email");
    const password = getValues("password");

    const loginData: LoginFormData = {
      identity: email,
      password: password,
    };

    try {
      const response = await authenticateWithPassword(loginData);

      if (response && "token" in response) {
        const token = (response as LoginResponse).token;
        const expiresIn = 3600;
        const expirationTime = new Date().getTime() + expiresIn * 1000;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("tokenExpiration", expirationTime.toString());
        dispatch(login({ email, token }));
      }

      if (loginState.rememberUser) {
        localStorage.setItem("savedEmail", email);
      } else {
        localStorage.removeItem("savedEmail");
      }

      router.replace("/");
    } catch (error: unknown) {
      if ((error as ErrorResponse)?.code > 200) {
        setError("password", {
          type: "manual",
          message: "잘못된 비밀번호입니다.",
        });
      }
    }
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem("savedEmail");
    if (storedEmail) {
      dispatch(setLoginData({ email: storedEmail }));
      dispatch(setLoginData({ rememberUser: true }));
    }
  }, []);

  return (
    <div className="flex flex-col justify-center items-center h-[738px] mt-[172px] mb-[114px]">
      <h1 className="hidden">Login</h1>
      <Link href="/">
        <Image
          priority
          src="/common/sfaclog-logo-text-black.png"
          alt="sfaclog-logo-text-black"
          width="280"
          height="82"
        />
      </Link>

      <form onSubmit={handleSubmit(handleLoginSubmit)}>
        <Input
          margin="mt-[65px] mb-[45px]"
          name="email"
          type="text"
          defaultValue={loginState.email}
          register={register}
          options={{
            required: ERROR_MESSAGES.EMAIL_REQUIRED,
            validate: (email: string) => validateEmail(email),
          }}
          placeholder="example@example.com"
          errorMessage={errors.email?.message}
        />
        <Input
          name="password"
          type="password"
          register={register}
          options={{
            required: ERROR_MESSAGES.PASSWORD_REQUIRED,
            validate: (password: string) => validatePassword(password),
          }}
          placeholder="password"
          errorMessage={errors.password?.message}
        />

        <div className="w-[670px] flex justify-end">
          <Checkbox
            label={
              <label className="mr-[10px] py-[10px] body1R">
                로그인 정보 저장
              </label>
            }
            onClick={() =>
              dispatch(setLoginData({ rememberUser: !loginState.rememberUser }))
            }
            checked={loginState.rememberUser}
          />
        </div>
        <Button size="full" color="blue-full" margin="mt-small1" type="submit">
          로그인
        </Button>
      </form>
      <div className="w-[664px] flex justify-between mt-extraSmall5 mb-regular2">
        <Link className="underline body1M" href="signup">
          회원가입하기
        </Link>

        <Link className="body1M" href="find-password">
          비밀번호 찾기
        </Link>
      </div>
      <div className="flex items-center gap-[25px]">
        <Divider width="w-[258px]" />
        <div className="body1R">SNS LOGIN</div>
        <Divider width="w-[258px]" />
      </div>
      <div className="flex gap-[20px] mt-extraSmall1">
        <Image
          className="cursor-pointer"
          priority
          src="/common/kakao-logo-circle.svg"
          alt="kakao-logo-circle"
          width="84"
          height="84"
        />
        <Image
          className="cursor-pointer"
          priority
          src="/common/naver-logo-circle.svg"
          alt="naver-logo-circle"
          width="84"
          height="84"
        />
        <Image
          className="cursor-pointer"
          priority
          src="/common/google-logo-circle.svg"
          alt="google-logo-circle"
          width="84"
          height="84"
        />
      </div>
    </div>
  );
};

export default withAuth(Login);
