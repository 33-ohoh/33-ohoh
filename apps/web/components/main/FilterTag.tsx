"use client";
import { FilterTagProps } from "../../types/filterTag";

const FilterTag: React.FC<FilterTagProps> = ({ text, isActive, onClick }) => {
  return (
    <div
      className={`inline-block px-[1.38rem] py-[0.62rem]  border-solid border-[1px]  rounded-[6.25rem] hover:border-primary90  hover:text-primary90 ${
        isActive
          ? "border-primary90 bg-primary90 text-[#ffffff] hover:text-[#ffffff]"
          : "border-neutral30 bg-white  text-neutral30 "
      }`}
      onClick={onClick}
    >
      <span className="body2M">{text}</span>
    </div>
  );
};

export default FilterTag;
