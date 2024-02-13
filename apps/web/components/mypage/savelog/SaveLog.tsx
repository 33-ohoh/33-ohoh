import Card from "@repo/ui/card";
import CardBottom from "@repo/ui/cardBottom";
import CardTop from "@repo/ui/cardTop";
import { Bookmark, BookmarkFull, Chat, Eyes, HeartFull } from "@repo/ui/index";
import { useRouter, useSearchParams } from "next/navigation";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setSavePage } from "../../../store/saveLogSlice";
import SaveLogkModal from "../SaveLogkModal";

const SaveLog = ({
  savelogItem,
  method,
  saveLogState,
}: {
  savelogItem: any;
  method: any;
  saveLogState: boolean;
}) => {
  const router = useRouter();

  const { setValue, getValues, watch } = method;

  const handleClick = () => {
    setValue("logs", savelogItem.logs);
  };

  const baseUrl = "http://13.209.16.46:8090/api/files";
  const pb = new PocketBase("http://13.209.16.46:8090");

  // 저장로그 아이콘 클릭여부
  const [isSaveLogClicked, setIsSaveLogClicked] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const saveLog = useAppSelector((state) => state.saveLog);

  let optionUrl = useSearchParams().get("page"); // page라는 params의 값을 가져온다.
  useEffect(() => {
    if (optionUrl !== saveLog.logPage) {
      dispatch(
        setSavePage({
          logPage: Number(optionUrl),
        }),
      );
    }
  }, [optionUrl]);

  // 저장로그 아이콘 클릭 시, 상태 변경해줌
  const handleToggleSaveLog = () => {
    setIsSaveLogClicked((prev) => !prev);
  };

  // 저장로그 아이콘 클릭으로 true가 되면, 삭제 여부 묻는 모달 띄우기
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleCancle = () => {
    setIsOpenModal(false);
  };

  const handleDelete = async () => {
    const id = await pb.collection("savelogs").delete(savelogItem.id);
    try {
      await fetch(`/api/mypage/savelog/:${id}`, {
        method: "DELETE",
      });
    } catch (error) {
      console.error("삭제 에러:", error);
    }
  };

  useEffect(() => {
    // 클릭한 경우 모달 열기
    if (isSaveLogClicked) {
      setIsOpenModal(true);
      setIsSaveLogClicked(false);
    }
  }, [isSaveLogClicked]);

  return (
    <>
      <SaveLogkModal
        isOpenModal={isOpenModal}
        handleCancle={handleCancle}
        handleDelete={handleDelete}
      />
      <Card
        className="relative w-[320px] h-[302px] rounded-[10px] overflow-hidden border border-solid border-neutral20 cursor-pointer"
        onClick={handleClick}
      >
        <CardTop
          className="h-[194px] p-[16px]"
          style={{
            backgroundImage: `url(${baseUrl}/${savelogItem.expand.logs.collectionId}/${savelogItem.expand.logs.id}/${savelogItem.expand.logs.thumbnail})`,
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
              {isSaveLogClicked ? (
                <Bookmark stroke="#7FACFF" /> // 북마크 해제
              ) : (
                <BookmarkFull fill="#7FACFF" /> // 북마크 액티브
              )}
            </button>
          </div>
          <p className="text-[14px] font-normal text-neutral50 text-ellipsis overflow-hidden whitespace-nowrap">
            {savelogItem.expand.logs.content}
          </p>
          <div className="flex text-[10px] text-neutral50 gap-[5px]">
            <div className="flex gap-[2px] items-center">
              <Eyes width="12" height="12" fill="#808080" />
              <span>{savelogItem.expand.logs.hitCount}</span>
            </div>
            <div className="flex gap-[2px] items-center">
              <HeartFull width="12" height="12" fill="#EE5C5C" />
              <span>{savelogItem.expand.logs.likeCount}</span>
            </div>
            <div className="flex gap-[2px] items-center">
              <Chat width="12" height="12" fill="#808080" />
              <span>{savelogItem.expand.logs.commentCount}</span>
            </div>
          </div>
        </CardBottom>
      </Card>
    </>
  );
};

export default SaveLog;
