import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAppSelector } from "../../hooks/redux";

import { Button } from "@repo/ui/button";

const SignUpSuccess = () => {
  const router = useRouter();
  const signupState = useAppSelector((state) => state.signup);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Image
        priority
        src="/signup-success.svg"
        alt="signup-success"
        width="300"
        height="300"
      />
      <span className="display4 mt-extraSmall1">
        {signupState.name}님, 스팩로그와 함께하세요~!
      </span>
      <span className="mt-extraSmall5">
        지금 바로 다양한 작업을 감상해보세요!
      </span>
      <span>스팩로그인 하세요~!</span>
      <Button
        margin="mt-small1"
        padding="px-[164px] py-[16px]"
        border="rounded-radius15"
        color="gray-full"
        font="headline1"
        onClick={() => {
          router.replace("/");
        }}
      >
        메인로그 바로가기
      </Button>
    </div>
  );
};

export default SignUpSuccess;
