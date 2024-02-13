"use client";

import { useEffect } from "react";
import Pagination from "../../../components/mypage/Pagination";
import ReplieCard from "../../../components/mypage/replies/ReplieCard";
import { useParams, usePathname, useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { useSearchParams } from "next/navigation";
import { setPage } from "../../../store/selectLogSlice";
import useSWR from "swr";

const RepliesPage = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const replyPage = useAppSelector((state) => state.selectState.replyPage);
  const pageParam = useSearchParams().get("page");
  let optionUrl =
    pageParam !== undefined &&
    typeof Number(pageParam) === "number" &&
    Number(pageParam) !== 0
      ? Number(pageParam)
      : 1;

  useEffect(() => {
    if (!optionUrl || !pageParam) {
      return router.push(`/mypage/replies?page=1`);
    }
  }, []);

  useEffect(() => {
    if (optionUrl !== replyPage) {
      dispatch(
        setPage({
          replyPage: optionUrl,
        }),
      );
    }
  }, [optionUrl]);

  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const key = `/api/mypage/replies?page=${optionUrl > 0 ? optionUrl : 1}&perPage=4`;

  useEffect(() => {
    if (replyPage !== 0) {
      return router.push(`/mypage/replies?page=${replyPage}`);
    }
  }, [replyPage]);

  const { data, error, isLoading } = useSWR(key, fetcher);

  const totalItems = data?.totalItems;
  const totalPages = Math.ceil(totalItems / 4); // 3

  const handlePrevPagenation = () => {
    if (totalPages >= replyPage && replyPage > 1) {
      console.log("test");
      dispatch(
        setPage({
          replyPage: replyPage - 1,
        }),
      );
    }
  };
  const handleNextPagenation = () => {
    if (replyPage >= 0 || totalPages < replyPage)
      dispatch(
        setPage({
          replyPage: replyPage + 1,
        }),
      );
  };

  if (isLoading) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error}</div>;

  return (
    <section>
      <div className="mb-[50px]">
        <h3 className=" text-[28px] font-bold mb-extraSmall5">내가 쓴 댓글</h3>
      </div>
      <div className="mb-[15px]">
        <label htmlFor="sort">
          <span>정렬방식</span>
          <select name="" id="">
            <option value="all">전체</option>
            <option value="newest">최신순</option>
            <option value="oldest">오래된 순</option>
            <option value="naming">이름순</option>
          </select>
        </label>
      </div>

      <form className="flex flex-col justify-center items-center gap-[25px]">
        <ReplieCard repliesData={data.items} />
        <Pagination
          handlePrev={handlePrevPagenation}
          handleNext={handleNextPagenation}
          totalItems={totalItems}
          page={replyPage}
          limit={4}
          type="reply"
        />
      </form>
    </section>
  );
};

export default RepliesPage;
