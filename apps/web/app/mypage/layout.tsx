import { Suspense } from "react";
import AsideContainer from "../../components/mypage/AsideContainer";
import PageHeader from "../../components/mypage/PageHeader";

const MypageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[1120px] mx-auto">
      <Suspense fallback={<div>로딩중...</div>}>
        <PageHeader />
        <div className="flex gap-[50px]">
          <AsideContainer />
          <main className="w-[695px]">{children}</main>
        </div>
      </Suspense>
    </div>
  );
};

export default MypageLayout;
