"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import Pagination from "../../../components/mypage/Pagination";
import useSWR from "swr";
import { setSavePage } from "../../../store/saveLogSlice";
import SaveLog from "../../../components/mypage/savelog/SaveLog";

const SaveLogPage = () => {
  const jobFilter = [
    "전체",
    "서버/밴엔드 개발자",
    "웹 풀스택 개발자",
    "안드로이드 개발자",
  ];

  const router = useRouter();
  const dispatch = useAppDispatch();
  const saveLogState = useAppSelector((state) => state.saveLog);

  let optionUrl = useSearchParams().get("page");
  useEffect(() => {
    if (optionUrl !== saveLogState.logPage) {
      dispatch(
        setSavePage({
          logPage: Number(optionUrl),
        }),
      );
    }
  }, [optionUrl]);
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const key = `/api/mypage/savelog?page=${optionUrl ? optionUrl : 1}&perPage=6`;

  useEffect(() => {
    return router.push(`/mypage/savelog?page=${saveLogState.logPage}`);
  }, [saveLogState.logPage]);
  const { data, error, isLoading } = useSWR(key, fetcher);

  const items = data?.items || [];
  const [savelogItem, setSaveLogItem] = useState([]);
  const totalItems = data?.totalItems;
  const totalPages = Math.ceil(totalItems / 6); // 3
  console.log(savelogItem);

  useEffect(() => {
    const newSavelogItems = items.map((item: any) => item?.expand?.logs);
    setSaveLogItem(newSavelogItems);
  }, [items]);

  const handlePrevPagenation = () => {
    if (totalPages >= saveLogState.logPage && saveLogState.logPage > 0) {
      dispatch(
        setSavePage({
          logPage: saveLogState.logPage - 1,
        }),
      );
    }
  };
  const handleNextPagenation = () => {
    if (saveLogState.logPage >= 0 || totalPages < saveLogState.logPage)
      dispatch(
        setSavePage({
          logPage: saveLogState.logPage + 1,
        }),
      );
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <section>
      {saveLogState?.isSaveLogState && (
        <div>
          <h3 className=" text-[28px] font-bold mb-extraSmall5">저장로그</h3>
        </div>
      )}

      <div className="flex gap-[10px] mb-small1">
        {jobFilter.map((job: string, index: number) => (
          <button
            key={index}
            type="button"
            className={`border border-solid rounded-radius100 py-[10px] px-[22px]`}
          >
            {job}
          </button>
        ))}
      </div>

      <form className="flex flex-col justify-center items-center gap-[75px]">
        <Suspense fallback={<div>로딩중...</div>}>
          <ul className="flex flex-wrap gap-[50px] w-[694px]">
            {items.map((savelogItem: any) => {
              return <SaveLog key={savelogItem.id} savelogItem={savelogItem} />;
            })}
          </ul>
        </Suspense>

        <Pagination
          handlePrev={handlePrevPagenation}
          handleNext={handleNextPagenation}
          totalItems={totalItems}
          page={saveLogState.logPage}
          limit={6}
          type="log"
        />
      </form>
    </section>
  );
};

export default SaveLogPage;
