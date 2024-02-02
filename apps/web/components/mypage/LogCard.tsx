import { Bookmark, Chat, Eyes, HeartFull } from "@repo/ui/index";
import Image from "next/image";

import { useState } from "react";

interface LogCardProps {
  id: string;
  title: string;
  thumbnail: string;
  expand: {
    user: {
      name: string;
      myJob: string;
    };
  };
  content: string;
  hitCount: number;
  likeCount: number;
  commentCount: number;
  collectionId: string;
}

const LogCard = ({ log }: { log: LogCardProps }) => {
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
  } = log;

  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const handleFavoriteButton = () => {
    setIsFavorite((prev) => !prev);
  };

  return (
    <li
      key={id + title}
      className="w-[320px] h-[302px] rounded-[10px] overflow-hidden border border-solid border-neutral20 cursor-pointer"
    >
      <div
        className="bg-gray-100 h-[194px] p-[16px]"
        style={{
          backgroundImage: `url(http://13.209.16.46:8090/api/files/${collectionId}/${id}/${thumbnail})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="flex items-center gap-[5px]">
          {thumbnail ? (
            <Image
              src={`http://13.209.16.46:8090/api/files/${collectionId}/${id}/${thumbnail}`}
              alt={"img"}
              width={42}
              height={42}
              className="rounded-full"
            />
          ) : (
            <div className="bg-neutral-200 w-[42px] h-[42px] rounded-full"></div>
          )}

          <div className="flex flex-col gap-[5px]">
            <strong className="text-[14px]">{expand.user.name}</strong>
            <span className="text-[10px]">{expand.user.myJob}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between bg-white h-[108px] py-[15px] px-[20px]">
        <div className="flex justify-between">
          <h4 className="text-[18px] font-bold mb-extraSmall5 text-ellipsis overflow-hidden whitespace-nowrap">
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
        <p className="text-[14px] font-normal text-neutral50 text-ellipsis overflow-hidden whitespace-nowrap mb-extraSmall4">
          {content}
        </p>
        <div className="flex text-[10px] text-neutral50 gap-[5px] pb-[10px]">
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
    </li>
  );
};

export default LogCard;
