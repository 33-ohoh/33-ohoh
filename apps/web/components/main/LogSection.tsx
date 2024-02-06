import React from "react";
import FilterTagList from "./FilterTagList";
import FilterSort from "./FilterSort";
import LogCardList from "./LogCardList";

const LogSection = () => {
  return (
    <div className="w-[full] flex flex-col items-center">
      <div className="w-[1066px] flex flex-col gap-y-[0.94rem] mt-[4.69rem]">
        <span className="display4">로그 분야</span>
        <FilterTagList />
        <div className="mt-[74px] mb-[25px]">
          <FilterSort />
        </div>
      </div>
      <LogCardList />
    </div>
  );
};

export default LogSection;
