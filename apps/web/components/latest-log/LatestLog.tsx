"use client";
import React, { useEffect, useState } from "react";
import FilterTagList from "../main/FilterTagList";
import FilterSort from "../main/FilterSort";
import NewLogButton from "../main/NewLogButton";
import LogCardList from "./LogCardList";

const LatestLog = () => {
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>("전체");
  const [sortDate, setSortDate] = useState<string>("");
  useEffect(() => {
    updateSortDate(selectedSort);
  }, [selectedSort]);
  const updateSortDate = (sort: string) => {
    const today = new Date();
    let formattedDate = "";

    switch (sort) {
      case "전체":
        formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}`;
        break;
      case "주간":
        const week = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
        formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}.${String(today.getDate()).padStart(2, "0")}-${String(week.getMonth() + 1).padStart(2, "0")}.${String(week.getDate()).padStart(2, "0")}`;
        break;
      case "월간":
        formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}`;
        break;
      case "3개월":
        const threeMonths = new Date(
          today.getTime() - 3 * 30 * 24 * 60 * 60 * 1000,
        );
        formattedDate = `${today.getFullYear()}.${String(today.getMonth() + 1).padStart(2, "0")}-${String(threeMonths.getFullYear())}.${String(threeMonths.getMonth() + 1).padStart(2, "0")}`;
        break;
      default:
        break;
    }

    setSortDate(formattedDate);
  };

  const handleTagClick = (clickedTagText: string) => {
    if (clickedTagText === "개발 전체") {
      setFilteredTags([]);
    } else {
      const isTagFiltered = filteredTags.includes(clickedTagText);
      if (isTagFiltered) {
        setFilteredTags(filteredTags.filter((tag) => tag !== clickedTagText));
      } else {
        setFilteredTags([...filteredTags, clickedTagText]);
      }
    }
  };
  const handleSortChange = (sort: string) => {
    setSelectedSort(sort);
  };
  return (
    <div className="w-[full] flex flex-col items-center mt-[75px] ">
      <div className="w-[1066px] flex flex-col gap-y-[15px] mb-[25px]">
        <div className="flex justify-between">
          <FilterSort onSortChange={handleSortChange} />
          <NewLogButton />
        </div>
        <span className="display4">{sortDate}</span>
        <FilterTagList
          tagTexts={[
            "개발 전체",
            "프론트엔드 개발자",
            "서버/백앤드 개발자",
            "웹 풀스택 개발자",
            "안드로이드 개발자",
          ]}
          filteredTags={filteredTags}
          onTagClick={handleTagClick}
        />
      </div>
      <LogCardList filteredTags={filteredTags} selectedSort={selectedSort} />
    </div>
  );
};

export default LatestLog;
