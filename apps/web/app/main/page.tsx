import HotLogCardList from "../../components/main/HotLogCardList";
import LogSection from "../../components/main/LogSection";

const MainPage = () => {
  return (
    <div className="w-[1440px] flex flex-col items-center mx-auto">
      <HotLogCardList />
      <LogSection />
    </div>
  );
};

export default MainPage;
