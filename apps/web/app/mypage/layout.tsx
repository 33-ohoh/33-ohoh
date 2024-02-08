import AsideContainer from "../../components/mypage/AsideContainer";
import PageHeader from "../../components/mypage/PageHeader";

const MypageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-[1120px] mx-auto">
      <PageHeader />
      <div className="flex gap-[50px]">
        <AsideContainer />
        <main className="w-[695px]">{children}</main>
      </div>
    </div>
  );
};

export default MypageLayout;
