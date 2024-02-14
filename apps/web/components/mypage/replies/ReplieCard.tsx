"use client";
import { Bin } from "@repo/ui/index";
import { useRouter } from "next/navigation";
import PocketBase from "pocketbase";
import { useState } from "react";
import { useAppSelector } from "../../../hooks/redux";

interface Reply {
  id: number;
  content: string;
  expand: any;
  log: string;
}

interface ReplieCardProps {
  repliesData: Reply[];
}
const ReplieCard = ({ repliesData: initialRepliesData }: ReplieCardProps) => {
  const [repliesData, setRepliesData] = useState(initialRepliesData);
  const pb = new PocketBase("http://13.209.16.46:8090");
  const router = useRouter();
  const isDeleteState = useAppSelector(
    (state) => state.deleteReply.isDeleteReply,
  );

  // 수정된 handleDelete 함수
  const handleDelete = async (id: number, e: React.MouseEvent) => {
    e.stopPropagation();

    try {
      await pb.collection("replies").delete(id.toString());
      // UI를 업데이트하기 위해 삭제된 댓글을 상태에서 제거합니다.
      const updatedReplies = repliesData.filter((reply) => reply.id !== id);
      setRepliesData(updatedReplies);
    } catch (error) {
      console.error("댓글 삭제 중 오류 발생:", error);
    }
  };

  if (initialRepliesData.length === 0) return null;

  return (
    <>
      {repliesData?.map((data) => (
        <div className="relative w-full cursor-pointer" key={data.id}>
          {isDeleteState && (
            <button
              type="button"
              className="w-[24px] h-[24px] bg-red-300 absolute right-[40px] top-[40px] z-50"
              onClick={(e) => handleDelete(data.id, e)}
            >
              <Bin />
            </button>
          )}
          <div
            className="border border-primary90 flex flex-col w-full p-[25px] rounded-radius15"
            onClick={() => router.push(`/log/${data.log}`)}
          >
            <div className="border-b border-neutral20 pb-[15px] mb-extraSmall3">
              <div className="flex gap-[10px] justify-between items-start relative">
                <div className="flex flex-col">
                  <strong className="text-[24px]">
                    {data.expand?.user?.name}
                  </strong>
                  <span className="text-[14px]">
                    {data.expand?.user?.myJob}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="mb-extraSmall5 text-[24px] font-bold">
                {data.expand?.log?.title}
              </h3>
              <p className="text-overflow text-neutral80">{data.content}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReplieCard;
