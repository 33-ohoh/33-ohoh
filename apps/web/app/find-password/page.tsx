"use client";
import { useState } from "react";
import ChangePasswordForm from "../../components/find-password/ChangePasswordForm";
import FindPasswordForm from "../../components/find-password/FindPasswordForm";

const Page = () => {
  const [isVerified, setIsVerified] = useState(false);
  return isVerified ? (
    <ChangePasswordForm />
  ) : (
    <FindPasswordForm setIsVerified={setIsVerified} />
  );
};

export default Page;
