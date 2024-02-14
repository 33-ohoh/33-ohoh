"use client";

import { useEffect } from "react";
import useSWR from "swr";
import { useForm } from "react-hook-form";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { setPage } from "../../../store/selectLogSlice";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Button } from "@repo/ui/button";
import { Log } from "../../../types/log";
import LogCard from "../../../components/mypage/LogCard";
import Pagination from "../../../components/mypage/Pagination";

const MyLogPage = () => {
  const favoriteLogChip = [
    "전체",
    "서버/밴엔드 개발자",
    "웹 풀스택 개발자",
    "안드로이드 개발자",
  ];
  const router = useRouter();
  const searchParams = useSearchParams();
  const dispatch = useAppDispatch();
  const selectState = useAppSelector((state) => state.selectState);

  let optionUrl = new URLSearchParams(searchParams).get("page");
  useEffect(() => {
    if (optionUrl !== selectState.logPage) {
      dispatch(
        setPage({
          logPage: Number(optionUrl), // reducer 중 하나
        }),
      );
    }
  }, [optionUrl]);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const key = `/api/mypage?page=${optionUrl ? optionUrl : 1}&perPage=6`;

  useEffect(() => {
    return router.push(`/mypage?page=${selectState.logPage}`);
  }, [selectState.logPage]);
  2;

  const { data, error, isLoading } = useSWR(key, fetcher);

  const method = useForm({
    mode: "onChange",
    defaultValues: {
      log: "",
    },
  });

  const items = data?.items || [];
  const totalItems = data?.totalItems;
  const totalPages = Math.ceil(totalItems / 6); // 3

  const handlePrevPagenation = () => {
    if (totalPages >= selectState.logPage && selectState.logPage > 0) {
      dispatch(
        setPage({
          logPage: selectState.logPage - 1,
        }),
      );
    }
  };
  const handleNextPagenation = () => {
    if (selectState.logPage >= 0 || totalPages < selectState.logPage)
      dispatch(
        setPage({
          logPage: selectState.logPage + 1,
        }),
      );
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <section>
      {selectState.isSelectedLogPage && (
        <div>
          <h3 className=" text-[28px] font-bold mb-extraSmall5">대표로그</h3>
          <p className="text-[14px] mb-small4">
            나의 로그 중에 1개를 선택하여 대표글로 지정해보세요.
          </p>
        </div>
      )}

      <div className="flex gap-[10px] mb-small1">
        {favoriteLogChip.map((logChip: string, index: number) => (
          <button
            key={index}
            type="button"
            className={`border border-solid rounded-radius100 py-[10px] px-[22px]`}
          >
            {logChip}
          </button>
        ))}
      </div>
      <form className="flex flex-col justify-center items-center gap-[75px]">
        <ul className="flex flex-wrap gap-[50px] w-[694px]">
          {items.map((log: Log) => {
            return <LogCard key={log.id} log={log} method={method} />;
          })}
        </ul>

        <Pagination
          handlePrev={handlePrevPagenation}
          handleNext={handleNextPagenation}
          totalItems={totalItems}
          page={selectState.logPage}
          limit={6}
          type="log"
        />
        {selectState.isSelectedLogPage && (
          <Button className="w-[210px] bg-primary80 font-semibold mt-[36px] text-primary5">
            완료
          </Button>
        )}
      </form>
    </section>
  );
};

export default MyLogPage;
