"use client";

import Card from "@repo/ui/card";
import CardBottom from "@repo/ui/cardBottom";
import CardTop from "@repo/ui/cardTop";
import { Bookmark, BookmarkFull, Chat, Eyes, HeartFull } from "@repo/ui/index";
import Image from "next/image";
import React, { useState } from "react";
import { useAppSelector } from "../../../hooks/redux";
import SaveLogkModal from "../SaveLogkModal";

const SaveLogCard = ({ items }: any) => {
  // 위에서 내려온 isSaveLog 북마크 상태는 true

  // isSaveLog 상태를 false로 바꾸면 모달 나오게 만들기
  const handleClickLog = () => {};

  const saveState = useAppSelector((state) => state.saveLog);

  // 로그의 북마크 true 상태인 아이콘 클릭 시, 삭제 여부 묻는 모달 띄우기
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);
  const handleDeleteCancle = () => {
    setIsOpenDeleteModal((prev) => !prev);
  };

  return (
    <div className="flex flex-wrap gap-[50px]">
      <SaveLogkModal
        isOpenDeleteModal={isOpenDeleteModal}
        handleDeleteCancle={handleDeleteCancle}
        // deleteBookmark={deleteBookmark}
      />
      {items?.map((log: any, index: number) => (
        <Card key={index} className="flex w-[320px] h-[300px] rounded-lg">
          <CardTop className="flex-grow">
            <div
              style={{
                backgroundImage: `url(https://eb1bir7wdc.execute-api.ap-northeast-2.amazonaws.com/api/files/${log.expand.logs.collectionId}/${log.expand.logs.id}/${log.expand.logs.thumbnail})`,
                backgroundSize: "cover",
                backgroundPosition: "center center",
              }}
              className=" bg-gray-100 h-[194px] p-[16px]"
            >
              <div className="flex items-center gap-[5px]">
                {log.expand.logs.thumbnail ? (
                  <Image
                    src={`https://eb1bir7wdc.execute-api.ap-northeast-2.amazonaws.com/api/files/${log.expand.logs.collectionId}/${log.expand.logs.id}/${log.expand.logs.thumbnail}`}
                    alt={"img"}
                    width={42}
                    height={42}
                    className="rounded-full"
                  />
                ) : (
                  <div className="bg-neutral-200 w-[42px] h-[42px] rounded-full"></div>
                )}

                <div className="flex flex-col gap-[5px]">
                  <strong className="text-[14px]">
                    {log.expand.logs.user.name}
                  </strong>
                  <span className="text-[10px]">
                    {log.expand.logs.user.myJob}
                  </span>
                </div>
              </div>
            </div>
          </CardTop>
          <CardBottom className="flex flex-col justify-between bg-white h-[108px] py-[15px] px-[20px]">
            <div className="flex justify-between">
              <h4 className="text-[18px] font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                {log.expand.logs.title}
              </h4>
              <button onClick={() => handleClickLog()} type="button">
                {saveState[index] ? (
                  <BookmarkFull fill="#7FACFF" />
                ) : (
                  <Bookmark stroke="#7FACFF" />
                )}
              </button>
            </div>

            <p className="text-[14px] font-normal text-neutral50 text-ellipsis overflow-hidden whitespace-nowrap">
              {log.expand.logs.content.replace(/(<([^>]+)>)/gi, "")}
            </p>
            <div className="flex text-[10px] text-neutral50 gap-[5px]">
              <div className="flex gap-[2px] items-center">
                <Eyes width="12" height="12" fill="#808080" />
                <span>{log.expand.logs.hitCount}</span>
              </div>
              <div className="flex gap-[2px] items-center">
                <HeartFull width="12" height="12" fill="#EE5C5C" />
                <span>{log.expand.logs.likeCount}</span>
              </div>
              <div className="flex gap-[2px] items-center">
                <Chat width="12" height="12" fill="#808080" />
                <span>{log.expand.logs.commentCount}</span>
              </div>
            </div>
          </CardBottom>
        </Card>
      ))}
    </div>
  );
};

export default SaveLogCard;
