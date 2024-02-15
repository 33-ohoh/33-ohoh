"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect } from "react";
import { setSavePage } from "../../../store/saveLogSlice";
import useSWR from "swr";
import Pagination from "../../../components/mypage/Pagination";
import SaveLog from "../../../components/mypage/savelog/SaveLog";

const RecentLogPage = () => {
  const jobFilter = [
    "전체",
    "서버/밴엔드 개발자",
    "웹 풀스택 개발자",
    "안드로이드 개발자",
  ];

  const router = useRouter();
  const dispatch = useAppDispatch();
  const saveLogState = useAppSelector((state) => state.saveLog);
  const optionUrl = useSearchParams().get("page"); // null
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const key = `/api/mypage/recentlog?page=${optionUrl ? optionUrl : 1}&perPage=6`;

  const { data, error, isLoading } = useSWR(key, fetcher);
  const items = data?.items || [];
  const totalItems = data?.totalItems;
  const totalPages = Math.ceil(totalItems / 6);

  useEffect(() => {
    if (optionUrl !== saveLogState.logPage) {
      dispatch(
        setSavePage({
          logPage: Number(optionUrl),
        }),
      );
    } else {
      dispatch(
        setSavePage({
          logPage: 1,
        }),
      );
    }
  });

  useEffect(() => {
    return router.push(`/mypage/recentlog?page=${saveLogState.logPage}`);
  }, [saveLogState.logPage]);

  // 페이지 네이션 핸들러
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
      <div>
        <h3 className=" text-[28px] font-bold mb-extraSmall5">최근 본 로그</h3>
      </div>

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
        <ul className="flex flex-wrap gap-[50px] w-[694px]">
          {items.map((savelogItem: any) => {
            return <SaveLog key={savelogItem.id} savelogItem={savelogItem} />;
          })}
        </ul>

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

export default RecentLogPage;
