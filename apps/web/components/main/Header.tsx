"use client";
import React, { useState } from "react";
import { Chat, Human, Search, SfacLogo, SfaclogLogo } from "@repo/ui/index";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathName = usePathname();
  const [selectedTab, setSelectedTab] = useState("");

  const tabs = [
    { name: "트렌드로그", link: "/" },
    { name: "최신로그", link: "/latest-log" },
    { name: "팔로잉로그", link: "/following-log" },
    { name: "질문로그", link: "/question-log" },
    { name: "채용", link: "/recruit" },
  ];
  const handleTabClick = (tabName: string) => {
    setSelectedTab(tabName);
  };
  return (
    <div className="w-[1440px] h-[94px] bg-primary10">
      <div className="flex h-[37px]">
        <span className="px-[18.5px] py-[11.62px] ml-[128px] bg-white">
          <SfaclogLogo width="62" height="18" />
        </span>
        <span className="px-[14px] py-[11.33px]">
          <SfacLogo />
        </span>
      </div>
      <div className="flex h-[57px] items-center justify-between bg-white text-neutral80 pl-[128px] pr-[135px]">
        <div className="flex gap-x-[40px]">
          {" "}
          <SfaclogLogo width="80" height="23.29" />
          {tabs.map((tab, index) => (
            <Link key={index} href={`${tab.link}`}>
              <div
                className={`cursor-pointer ${pathName === tab.link ? "headline2" : "body3R"}`}
                onClick={() => handleTabClick(tab.link)}
              >
                {tab.name}
              </div>
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-x-[32px]">
          <div className="relative">
            <input
              className="w-[230px] h-[40px] border-solid border-neutral10 border-[1px] pl-[24px] py-[10px] rounded-[100px] body4M neutral90 placeholder:body4M placehoder:neutral70"
              type="text"
              placeholder="검색어를 입력하세요"
            />
            <span className="absolute top-[8px] right-[13px] z-10">
              <Search />
            </span>
          </div>
          <div className="flex gap-x-[23px] items-center">
            <Chat width="27" height="27" />
            <Link key="mypage" href={"/mypage"}>
              <Human width="27" height="27" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
