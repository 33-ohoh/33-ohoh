"use client";

import ProfileBox from "./ProfileBox";
import InfoList from "./InfoList";
import { selectedToggle } from "../../store/selectLogSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Button } from "@repo/ui/button";
import { Pencil, Plus } from "@repo/ui/index";
import Link from "next/link";

const AsideContainer = () => {
  const dispatch = useAppDispatch();
  const selectState = useAppSelector((state) => state.selectLog);

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
          username={"제니퍼"}
          profileImage={"/default-user-profile.svg"}
          follow={20}
          follower={120}
        />

        <InfoList />

        <div className="flex flex-col gap-[10px] font-semibold">
          <Button padding="py-[12px]" color="blue-line" size="full-medium">
            <Link href="/log" className="flex">
              <Plus stroke="#337AFF" />새 로그 작성
            </Link>
          </Button>

          <Button
            padding="py-[12px]"
            color="blue-line"
            size="full-medium"
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
