import Card from "@repo/ui/card";
import CardTop from "@repo/ui/cardTop";
import React from "react";
import Image from "next/image";
import CardBottom from "@repo/ui/cardBottom";
import { Bookmark, Chat, Eyes, HeartFull } from "@repo/ui/index";

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
const LogCard = ({
  id,
  title,
  thumbnail,
  expand,
  content,
  hitCount,
  likeCount,
  commentCount,
  collectionId,
}) => {
  const formatNumber = (count: number) => {
    if (count >= 1000) {
      const formattedCount = (count / 1000).toFixed(1);
      return `${formattedCount}k`;
    }
    return count.toString();
  };
  return (
    <div>
      <Card className="w-[320px] h-[300px] rounded-radius15 border-solid border-[1px] border-[#cccccc]">
        <div
          className="h-[190px]"
          style={{
            backgroundImage: `url(http://13.209.16.46:8090/api/files/${collectionId}/${id}/${thumbnail})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "transform 0.3s",
          }}
        >
          <CardTop className="relative top-0 left-0 bg-inherit">
            <div className="flex gap-x-[5px] items-center">
              <div className="w-[30px] h-[30px]">
                <Image
                  src={`http://13.209.16.46:8090/api/files/${expand.user.collectionId}/${expand.user.id}/${expand.user.avatar}`}
                  alt="profileImage"
                  width={30}
                  height={30}
                  className="rounded-radius100"
                  objectFit="cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="subhead2 text-white">{expand.user.name}</span>
                <span className="body6R text-white">{expand.user.myJob}</span>
              </div>
            </div>
          </CardTop>
        </div>
        <CardBottom>
          <div className="flex justify-between items-center mb-[2px]">
            <span className="headline2 text-neutral80 truncate mr-[3px]">
              {title}
            </span>
            <Bookmark />
          </div>
          <p className="body5R text-neutral50 mb-[3px] line-clamp-2">
            {content.replace(/<[^>]*>|&[a-zA-Z0-9]+;/g, "")}
          </p>
          <div className="flex justify-start items-center body6R text-neutral50 gap-x-[5px] ml-[-6px] mb-[25px]">
            <div className="flex items-center">
              <Eyes />
              <span>{formatNumber(hitCount)}</span>
            </div>
            <div className="flex items-center gap-x-[2px]">
              <HeartFull />
              <span>{formatNumber(likeCount)}</span>
            </div>
            <div className="flex items-center gap-x-[2px]">
              <Chat />
              <span>{formatNumber(commentCount)}</span>
            </div>
          </div>
        </CardBottom>
      </Card>
    </div>
  );
};

export default LogCard;
