import React from "react";
import FilterTagList from "./FilterTagList";

const LogSection = () => {
  return (
    <div className="w-[1066px] flex flex-col gap-y-[0.94rem] mt-[4.69rem]">
      <span className="display4">로그 분야</span>
      <FilterTagList />
    </div>
  );
};

export default LogSection;
