"use client";
import { Button } from "@repo/ui/button";
import { Input } from "@repo/ui/input";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import {
  authenticateAdminWithPassword,
  getUsersByFields,
  requestVerification,
  updateUser,
} from "../../apis/auth";

import { PATTERNS } from "../../constants/patterns";
import { ERROR_MESSAGES } from "./../../constants/errorMessages";

interface InputDatas {
  [index: string]: string;
}

interface FindPasswordFormProps {
  setIsVerified: Dispatch<SetStateAction<boolean>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
}

const validateEmail = (email: string): string | undefined => {
  if (!PATTERNS.EMAIL.test(email)) {
    return ERROR_MESSAGES.INVALID_EMAIL_FORMAT;
  }
};

const FindPasswordForm = ({
  setIsVerified,
  email,
  setEmail,
}: FindPasswordFormProps) => {
  const {
    register,
    formState: { errors },
  } = useForm<InputDatas>({ mode: "onBlur" });

  const [name, setName] = useState("");
  const [emailVerification, setEmailVerification] = useState("Unverified");

  const requestVerificationHandler = async () => {
    if (emailVerification === "InProgress") {
      emailVerificationCheckHandler();
      return;
    }

    const nameResponse = await getUsersByFields("name", name);

    if (
      nameResponse &&
      "items" in nameResponse &&
      nameResponse.items.length !== 0
    ) {
      const token = await getAdminToken();
      const userId = nameResponse.items[0]?.id;

      if (userId) {
        await updateUser(userId, { verified: false }, token);
      }

      const emailResponse = await requestVerification(email);

      if (emailResponse === null) {
        setEmailVerification("InProgress");
        alert("인증 메일을 발송하였습니다.");
      }
    } else {
      alert("존재하지 않는 회원입니다.");
    }
  };

  const emailVerificationCheckHandler = async () => {
    const nameResponse = await getUsersByFields("name", name);
    if (
      nameResponse &&
      "items" in nameResponse &&
      nameResponse.items.length !== 0
    ) {
      const user = nameResponse.items[0];
      if (user?.verified) {
        setEmailVerification("Verified");
        alert("인증이 완료된 이메일 입니다.");
      } else {
        const emailResponse = await requestVerification(email);

        if (emailResponse === null) {
          setEmailVerification("InProgress");
          alert("인증 메일을 발송하였습니다.");
        }
      }
    }
  };

  const getAdminToken = async () => {
    const response = await authenticateAdminWithPassword();
    return response && "token" in response ? response.token : "";
  };

  const nameChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };
  return (
    <form className="flex flex-col justify-center items-center">
      <h1 className="display4 mt-regular1">비밀번호찾기</h1>
      <Input
        label={<label className="display5R">이름</label>}
        name="name"
        type="text"
        register={register}
        placeholder="이름"
        onChange={nameChangeHandler}
        value={name}
        font="body1R"
        margin="mt-small1"
        options={{
          required: ERROR_MESSAGES.NAME_REQUIRED,
        }}
        errorMessage={errors.name?.message}
      />

      <div className="flex items-center justify-between mt-extraSmall1 w-[670px]">
        <Input
          label={<label className="display5R">이메일 인증</label>}
          name="email"
          type="text"
          onChange={emailChangeHandler}
          value={email}
          width="w-[500px]"
          font="body1R"
          register={register}
          readOnly={false}
          options={{
            required: ERROR_MESSAGES.EMAIL_REQUIRED,
            validate: (email) => validateEmail(email),
          }}
          placeholder="example@example.com"
          errorMessage={errors.email?.message}
        />
        <Button
          padding="px-[42px] py-[26px]"
          border="rounded-radius15"
          font="body1R"
          margin={errors.email ? "" : "mt-[40px]"}
          disabled={emailVerification === "Verified"}
          onClick={requestVerificationHandler}
          type="button"
        >
          {emailVerification === "Unverified" ? "인증요청" : "인증확인"}
        </Button>
      </div>

      <div>
        <Button
          onClick={() => setIsVerified(true)}
          size="full"
          color="blue-full"
          margin="mt-medium"
          disabled={emailVerification !== "Verified"}
          type="button"
        >
          다음
        </Button>
      </div>
    </form>
  );
};

export default FindPasswordForm;
