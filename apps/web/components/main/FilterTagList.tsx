"use client";
import React, { useState } from "react";
import FilterTag from "./FilterTag";

interface Tag {
  text: string;
  isActive: boolean;
}
interface FilterTagListProps {
  tagTexts: string[];
  filteredTags: string[];
  onTagClick: (tagText: string) => void;
}
const FilterTagList: React.FC<FilterTagListProps> = ({
  tagTexts,
  filteredTags,
  onTagClick,
}) => {
  const [tags, setTags] = useState<Tag[]>(
    tagTexts.map((text, index) => ({
      text,
      isActive: index === 0,
    })),
  );

  const handleTagClick = (clickedTagText: string) => {
    const updatedTags = tags.map((tag) => ({
      ...tag,
      isActive:
        tag.text === clickedTagText ||
        (tag.text === tagTexts[0] && clickedTagText === tagTexts[0]),
    }));
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
