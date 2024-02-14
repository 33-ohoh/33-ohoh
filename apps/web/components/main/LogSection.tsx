"use client";
import React, { useState } from "react";
import FilterTagList from "./FilterTagList";
import FilterSort from "./FilterSort";
import LogCardList from "./LogCardList";
import NewLogButton from "./NewLogButton";

const LogSection = () => {
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>("전체");
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
    <div className="w-[full] flex flex-col items-center">
      <div className="w-[1066px] flex flex-col gap-y-[0.94rem] mt-[4.69rem]">
        <span className="display4">로그 분야</span>
        <FilterTagList
          tagTexts={[
            "개발 전체",
            "프론트엔드 개발자",
            "서버/백앤드 개발자",
            "웹 풀스택 개발자",
            "안드로이드 개발자",
            "IOS 개발자",
            "빅데이터 엔지니어",
            "인공지능/머신러닝",
            "게임 서버 개발자",
            "웹퍼블리셔",
          ]}
          filteredTags={filteredTags}
          onTagClick={handleTagClick}
        />
        <div className="mt-[74px] mb-[25px] flex justify-between">
          <FilterSort onSortChange={handleSortChange} />
          <NewLogButton />
        </div>
      </div>
      <LogCardList filteredTags={filteredTags} selectedSort={selectedSort} />
    </div>
  );
};

export default LogSection;
