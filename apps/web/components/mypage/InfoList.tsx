import { NavRight } from "@repo/ui/index";
import InfoItem from "./InfoItem";
import Link from "next/link";

const InfoList = () => {
  return (
    <div>
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
          <Link href="/mypage/replies">내가 쓴 댓글</Link>
          <NavRight width={22} height={22} />
        </div>
      </InfoItem>

      <InfoItem title="">
        <h4 className="flex justify-between font-bold">
          <Link href="">이용약관&개인정보처리방침</Link>
          <NavRight width={22} height={22} />
        </h4>
        <h4 className="flex justify-between font-bold">
          <Link href="">로그아웃</Link>
          <NavRight width={22} height={22} />
        </h4>
        <h4 className="flex justify-between font-bold">
          <Link href="">회원탈퇴</Link>
          <NavRight width={22} height={22} />
        </h4>
      </InfoItem>
    </div>
  );
};

export default InfoList;
