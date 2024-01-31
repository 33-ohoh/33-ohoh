"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { authenticateWithPassword } from "../../apis/auth";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { setLoginData } from "../../store/loginSlice";
import type { LoginFormData, LoginResponse } from "../../types/auth";
import withAuth from "../../utils/withAuth";

const Login = () => {
  const dispatch = useAppDispatch();
  const loginState = useAppSelector((state) => state.login);
  const router = useRouter();

  const loginHandler = async () => {
    const loginData: LoginFormData = {
      identity: loginState.email,
      password: loginState.password,
    };
    try {
      const response = await authenticateWithPassword(loginData);

      if (response && "token" in response) {
        const token = (response as LoginResponse).token;
        const expiresIn = 3600;
        const expirationTime = new Date().getTime() + expiresIn * 1000;
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("tokenExpiration", expirationTime.toString());
      }

      if (loginState.rememberUser) {
        localStorage.setItem("savedEmail", loginState.email);
      } else {
        localStorage.removeItem("savedEmail");
      }

      router.replace("/");
    } catch (error: any) {
      alert("로그인 실패");
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
    <div>
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          loginHandler();
        }}
      >
        <input
          className="border border-gray-400"
          type="email"
          value={loginState.email}
          onChange={(e) => dispatch(setLoginData({ email: e.target.value }))}
        />

        <label>Password:</label>
        <input
          className="border border-gray-400"
          type="password"
          value={loginState.password}
          onChange={(e) => dispatch(setLoginData({ password: e.target.value }))}
        />

        <label>로그인 정보 저장</label>
        <input
          checked={loginState.rememberUser}
          onChange={() =>
            dispatch(setLoginData({ rememberUser: !loginState.rememberUser }))
          }
          type="checkbox"
        />
        <button type="submit">Login</button>
      </form>

      <div
        style={{
          width: "664px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Link href={"signup"}>회원가입하기</Link>

        <div>
          <Link href={"find-password"}>비밀번호 찾기</Link>
        </div>
      </div>
    </div>
  );
};

export default withAuth(Login);
