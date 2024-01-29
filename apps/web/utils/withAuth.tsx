"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useAppDispatch } from "../hooks/redux";
import { setLoginData } from "../store/loginSlice";

const withAuth = (Component: any) => {
  return (props: any) => {
    const dispatch = useAppDispatch();

    useEffect(() => {
      const storedToken =
        typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
      const expirationTime =
        typeof window !== "undefined"
          ? sessionStorage.getItem("tokenExpiration")
          : null;
      if (storedToken && expirationTime) {
        const currentTime = new Date().getTime();
        const expirationTimeInMillis = parseInt(expirationTime, 10);

        if (currentTime > expirationTimeInMillis) {
          sessionStorage.removeItem("token");
          sessionStorage.removeItem("tokenExpiration");
        } else {
          dispatch(setLoginData({ isLoggedIn: true }));
          return redirect("/");
        }
      }
    }, []);

    return <Component {...props} />;
  };
};

export default withAuth;
