"use client";

import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const pb = new PocketBase(
  "https://eb1bir7wdc.execute-api.ap-northeast-2.amazonaws.com",
);

type LogParams = {
  id: string;
};

interface LogResponse {
  collectionId: string;
  collectionName: string;
  commentCount: number;
  content: string;
  created: string;
  hitCount: number;
  id: string;
  isPublic: boolean;
  isQuestion: boolean;
  isTemporary: boolean;
  likeCount: number;
  series: string;
  tags: string[];
  thumbnail: string;
  title: string;
  updated: string;
  user: string;
}

const LogSuccess = ({ params }: { params: LogParams }) => {
  const [log, setLog] = useState<LogResponse | null>(null);

  const logId = params.id;

  const router = useRouter();

  useEffect(() => {
    const fetchLog = async () => {
      if (!logId) return;

      try {
        const record: LogResponse = await pb.collection("logs").getOne(logId, {
          expand: "relField1,relField2.subRelField",
        });
        setLog(record);
        console.log(record);
      } catch (error) {
        console.error(error);
      }
    };

    fetchLog();
  }, [logId]);

  const handleConfirmClick = () => {
    if (log?.id) {
      router.push(`/log/${log.id}`);
    }
  };

  const defaultThumbnail = "/recommendedThumbnail.png";

  const logThumbnail = `https://eb1bir7wdc.execute-api.ap-northeast-2.amazonaws.com/api/files/${log?.collectionId}/${log?.id}/${log?.thumbnail}`;

  return (
    <div className="w-[470px] mx-auto flex flex-col items-center mt-mediun mb-extraLarge">
      {log?.thumbnail ? (
        <Image
          src={logThumbnail}
          alt="Log Thumbnail"
          width={300}
          height={300}
        />
      ) : (
        <Image
          src={defaultThumbnail}
          alt="Default Thumbnail"
          width={300}
          height={300}
        />
      )}
      <h2 className="display4 mt-extraSmall1">
        {log?.isQuestion ? "[질문]" : "[로그]"}
        {log?.title}
      </h2>
      <div className="flex flex-col items-center mt-extraSmall5">
        <span className="body3R">로그를 업로드하였습니다.</span>
        <span className="body3R">지금 바로 다양한 작업을 감상해보세요!</span>
      </div>
      <button
        onClick={handleConfirmClick}
        className="bg-primary90 w-full h-[60px] rounded-radius15 text-white headline1 mt-small1"
      >
        확인
      </button>
    </div>
  );
};

export default LogSuccess;
