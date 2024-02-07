"use client";
import React, { useState } from "react";
import FilterTagList from "./FilterTagList";
import FilterSort from "./FilterSort";
import LogCardList from "./LogCardList";

const LogSection = () => {
  const [filteredTags, setFilteredTags] = useState<string[]>([]);
  const [selectedSort, setSelectedSort] = useState<string>("전체");
  const handleTagClick = (clickedTagText: string) => {
    const isTagFiltered = filteredTags.includes(clickedTagText);
    if (isTagFiltered) {
      setFilteredTags(filteredTags.filter((tag) => tag !== clickedTagText));
    } else {
      setFilteredTags([...filteredTags, clickedTagText]);
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
          filteredTags={filteredTags}
          onTagClick={handleTagClick}
        />
        <div className="mt-[74px] mb-[25px]">
          <FilterSort onSortChange={handleSortChange} />
        </div>
      </div>
      <LogCardList filteredTags={filteredTags} selectedSort={selectedSort} />
    </div>
  );
};

export default LogSection;
