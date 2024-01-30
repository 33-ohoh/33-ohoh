import { Crown, UpArrowRed } from "@repo/ui/icon";
import React from "react";
import { HotLogCardProps } from "../../types/hotLogCard";

const HotLogCard: React.FC<HotLogCardProps> = ({
  currentRank,
  previousRank,
  profileImg,
  name,
  job,
  title,
  preview,
  thumbnail,
}) => {
  return (
    <div className="flex min-w-[30.9rem] flex-col gap-y-[10px] ml-[2px] mb-[2px] z-10">
      <div className="flex items-end justify-between w-full px-[0.63rem]">
        <div className="flex gap-x-[15px] items-end">
          <span className="display4 text-neutral80">{currentRank}위</span>
          {currentRank === 1 && (
            <div>
              <span className="mb-[6px]">
                <Crown />
              </span>
            </div>
          )}
        </div>
        <div className="flex gap-x-[0.31rem] items-center">
          <span className="body4M text-neutral80">
            {previousRank - currentRank} up
          </span>
          <UpArrowRed />
        </div>
      </div>
      <div className="flex w-full items-center rounded-radius15 shadow-light20 gap-x-[3.8rem] py-[1.17rem] px-[2.12rem] bg-white ">
        <div className="flex flex-col gap-y-[1.25rem]">
          <div className="flex gap-x-[0.62rem] items-center">
            <img
              className="w-[2rem] h-[2rem] rounded-radius100"
              src={profileImg}
              alt="profile"
            />
            <div className="flex flex-col">
              <span className="body3M text-neutral80">{name}</span>
              <span className="body6R text-neutral50">{job}</span>
            </div>
          </div>
          <div className="w-[13.75rem] flex flex-col gap-y-[0.31rem]">
            <span className="display5B text-neutral80">{title}</span>
            <p className="body4R text-neutral50">{preview}</p>
          </div>
        </div>
        <img
          className="w-[9.13rem] h-[7.44rem] "
          src={thumbnail}
          alt="thubnail"
        />
      </div>
    </div>
  );
};

export default HotLogCard;
