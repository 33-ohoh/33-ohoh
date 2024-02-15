"use client";

import { Input } from "@repo/ui/input";
import { ImageUpload } from "../../components/edit-mypage/ImageUpload";
import { SubmitHandler, useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { ERROR_MESSAGES } from "../../constants/errorMessages";
import {
  authenticateAdminWithPassword,
  authenticateWithPassword,
  createUser,
  getUsersByFields,
  requestVerification,
  updateUser,
  usernameDoubleCheck,
} from "../../apis/auth";
import { ListResponse } from "../../types/response";
import { Check } from "@repo/ui/checkbox";
import { useState } from "react";
import { Button } from "@repo/ui/button";
import Link from "next/link";
import { PATTERNS } from "../../constants/patterns";
import { setSignupData } from "../../store/signupSlice";
import { User } from "../../types/user";
import FilterTagList from "../../components/main/FilterTagList";

interface InputDatas {
  [index: string]: string;
}

interface CheckboxState {
  proposal: boolean;
  opinion: boolean;
  project: boolean;
}

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<InputDatas>({ mode: "onBlur" });

  const dispatch = useAppDispatch();
  const signupState = useAppSelector((state) => state.signup);

  const validateEmail = (email: string): string | undefined => {
    if (!PATTERNS.EMAIL.test(email)) {
      return ERROR_MESSAGES.INVALID_EMAIL_FORMAT;
    }
  };

  // 닉네임 중복확인
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

  // 이메일 인증
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
    emailVisibility,
  }: User) => {
    const adminToken = await getAdminToken();

    await createUser(
      {
        email,
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

  //
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
          collectionAndUse: signupState.collectionAndUse,
          identification: signupState.identification,
          token: response.token,
        }),
      );
    }
  };

  // 관심분야 태그 리스트
  const [filteredTags, setFilteredTags] = useState<string[]>([]);

  const handleTagClick = (clickedTagText: string) => {
    if (clickedTagText === "개발 전체") {
      setFilteredTags([]);
    } else {
      const isTagFiltered = filteredTags.includes(clickedTagText);
      if (isTagFiltered) {
        setFilteredTags(filteredTags.filter((tag) => tag !== clickedTagText));
      } else {
        setFilteredTags([...filteredTags, clickedTagText]);
      }
    }
  };

  // 제안 허용 체크박스
  const [isChecked, setIsChecked] = useState<CheckboxState>({
    proposal: false,
    opinion: false,
    project: false,
  });

  const handleCheck = (e: any) => {
    const { id, checked } = e.target;

    setIsChecked((prev) => ({
      ...prev,
      [id]: checked,
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="mt-[80px] mb-[70px] font-semibold text-[28px]">
        내 프로필 편집
      </h2>

      <form onSubmit={handleSubmit(handleSignupSubmit)}>
        {/* 프로필 편집란 */}
        <ImageUpload />
        {/* 인풋 리스트 */}
        <div className="flex flex-col mx-auto w-[670px] mb-[50px]">
          <Input
            label="이름"
            name="name"
            type="text"
            register={register}
            placeholder="이름을 입력해주세요."
            width="w-[670px]"
            font="body1R"
            options={{
              required: ERROR_MESSAGES.NAME_REQUIRED,
            }}
            errorMessage={errors.name?.message}
            padding="py-[20px] pl-[20px]"
          />

          <div className="flex items-center justify-between mt-extraSmall1">
            <Input
              label="닉네임"
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
              margin={errors.username ? "" : "mt-[34px]"}
              disabled={signupState.usernameVerification === "Verified"}
              onClick={handleDoubleCheck}
              type="button"
            >
              {signupState.usernameVerification === "Unverified"
                ? "중복확인"
                : "사용가능"}
            </Button>
          </div>

          <div className="flex items-center justify-between mt-extraSmall1 my-[30px]">
            <Input
              label="이메일"
              name="email"
              type="email"
              register={register}
              placeholder="이메일을 입력해주세요."
              readOnly={signupState.usernameVerification === "Verified"}
              width="w-[500px]"
              font="body1R"
              options={{
                required: ERROR_MESSAGES.EMAIL_REQUIRED,
                validate: (email) => validateEmail(email),
              }}
              errorMessage={errors.email?.message}
              padding="py-[20px] pl-[20px]"
            />
            <Button
              padding="px-[42px] py-[20px]"
              border="rounded-radius15"
              font="body1R"
              margin={errors.username ? "" : "mt-[34px]"}
              disabled={signupState.usernameVerification === "Verified"}
              onClick={handleEmailAuthentication}
              type="button"
            >
              {signupState.usernameVerification === "Unverified"
                ? "인증요청"
                : "인증확인"}
            </Button>
          </div>

          <label htmlFor="jobSelect">직무</label>
          <select
            name="jobSelect"
            id="jobSelect"
            className="border border-neutral40 py-[25px] px-[20px] rounded-radius15"
          >
            <option value="내 직무를 선택해주세요.">
              내 직무를 선택해주세요.
            </option>
            <option value="백엔드 개발자">백엔드 개발자</option>
            <option value="서버/백엔드 개발자">서버/백엔드 개발자</option>
            <option value="웹 풀스택 개발자">웹 풀스택 개발자</option>
            <option value="안드로이드 개발자">안드로이드 개발자</option>
            <option value="크로스플랫폼 개발자">크로스플랫폼 개발자</option>
            <option value="게임 클라이언트 개발자">
              게임 클라이언트 개발자
            </option>
            <option value="프론트엔드 개발자">프론트엔드 개발자</option>
            <option value="개발 PM">개발 PM</option>
            <option value="게임 서버 개발자">게임 서버 개발자</option>
            <option value="블록체인">블록체인</option>
            <option value="QA 엔지니어">QA 엔지니어</option>
            <option value="웹 퍼블리셔">웹 퍼블리셔</option>
          </select>

          <Input
            label="소개"
            name="introduce"
            type="text"
            register={register}
            placeholder="소개를 입력해주세요."
            width="w-fyll"
            font="body1R"
            padding="py-[20px] pl-[20px]"
            margin="my-[30px]"
          />

          <Input
            label="타이틀"
            name="title-email"
            type="text"
            register={register}
            placeholder="id"
            width="w-fyll"
            font="body1R"
            padding="py-[20px] pl-[20px]"
            margin="my-[30px]"
          />
        </div>

        {/* 관심분야 칩 */}
        <div className="mb-[50px]">
          <div className="flex items-end gap-[10px] mb-[25px]">
            <h3 className=" text-[20px]">관심 분야</h3>
            <span className="text-neutral50">최소 2개 이상</span>
          </div>
          <div className="w-[670px]">
            <FilterTagList
              filteredTags={filteredTags}
              onTagClick={handleTagClick}
            />
          </div>
        </div>

        {/* 제안 허용 체크박스 */}
        <div className="mb-[65px]">
          <h3 className="mb-[25px] text-[20px]">제안 허용</h3>
          <div className="flex gap-[60px]">
            <label htmlFor="proposal" onClick={handleCheck} className="flex">
              {<Check checked={isChecked.proposal} />}
              <input
                type="checkbox"
                name="proposal"
                id="proposal"
                className="opacity-0 cursor-pointer"
                checked={isChecked.proposal}
              />
              체용 제안
            </label>

            <label htmlFor="opinion" onClick={handleCheck} className="flex">
              {<Check checked={isChecked.opinion} />}
              <input
                type="checkbox"
                name="opinion"
                id="opinion"
                className="opacity-0 cursor-pointer"
                checked={isChecked.opinion}
              />
              의견 제안
            </label>

            <label htmlFor="project" onClick={handleCheck} className="flex">
              {<Check checked={isChecked.project} />}
              <input
                type="checkbox"
                name="project"
                id="project"
                className="opacity-0 cursor-pointer"
                checked={isChecked.project}
              />
              프로젝트 제안
            </label>
          </div>
        </div>
        <Link href={"/"}>
          <Button size="full" padding="py-[15px]" color="blue-full">
            완료
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Page;
