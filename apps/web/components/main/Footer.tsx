import { SfaclogLogWhite } from "@repo/ui/index";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-[1440px] h-[270px] flex flex-col justify-center bg-neutral60 px-[120px] py-[54px] mt-[150px] text-white">
      <div className="w-full display5B border-solid border-b-[1px] border-whtie pb-[15px]">
        <span>인사이드아웃 사회적 협동조합</span>
      </div>
      <div className="flex justify-between items-center">
        <div className="mt-[15px]">
          <span className="body3M mb-[10px]">
            고객센터 : CS@sniperfactory.com
          </span>
          <p className="body4R">
            이사장 : 염민호 (와이엠에스닷코) 연락처 : 050-6683-1001
            <br />
            고유번호 : 324-82-00580 통신판매업 신고번호 : 2022 - 경기김포 : 3659
            <br />
            주소 : 서울특별시 강서구 마곡중앙2로 11, 3층 305호(마곡동, M밸리
            TOWER III)
          </p>
        </div>
        <div className="flex flex-col items-center mt-[51px] gap-y-[10px]">
          <div className="flex gap-x-[20px] ">
            <Image src="/kakao.png" alt="kakao" width={34} height={34} />
            <Image src="/naver.png" alt="kakao" width={34} height={34} />
            <Image src="/google.png" alt="kakao" width={34} height={34} />
            <SfaclogLogWhite width={116} height={34} />
          </div>
          <div className="w-full flex justify-around body4R">
            <span>개인정보 처리방침</span>
            <span>|</span>
            <span>서비스 이용약관</span>
            <span>|</span>
            <span>환불규정</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
