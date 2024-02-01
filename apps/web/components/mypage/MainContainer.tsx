"use client";

import { useEffect, useState } from "react";
import LogCard from "../../../../packages/ui/src/LogCard";

const MainContainer = () => {
  const favoriteLogChip = [
    "전체",
    "서버/밴엔드 개발자",
    "웹 풀스택 개발자",
    "안드로이드 개발자",
  ];

  // 전체 게시글의 개수가 담겨있다.
  const [logs, setLogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6; // 한 페이지당 보여줄 로그 수

  useEffect(() => {
    fetchLogs(currentPage);
  }, [currentPage]);

  const fetchLogs = (page: number) => {
    fetch(`api/mypage?page=${page}&pageSize=${pageSize}`)
      .then((response) => response.json())
      .then((result) => {
        setLogs(result);
      });
  };

  const totalLogs = logs.length;
  const totalPages = Math.ceil(totalLogs / pageSize);

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;

  const displayedLogs = logs.slice(startIndex, endIndex);

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <main>
      {/* <h3 className=" text-[28px] font-bold mb-extraSmall5">대표로그</h3> */}
      <div className="flex gap-[10px] mb-small1">
        {favoriteLogChip.map((logChip: any, index: any) => (
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
        <ul className="flex flex-wrap gap-[50px] w-[694px] h-[1006px]">
          {displayedLogs.map((log: any) => {
            return <LogCard key={log.id} log={log} />;
          })}
        </ul>
        <ul className="flex ">
          <li className="flex items-center gap-1 cursor-pointer">
            <span>&lt;</span>
            <button
              onClick={() => setCurrentPage(currentPage - 1)}
              disabled={currentPage === 1}
            >
              이전
            </button>
          </li>
          {pageNumbers.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`flex px-[5px] cursor-pointer ${pageNumber === currentPage ? "text-neutral60" : "text-neutral30"}`}
              onClick={() => setCurrentPage(pageNumber)}
            >
              {pageNumber}
            </li>
          ))}
          <li className="flex items-center gap-1 cursor-pointer">
            <button
              onClick={() => setCurrentPage(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              다음
            </button>
            <span>&gt;</span>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default MainContainer;
