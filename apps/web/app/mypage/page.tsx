"use client";

import { useState } from "react";
import AsideContainer from "../../components/mypage/AsideContainer";
import MainContainer from "../../components/mypage/MainContainer";

const Page = () => {
  // TODO:: 방문자 수 증가 구현
  const [visiting, setVisiting] = useState<number>(122);
  const [totalVisiting, setTotalVisiting] = useState<number>(12240);

  return (
    <div className="">
      <h2 className="text-[28px] font-bold mt-[172px] mb-[75px]">마이페이지</h2>
      <div className="flex mb-extraSmall3">
        <strong>
          Today <span>{visiting}</span>
        </strong>
        <div>⎪</div>
        <strong>
          Total <span>{totalVisiting}</span>
        </strong>
      </div>
      <div className="flex gap-[50px]">
        <AsideContainer />
        <MainContainer />
      </div>
    </div>
  );
};

export default Page;
