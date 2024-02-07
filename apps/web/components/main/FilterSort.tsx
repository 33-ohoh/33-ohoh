"use client";
import { DownArrowBlack } from "@repo/ui/index";
import React, { useState } from "react";

const sortType = ["전체", "주간", "월간", "3개월"];
interface FilterSortProps {
  onSortChange: (sort: string) => void;
}
const FilterSort: React.FC<FilterSortProps> = ({ onSortChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  const handleSortFilterOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSortItemClick = (item: string) => {
    setSelectedSort(item);
    setIsOpen(false);
    onSortChange(item);
  };

  return (
    <div className="flex gap-x-[10px] body2M items-center">
      <span className="text-neutral50">정렬방식</span>
      <div
        className="flex items-center gap-x-[5px] "
        onClick={handleSortFilterOpen}
      >
        <span className="text-neutral80">{selectedSort || "전체"}</span>
        <span>
          <DownArrowBlack />
        </span>
      </div>
      <div
        className={`${
          isOpen
            ? "absolute top-[755px] left-[15px] flex flex-col p-[7px] w-[164px] shadow-light20 rounded-radius15 body1R bg-white"
            : "hidden"
        }`}
      >
        {sortType.map((item, index) => (
          <span
            key={index}
            className={`pl-[19px] py-[4px] rounded-radius5 hover:bg-primary10 hover:headlin1 ${
              selectedSort === item ? "font-bold bg-primary10" : ""
            }`}
            onClick={() => handleSortItemClick(item)}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterSort;
