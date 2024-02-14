"use client";

import { ImageUpload } from "../../components/edit-mypage/ImageUpload";
import InputForm from "../../components/edit-mypage/InputForm";

const Page = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="mt-[80px] mb-[70px] font-semibold text-[28px]">
        내 프로필 편집
      </h2>

      <form action="">
        {/* 프로필 편집란 */}
        <ImageUpload />

        {/* 인풋 리스트 */}
        <div>
          <InputForm inputType="username" placeholder="이름을 입력해주세요.">
            이름
          </InputForm>
          <div className="flex items-center justify-between gap-[15px]">
            <InputForm
              inputType="nickname"
              placeholder="닉네임을 입력해주세요."
              className="w-full"
            >
              닉네임
            </InputForm>
            <button className="border border-neutral80 w-[154px] h-[60px] rounded-radius15 mt-[4px]">
              중복확인
            </button>
          </div>
          <div className="flex items-center justify-between gap-[15px]">
            <InputForm inputType="email" placeholder="이메일을 입력해주세요.">
              이메일
            </InputForm>
            <button className="border border-neutral80 w-[154px] h-[60px] rounded-radius15 mt-[4px]">
              인증요청
            </button>
          </div>
          <InputForm inputType="info" placeholder="소개를 입력해주세요.">
            소개
          </InputForm>
          <InputForm inputType="title" placeholder="타이틀을 입력해주세요.">
            타이틀
          </InputForm>
        </div>

        {/* 관심분야 칩 모음 */}

        {/* 제안 허용 체크박스 */}

        <div>
          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            체용제안
          </label>

          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            체용제안
          </label>

          <label htmlFor="">
            <input type="checkbox" name="" id="" />
            체용제안
          </label>
        </div>

        <button>완료</button>
      </form>
    </div>
  );
};

export default Page;
