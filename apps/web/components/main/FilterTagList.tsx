"use client";
import React, { useState } from "react";
import FilterTag from "./FilterTag";

interface Tag {
  text: string;
  isActive: boolean;
}
interface FilterTagListProps {
  filteredTags: string[];
  onTagClick: (tagText: string) => void;
}
const FilterTagList: React.FC<FilterTagListProps> = ({
  filteredTags,
  onTagClick,
}) => {
  const [tags, setTags] = useState<Tag[]>([
    { text: "개발 전체", isActive: true },
    { text: "프론트엔드 개발자", isActive: false },
    { text: "서버/백앤드 개발자", isActive: false },
    { text: "안드로이드 개발자", isActive: false },
    { text: "IOS 개발자", isActive: false },
    { text: "웹 풀스택 개발자", isActive: false },
    { text: "크로스플랫폼 앱개발자", isActive: false },
    { text: "게임 클라이언트 개발자", isActive: false },
    { text: "인공지능/머신러닝", isActive: false },
    { text: "빅데이터 엔지니어", isActive: false },
    { text: "웹퍼블리셔", isActive: false },
  ]);

  const handleTagClick = (clickedTagText: string) => {
    let updatedTags: Tag[] = [];

    if (clickedTagText === "개발 전체") {
      updatedTags = tags.map((tag) => ({
        ...tag,
        isActive: tag.text === clickedTagText ? true : false,
      }));
    } else {
      updatedTags = tags.map((tag) => ({
        ...tag,
        isActive:
          tag.text === "개발 전체"
            ? false
            : tag.text === clickedTagText
              ? !tag.isActive
              : tag.isActive,
      }));
    }

    setTags(updatedTags);
    onTagClick(clickedTagText);
  };
  return (
    <div className="flex flex-wrap gap-x-[0.62rem] gap-y-[15px]">
      {tags.map((tag, index) => (
        <FilterTag
          key={index}
          text={tag.text}
          isActive={tag.isActive}
          onClick={() => handleTagClick(tag.text)}
        />
      ))}
    </div>
  );
};

export default FilterTagList;
