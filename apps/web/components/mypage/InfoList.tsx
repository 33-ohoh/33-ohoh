import { NavRight } from "@repo/ui/index";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { deleteUser } from "../../apis/auth";
import { useAppDispatch } from "../../hooks/redux";
import { logout } from "../../store/loginSlice";
import InfoItem from "./InfoItem";

const InfoList = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [isOpen, setIsOpen] = useState(false);
  const [isWithdrawn, setIsWithdrawn] = useState(false);

  const logoutHandler = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("tokenExpiration");
    dispatch(logout());
    router.replace("/");
  };

  const withdrawalHandler = async () => {
    if (isWithdrawn) {
      logoutHandler();
      return;
    }

    const token = sessionStorage.getItem("token");

    if (token) {
      const base64Payload = token.split(".")[1];
      if (base64Payload) {
        const payload = Buffer.from(base64Payload, "base64").toString("utf-8");
        const { id: userId } = JSON.parse(payload.toString());
        await deleteUser(userId, token);
        setIsWithdrawn(true);
      }
    }
  };

  return (
    <div>
      {isOpen && (
        <div className="flex justify-center items-center bg-[#0000005A] top-0 left-0 fixed w-full h-full z-[999]">
          <div className="w-[444px] h-[222px] rounded-radius15">
            <div className="flex flex-col justify-center items-center bg-white h-[162px] rounded-t-radius15">
              <span className="headline2">
                {isWithdrawn ? "회원탈퇴" : "정말 탈퇴하시겠습니까?"}
              </span>
              <span>
                {isWithdrawn
                  ? "회원 탈퇴가 완료되었습니다."
                  : "회원님의 정보가 삭제됩니다."}
              </span>
            </div>
            {!isWithdrawn && (
              <button
                onClick={() => setIsOpen(false)}
                className="w-1/2 h-[60px] bg-primary10 rounded-bl-radius15"
              >
                취소
              </button>
            )}

            <button
              onClick={withdrawalHandler}
              className={`${isWithdrawn ? "w-full rounded-b-radius15" : "w-1/2 rounded-br-radius15"} h-[60px] bg-primary90 text-white`}
            >
              확인
            </button>
          </div>
        </div>
      )}

      <InfoItem title="소개">
        <p className="mb-extraSmall1">
          개발은 저에게 항상 즐겁고 재밌는 것입니다. 사용자에게 도움이 되는
          서비스를 만들고 싶습니다.
        </p>
        <p className="mb-extraSmall1">
          [경력]
          <br />
          Frontend Engineer (2017.03.01 ~ 현재)
        </p>

        <h4 className="font-bold mb-extraSmall4">SNS 연동</h4>
        <div className="flex gap-[10px]">
          {/* <SnsKakao width={42} height={42} /> */}
          {/* <SnsNaver width={42} height={42} /> */}
          {/* <SnsGoogle width={42} height={42} /> */}
        </div>
      </InfoItem>

      <InfoItem title="활동 로그">
        <div className="flex text-center gap-[50px] justify-center">
          <div>
            <strong>1.4K</strong>
            <p className="text-[12px] text-neutral50">작업로그</p>
          </div>
          <div>
            <strong>55</strong>
            <p className="text-[12px] text-neutral50">답변 수</p>
          </div>
          <div>
            <strong>94</strong>
            <p className="text-[12px] text-neutral50">저장된 로그</p>
          </div>
        </div>
      </InfoItem>

      <InfoItem title="나의 활동">
        <div className="flex justify-between">
          <Link href="/mypage/">내가 쓴 로그</Link>
          <NavRight width={22} height={22} />
        </div>
        <div className="flex justify-between">
          <Link href="/mypage/savelog">내 저장 로그</Link>
          <NavRight width={22} height={22} />
        </div>
        <div className="flex justify-between">
          <Link href="/mypage/recentlog">최근 본 로그</Link>
          <NavRight width={22} height={22} />
        </div>
        <div className="flex justify-between">
          <Link href="/mypage/mycomments">내가 쓴 댓글</Link>
          <NavRight width={22} height={22} />
        </div>
      </InfoItem>

      <InfoItem title="">
        <h4 className="flex justify-between font-bold">
          <Link href="">이용약관&개인정보처리방침</Link>
          <NavRight width={22} height={22} />
        </h4>
        <h4 className="flex justify-between font-bold">
          <button onClick={logoutHandler}>로그아웃</button>
          <NavRight width={22} height={22} />
        </h4>
        <h4 className="flex justify-between font-bold">
          <button onClick={() => setIsOpen(true)}>회원탈퇴</button>
          <NavRight width={22} height={22} />
        </h4>
      </InfoItem>
    </div>
  );
};

export default InfoList;
