"use client";
import React from "react";
import HotLogCard from "./HotLogCard";
import { TwinkleCharacter } from "@repo/ui/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useSWR from "swr";
import { getLogList } from "../../apis/logList";

const HotLogCardList = () => {
  const { data: data } = useSWR("/api/hotLogs", () =>
    getLogList("logs", {
      page: 1,
      perPage: 4,
      sort: "-hitCount",
      expand: "user",
      filter: "isPublic = true",
    }),
  );
  const items = data?.items || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    initialSlide: 0,
    variableWidth: true,
  };
  return (
    <div className="w-full h-[430px] bg-primary10 pl-[12.93rem] relative flex flex-col gap-y-[1.75rem] py-[4.5rem] overflow-hidden">
      <div className="display4 text-neutral80">
        <span>오늘의 </span>
        <span className="text-primary90">HOT</span>
        <span>로그</span>
      </div>
      <style>
        {`
          .slick-slide {
            padding-right: 1.56rem;
          }
        `}
      </style>
      <Slider {...settings} className="z-10">
        {items.map((data, dataIndex) => (
          <HotLogCard
            key={dataIndex}
            currentRank={dataIndex + 1}
            title={data.title}
            content={data.content}
            thumbnail={data.thumbnail}
            expand={{
              user: {
                collectionId: data.expand?.user.collectionId,
                name: data.expand?.user.name,
                myJob: data.expand?.user.myJob,
                avatar: data.expand?.user.avatar,
                id: data.expand?.user.id,
              },
            }}
            id={data.id}
            collectionId={data.collectionId}
          />
        ))}
      </Slider>
      <span className="absolute top-[25px] left-[370px]">
        <TwinkleCharacter />
      </span>
    </div>
  );
};

export default HotLogCardList;
