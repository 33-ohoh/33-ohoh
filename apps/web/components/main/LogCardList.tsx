"use client";

import Image from "next/image";
import LogCard from "./LogCard";
import { getFullLogList } from "../../apis/logList";
import useSWR from "swr";
interface LogCardListProps {
  filteredTags: string[];
  selectedSort: string;
}
const LogCardList: React.FC<LogCardListProps> = ({
  filteredTags,
  selectedSort,
}) => {
  const tagFilters = filteredTags.map((tag) => `tags~'${tag}'`);

  const getStartDate = (selectedSort: string): string => {
    let startDate: Date | undefined;

    switch (selectedSort) {
      case "전체":
        startDate = new Date("2000-01-01");
        break;
      case "주간":
        startDate = new Date();
        startDate.setDate(startDate.getDate() - 7);
        break;
      case "월간":
        startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 1);
        break;
      case "3개월":
        startDate = new Date();
        startDate.setMonth(startDate.getMonth() - 3);
        break;
      default:
        startDate = new Date("2000-01-01");
        break;
    }

    return startDate?.toISOString().split("T")[0] || "";
  };

  const startDate = getStartDate(selectedSort);
  const filter = [
    ...tagFilters,
    "isPublic=true",
    `created >= "${startDate} 00:00:00"`,
  ].join(" && ");

  const { data: data } = useSWR(["/api/logs", filter], () =>
    getFullLogList("logs", {
      sort: "created",
      expand: "user",
      filter,
    }),
  );
  const items = data || [];

  return (
    <div className="w-[full] flex flex-col items-center">
      <div className=" w-[1066px] flex flex-wrap gap-[50px]">
        {items.length > 0 &&
          items
            .slice(0, 9)
            .map((data, dataIndex) => <LogCard key={dataIndex} {...data} />)}
      </div>
      <Image
        src={"/mainBanner.png"}
        alt="mainBanner"
        width={1440}
        height={350}
        objectFit="cover"
        className="relative top-[50px] left-0 mb-[100px]"
      />
      <div className=" w-[1066px] flex flex-wrap gap-[50px]">
        {items.length > 9 &&
          items
            .slice(9)
            .map((data, dataIndex) => <LogCard key={dataIndex} {...data} />)}
      </div>
    </div>
  );
};

export default LogCardList;
