"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";

const withGuest = (Component: any) => {
  return (props: any) => {
    useEffect(() => {
      const storedToken =
        typeof window !== "undefined" ? sessionStorage.getItem("token") : null;
      if (!storedToken) {
        return redirect("/login");
      }
    }, []);

    return <Component {...props} />;
  };
};

export default withGuest;
