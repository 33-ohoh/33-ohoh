"use client";

import EditMypageLayout from "../../../../packages/ui/src/edit-mypage/EditMypageLayout";
import { ImageUpload } from "../../../../packages/ui/src/edit-mypage/ImageUpload";
import InputForm from "../../../../packages/ui/src/edit-mypage/InputForm";

const Page = () => {
  return (
    <EditMypageLayout>
      <h2>내 프로필 편집</h2>

      <form action="">
        {/* 프로필 편집란 */}
        <div>
          <ImageUpload />
        </div>

        {/* 인풋 리스트 있는 곳 */}
        <div>
          <InputForm inputType="username" placeholder="이름을 입력해주세요.">
            이름
          </InputForm>
          <div>
            <InputForm
              inputType="nickname"
              placeholder="닉네임을 입력해주세요."
            >
              닉네임
            </InputForm>
            <button>중복확인</button>
          </div>
          <div>
            <InputForm inputType="email" placeholder="이메일을 입력해주세요.">
              이메일
            </InputForm>
            <button>인증요청</button>
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

        <button>완료</button>
      </form>
    </EditMypageLayout>
  );
};

export default Page;
