"use client";
import { Dispatch, SetStateAction, useState } from "react";
import { getUsersByFields, requestVerification } from "../../apis/auth";

interface FindPasswordFormProps {
  setIsVerified: Dispatch<SetStateAction<boolean>>;
}
const FindPasswordForm = ({ setIsVerified }: FindPasswordFormProps) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailVerification, setEmailVerification] = useState("Unverified");

  const requestVerificationHandler = async () => {
    const nameResponse = await getUsersByFields("name", name);

    if (
      nameResponse &&
      "items" in nameResponse &&
      nameResponse.items.length !== 0
    ) {
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

  const nameChangeHandler = (e: any) => {
    setName(e.target.value);
  };

  const emailChangeHandler = (e: any) => {
    setEmail(e.target.value);
  };
  return (
    <div>
      <h1>비밀번호찾기</h1>
      <label>이름</label>
      <input
        onChange={nameChangeHandler}
        className="border border-gray-400"
        type="text"
      />

      <label>이메일 인증</label>
      <input
        onChange={emailChangeHandler}
        className="border border-gray-400"
        type="text"
      />

      <button
        disabled={emailVerification === "Verified"}
        onClick={requestVerificationHandler}
      >
        {emailVerification === "Unverified" ? "인증요청" : "인증확인"}
      </button>

      <button
        disabled={emailVerification === "Verified"}
        onClick={emailVerificationCheckHandler}
      >
        {"인증확인"}
      </button>

      <div>
        <button onClick={() => setIsVerified(true)}>다음</button>
      </div>
    </div>
  );
};

export default FindPasswordForm;
