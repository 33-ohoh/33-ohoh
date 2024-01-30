import ProfileBox from "./ProfileBox";
import InfoList from "./InfoList";
import LogButton from "./LogButton";

const AsideContainer = () => {
  return (
    <aside className="w-[376px] py-[50px] px-[38px] rounded-radius15 border border-solid border-neutral20">
      <div>
        <ProfileBox
          username={"홍길동"}
          profileImage={"/"}
          follow={20}
          follower={120}
        />

        <InfoList />

        <div className="flex flex-col gap-[10px]">
          <LogButton icon="plus" text="새 로그 작성" />
          <LogButton icon="edit" text="대표로그 설정" />
        </div>
      </div>
    </aside>
  );
};

export default AsideContainer;
