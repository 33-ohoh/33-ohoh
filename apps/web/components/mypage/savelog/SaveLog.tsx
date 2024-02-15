"use client";
import Card from "@repo/ui/card";
import CardBottom from "@repo/ui/cardBottom";
import CardTop from "@repo/ui/cardTop";
import { Bookmark, BookmarkFull, Chat, Eyes, HeartFull } from "@repo/ui/index";
import { useRouter, useSearchParams } from "next/navigation";
import PocketBase from "pocketbase";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setSavePage } from "../../../store/saveLogSlice";
import SaveLogkModal from "../SaveLogkModal";
import { Suspense, useEffect, useState } from "react";

const SaveLog = ({ savelogItem }: { savelogItem: any }) => {
  const pb = new PocketBase("http://13.209.16.46:8090");
  const baseUrl = "http://13.209.16.46:8090/api/files";
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const saveLog = useAppSelector((state) => state.saveLog);
  const router = useRouter();
  const params = useSearchParams();
  let optionUrl = params.get("page");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const page = optionUrl ? Number(optionUrl) : 1;
      if (page !== saveLog.logPage) {
        dispatch(setSavePage({ logPage: page }));
      }
    }
  }, [optionUrl, saveLog.logPage]);

  // 저장로그 아이콘 클릭 시, 상태 변경해줌
  const handleToggleSaveLog = () => {
    setIsOpenModal(!isOpenModal);
  };

  const handleDelete = async () => {
    try {
      await pb.collection("savelogs").delete(savelogItem.id.toString());
      setIsOpenModal(false);
    } catch (error) {
      console.error("삭제 에러: ", error);
    }
  };

  return (
    <>
      <SaveLogkModal
        isOpenModal={isOpenModal}
        handleCancle={() => setIsOpenModal(false)}
        handleDelete={handleDelete}
      />
      <Suspense fallback={<div>로딩중</div>}>
        <Card
          className="relative w-[320px] h-[302px] rounded-[10px] overflow-hidden border border-solid border-neutral20 cursor-pointer"
          onClick={() => router.push(`/log/${savelogItem.expand.logs.id}`)}
        >
          <CardTop
            className="h-[194px] p-[16px]"
            style={{
              backgroundImage: `url(${baseUrl}/${savelogItem.expand?.logs?.collectionId}/${savelogItem?.expand?.logs?.id}/${savelogItem?.expand?.logs?.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          ></CardTop>
          <CardBottom className="flex flex-col justify-between bg-white h-[108px] py-[15px] px-[20px] shadow-inner">
            <div className="flex justify-between">
              <h4 className="text-[18px] font-bold text-ellipsis overflow-hidden whitespace-nowrap">
                {savelogItem.expand.logs.title}
              </h4>
              <button type="button" onClick={handleToggleSaveLog}>
                {savelogItem.isSaved ? (
                  <Bookmark stroke="#7FACFF" /> // 북마크 해제
                ) : (
                  <BookmarkFull fill="#7FACFF" /> // 북마크 액티브
                )}
              </button>
            </div>
            <p className="text-[14px] font-normal text-neutral50 text-ellipsis overflow-hidden whitespace-nowrap">
              {savelogItem?.expand?.logs?.content}
            </p>
            <div className="flex text-[10px] text-neutral50 gap-[5px]">
              <div className="flex gap-[2px] items-center">
                <Eyes width="12" height="12" fill="#808080" />
                <span>{savelogItem?.expand?.logs?.hitCount}</span>
              </div>
              <div className="flex gap-[2px] items-center">
                <HeartFull width="12" height="12" fill="#EE5C5C" />
                <span>{savelogItem?.expand?.logs?.likeCount}</span>
              </div>
              <div className="flex gap-[2px] items-center">
                <Chat width="12" height="12" fill="#808080" />
                <span>{savelogItem?.expand?.logs?.commentCount}</span>
              </div>
            </div>
          </CardBottom>
        </Card>
      </Suspense>
    </>
  );
};

export default SaveLog;
