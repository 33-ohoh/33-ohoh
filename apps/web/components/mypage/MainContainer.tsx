"use client";

import { useState } from "react";
import useSWR from "swr";
import LogCard from "./LogCard";
import Pagination from "./Pagination";

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

const MainContainer = () => {
  const favoriteLogChip = [
    "전체",
    "서버/밴엔드 개발자",
    "웹 풀스택 개발자",
    "안드로이드 개발자",
  ];

  // 전체 게시글의 개수가 담겨있다.
  const [page, setPage] = useState<number>(1);
  const [limit, setLimit] = useState<number>(6);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const key = `/api/mypage?page=${page}&perPage=${limit}`;

  const { data, error, isLoading } = useSWR(key, fetcher, {
    revalidateOnMount: true,
    revalidateOnFocus: true,
  });

  const handlePrev = () => {
    setPage((prev) => prev - 1);
  };
  const handleNext = () => {
    setPage((prev) => prev + 1);
  };

  const items = data?.items || [];
  const totalItems = data?.totalItems;
  console.log("aa", totalItems);

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <main>
      {/* <h3 className=" text-[28px] font-bold mb-extraSmall5">대표로그</h3> */}

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
      <div className="flex flex-col justify-center items-center gap-[75px]">
        <ul className="flex flex-wrap gap-[50px] w-[694px]">
          {items.map((log: LogCardProps) => {
            return <LogCard key={log.id} log={log} />;
          })}
        </ul>
        <Pagination
          handlePrev={handlePrev}
          handleNext={handleNext}
          totalItems={totalItems}
          page={page}
          limit={limit}
          setPage={setPage}
        />
      </div>
    </main>
  );
};

export default MainContainer;
