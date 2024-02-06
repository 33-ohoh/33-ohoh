"use client";

import { useEffect, useState } from "react";

import PocketBase from "pocketbase";
import LogCard from "./LogCard";
import Image from "next/image";

interface LogCardProps {
  id: string;
  title: string;
  thumbnail: string;
  expand: {
    user: {
      name: string;
      myJob: string;
    };
  };
  content: string;
  hitCount: number;
  likeCount: number;
  commentCount: number;
  collectionId: string;
}
const LogCardList = () => {
  const pb = new PocketBase("http://13.209.16.46:8090");
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultList = await pb.collection("logs").getFullList({
          sort: "created",
          expand: "user",
          filter: "isPublic = true",
        });
        setApiData(resultList);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="w-[full] flex flex-col items-center">
      <div className=" w-[1066px] flex flex-wrap gap-[50px]">
        {apiData &&
          apiData
            .slice(0, 6)
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
        {apiData &&
          apiData
            .slice(6)
            .map((data, dataIndex) => <LogCard key={dataIndex} {...data} />)}
      </div>
    </div>
  );
};

export default LogCardList;
