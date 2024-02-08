import { useAppDispatch } from "../../hooks/redux";
import { setLogPage } from "../../store/selectLogSlice";

interface PaginationProps {
  handlePrev: () => void;
  handleNext: () => void;
  totalItems: number;
  page: number;
  limit: number;
}

const Pagination = ({
  handlePrev,
  handleNext,
  totalItems,
  page,
  limit,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / limit); // 3

  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1,
  );
  const dispatch = useAppDispatch();
  const handlePagenation = (pageNumber: number) => {
    dispatch(
      setLogPage({
        logPage: pageNumber,
      }),
    );
  };
  return (
    <div className="flex justify-center items-center">
      <button type="button" onClick={handlePrev}>
        <span>&lt;</span> 이전
      </button>
      {pageNumbers.map((pageNumber: number) => (
        <button
          key={pageNumber}
          type="button"
          className={`flex px-[5px] cursor-pointer ${pageNumber === page ? "text-neutral60" : "text-neutral30"}`}
          onClick={() => handlePagenation(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button type="button" onClick={handleNext}>
        다음 <span>&gt;</span>
      </button>
    </div>
  );
};

export default Pagination;
