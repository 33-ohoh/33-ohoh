"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useEffect, useState } from "react";
import { setSavePage } from "../../../store/saveLogSlice";
import { useForm } from "react-hook-form";
import useSWR from "swr";
import Pagination from "../../../components/mypage/Pagination";

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
  const [recentlogItem, setRecentlogItem] = useState([]);
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

  const method = useForm({
    mode: "onChange",
    defaultValues: {
      log: "",
    },
  });

  async function handleLogClick(recordId: string) {
    const userId = "사용자ID"; // 사용자 식별 정보
    await fetch("http://13.209.16.46:8090/api/collections/recentlogs/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        recordId,
      }),
    });
  }

  async function getServerSideProps(context) {
    const userId = context.params.userId; // 사용자 ID 파라미터 추출
    const res = await fetch(
      `http://13.209.16.46:8090/api/collections/userPosts/records?filter=userId=${userId}`,
    );
    const posts = await res.json();

    return {
      props: {
        posts,
      },
    };
  }

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
        {/* <ul className="flex flex-wrap gap-[50px] w-[694px]">
          {items.map((savelogItem: any) => {
            return (
              <SaveLog
                key={savelogItem.id}
                savelogItem={savelogItem}
                method={method}
                saveLogState={saveLogState}
              />
            );
          })}
        </ul> */}

        <Pagination
          handlePrev={handlePrevPagenation}
          handleNext={handleNextPagenation}
          totalItems={totalItems}
          page={saveLogState.logPage}
          limit={6}
        />
      </form>
    </section>
  );
};

export default RecentLogPage;
