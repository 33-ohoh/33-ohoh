interface PaginationProps {
  handlePrev: () => void;
  handleNext: () => void;
  totalItems: number;
  page: number;
  limit: number;
  setPage: (pageNumber: number) => void;
}

const Pagination = ({
  handlePrev,
  handleNext,
  totalItems,
  page,
  limit,
  setPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / limit); // 3

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );

  return (
    <div className="flex">
      <button onClick={handlePrev} disabled={page === 1}>
        <span>&lt;</span> 이전
      </button>
      {pageNumbers.map((pageNumber: number) => (
        <button
          key={pageNumber}
          className={`flex px-[5px] cursor-pointer ${pageNumber === page ? "text-neutral60" : "text-neutral30"}`}
          onClick={() => setPage(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button onClick={handleNext} disabled={page === totalPages}>
        다음 <span>&gt;</span>
      </button>
    </div>
  );
};

export default Pagination;
