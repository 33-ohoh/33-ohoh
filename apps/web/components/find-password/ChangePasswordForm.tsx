"use client";
import { useRouter } from "next/navigation";
import { requestPasswordReset } from "../../apis/auth";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/loginSlice";

const ChangePasswordForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const requestPasswordResetHandler = async () => {
    const email = "recomplete@naver.com";
    const response = await requestPasswordReset(email);
    if (response === null) {
      dispatch(logout());
      alert("비밀번호가 변경되었습니다. 다시 로그인해주세요.");
      router.replace("/login");
    }
  };
  return (
    <div>
      <h1>비밀번호변경하기</h1>
      <label>새 비밀번호</label>
      <input className="border border-gray-400" type="text" />
      <label>새 비밀번호 확인</label>
      <input className="border border-gray-400" type="text" />
      <div>
        <button onClick={requestPasswordResetHandler}>완료</button>
      </div>
    </div>
  );
};

export default ChangePasswordForm;
