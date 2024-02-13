"use client";
import { useState } from "react";
import ChangePasswordForm from "../../components/find-password/ChangePasswordForm";
import FindPasswordForm from "../../components/find-password/FindPasswordForm";

const Page = () => {
  const [email, setEmail] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  return isVerified ? (
    <ChangePasswordForm email={email} />
  ) : (
    <FindPasswordForm
      setIsVerified={setIsVerified}
      email={email}
      setEmail={setEmail}
    />
  );
};

export default Page;
