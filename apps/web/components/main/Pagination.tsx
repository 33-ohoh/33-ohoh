"use client";
import { useEffect } from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number | undefined;
  onPageChange: (pageNumber: number) => void;
}
const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (!totalPages || totalPages <= 1) return null;

  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [currentPage]);

  return (
    <div className="flex justify-center items-center body4R text-neutral60 mt-[75px]">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={isFirstPage}
      >
        &lt; 이전
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`flex px-[5px] cursor-pointer ${currentPage === page ? "subhead2" : ""}`}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={isLastPage}
      >
        다음 <span>&gt;</span>
      </button>
    </div>
  );
};

export default Pagination;
