"use client";

import { Bookmark, Chat, Eyes, HeartFull } from "@repo/ui/index";
import Image from "next/image";

import { useState } from "react";

import RadioField from "../../../../packages/ui/src/radioField";
import { useAppSelector } from "../../hooks/redux";
import { LogCardProps } from "../../types/log";

const LogCard = ({ log, method }: { log: LogCardProps; method: any }) => {
  const {
    id,
    title,
    thumbnail,
    expand,
    content,
    hitCount,
    likeCount,
    commentCount,
    collectionId,
  } = log || {};

  // 북마크한거
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const handleFavoriteButton = () => {
    setIsFavorite((prev) => !prev);
  };

  const { setValue, getValues } = method;

  const handleClick = () => {
    setValue("log", id);
  };

  const selectState = useAppSelector((state) => state.selectLog);

  const baseUrl = "http://13.209.16.46:8090/api/files";
  return (
    <li
      key={id + title}
      className="relative w-[320px] h-[302px] rounded-[10px] overflow-hidden border border-solid border-neutral20 cursor-pointer"
    >
      <label className="h-full w-full" onClick={handleClick}>
        {/* isLogSelectSetting 대표로그 설정 클릭 여부 */}
        {selectState?.isSelectedLogPage ? (
          <div className="absolute top-[16px] right-[16px]">
            <RadioField method={method} id={id} />
          </div>
        ) : (
          <></>
        )}
        <div
          className="bg-gray-100 h-[194px] p-[16px]"
          style={{
            backgroundImage: `url(${baseUrl}/${collectionId}/${id}/${thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <div className="flex items-center gap-[5px]">
            {thumbnail ? (
              <Image
                src={`${baseUrl}/api/files/${collectionId}/${id}/${thumbnail}`}
                alt={"img"}
                width={42}
                height={42}
                className="rounded-full"
              />
            ) : (
              <div className="bg-neutral-200 w-[42px] h-[42px] rounded-full"></div>
            )}

            <div className="flex flex-col gap-[5px]">
              <strong className="text-[14px]">{expand?.user?.name}</strong>
              <span className="text-[10px]">{expand?.user?.myJob}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-between bg-white h-[108px] py-[15px] px-[20px]">
          <div className="flex justify-between">
            <h4 className="text-[18px] font-bold text-ellipsis overflow-hidden whitespace-nowrap">
              {title}
            </h4>
            <button onClick={handleFavoriteButton}>
              {isFavorite ? (
                <Bookmark fill="#7FACFF" />
              ) : (
                <Bookmark stroke="#7FACFF" />
              )}
            </button>
          </div>
          <p className="text-[14px] font-normal text-neutral50 text-ellipsis overflow-hidden whitespace-nowrap">
            {content.replace(/(<([^>]+)>)/gi, "")}
          </p>
          <div className="flex text-[10px] text-neutral50 gap-[5px]">
            <div className="flex gap-[2px] items-center">
              <Eyes width="12" height="12" fill="#808080" />
              <span>{hitCount}</span>
            </div>
            <div className="flex gap-[2px] items-center">
              <HeartFull width="12" height="12" fill="#EE5C5C" />
              <span>{likeCount}</span>
            </div>
            <div className="flex gap-[2px] items-center">
              <Chat width="12" height="12" fill="#808080" />
              <span>{commentCount}</span>
            </div>
          </div>
        </div>
      </label>
    </li>
  );
};

export default LogCard;
