import { useRouter } from "next/navigation";
import { useAppSelector } from "../../hooks/redux";

const SignUpSuccess = () => {
  const signupData = useAppSelector((state) => state.signup);

  const router = useRouter();
  const ClickHandler = () => {
    console.log(signupData);
    router.replace("/login");
  };
  return (
    <div>
      스팩로그와 함께하세요
      <button onClick={ClickHandler}>메인로그 바로가기</button>
    </div>
  );
};

export default SignUpSuccess;
