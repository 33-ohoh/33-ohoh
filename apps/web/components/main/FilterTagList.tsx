"use client";
import React, { useState } from "react";
import FilterTag from "./FilterTag";

interface Tag {
  text: string;
  isActive: boolean;
}

const FilterTagList: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([
    { text: "개발 전체", isActive: false },
    { text: "소프트웨어 엔지니어", isActive: false },
    { text: "서버 개발자", isActive: false },
    { text: "웹 개발자", isActive: false },
    { text: "프론트엔드 개발자", isActive: false },
    { text: "C,C++ 개발자", isActive: false },
    { text: "자바 개발자", isActive: false },
    { text: "파이썬 개발자", isActive: false },
    { text: "머신러닝 엔지니어", isActive: false },
    { text: "데이터 엔지니어", isActive: false },
    { text: "하드웨어 엔지니어", isActive: false },
  ]);

  const handleTagClick = (clickedTagText: string) => {
    const updatedTags = [...tags];

    const clickedTag = updatedTags.find((tag) => tag.text === clickedTagText);

    if (clickedTag) {
      clickedTag.isActive = !clickedTag.isActive;

      if (clickedTag.text === "개발 전체") {
        updatedTags
          .slice(1)
          .forEach((tag) => (tag.isActive = clickedTag.isActive));
      } else {
        const otherTagsActive = updatedTags
          .slice(1)
          .every((tag) => tag.isActive);
        const allTag = updatedTags.find((tag) => tag.text === "개발 전체");
        if (allTag) {
          allTag.isActive = otherTagsActive;
        }
      }

      setTags(updatedTags);
    }
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
