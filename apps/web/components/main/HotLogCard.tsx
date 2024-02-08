import { Crown, UpArrowRed } from "@repo/ui/index";
import React from "react";
import { HotLogCardProps } from "../../types/hotLogCard";
import Image from "next/image";

const HotLogCard: React.FC<HotLogCardProps> = ({
  currentRank,
  previousRank,
  title,
  content,
  thumbnail,
  expand,
  id,
  collectionId,
}) => {
  return (
    <div className="flex min-w-[30.9rem] h-[250px] flex-col gap-y-[10px] ml-[2px] mb-[2px] z-10">
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
            <Image
              src={`http://13.209.16.46:8090/api/files/${expand.user.collectionId}/${expand.user.id}/${expand.user.avatar}`}
              alt={"profileImage"}
              width={31}
              height={31}
              className="rounded-radius100"
              objectFit="cover"
            />
            <div className="flex flex-col">
              <span className="body3M text-neutral80">{expand.user.name}</span>
              <span className="body6R text-neutral50">{expand.user.myJob}</span>
            </div>
          </div>
          <div className="w-[13.75rem] flex flex-col gap-y-[0.31rem]">
            <span className="display5B text-neutral80 truncate">{title}</span>
            <p className="body4R text-neutral50  line-clamp-2 h-[40px]">
              {content.replace(/<[^>]*>|&[a-zA-Z0-9]+;/g, "")}
            </p>
          </div>
        </div>
        <div className="w-[146px] h-[119px] overflow-hidden">
          <div
            className="w-[146px] h-[119px]"
            style={{
              backgroundImage: `url(http://13.209.16.46:8090/api/files/${collectionId}/${id}/${thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HotLogCard;
