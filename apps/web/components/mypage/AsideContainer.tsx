"use client";

import ProfileBox from "./ProfileBox";
import InfoList from "./InfoList";
import { selectedToggle } from "../../store/selectLogSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Button } from "@repo/ui/button";
import { Pencil, Plus } from "@repo/ui/index";

const AsideContainer = () => {
  const dispatch = useAppDispatch();
  const selectState = useAppSelector((state) => state.selectLog);
  // console.log("selectState: ", selectState); // {isSelectedLogPage: false, logPage: 1}

  const handleToggle = async () => {
    dispatch(
      selectedToggle({
        isSelectedLogPage: !selectState.isSelectedLogPage,
      }),
    );
  };

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

        <div className="flex flex-col gap-[10px] text-primary80 font-semibold">
          <Button className="w-full py-[12px] border-primary80 bg-primary5">
            <Plus stroke="#337AFF" />새 로그 작성
          </Button>

          <Button
            className="w-full py-[12px] border-primary80 bg-primary5"
            onClick={handleToggle}
          >
            <Pencil fill="#337AFF" />
            대표로그 설정
          </Button>
        </div>
      </div>
    </aside>
  );
};

export default AsideContainer;
