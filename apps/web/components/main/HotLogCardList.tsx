"use client";
import React, { useEffect, useState } from "react";
import HotLogCard from "./HotLogCard";
import { TwinkleCharacter } from "@repo/ui/index";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://13.209.16.46:8090");

const HotLogCardList = () => {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resultList = await pb.collection("logs").getList(1, 4, {
          sort: "-hitCount",
          expand: "user",
          filter: "isPublic = true",
        });
        setApiData(resultList.items);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
    <div className="w-full h-[430px] bg-primary10 pl-[12.93rem] flex flex-col gap-y-[1.75rem] py-[4.5rem] overflow-hidden">
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
        {apiData.map((data, dataIndex) => (
          <HotLogCard key={dataIndex} {...data} currentRank={dataIndex + 1} />
        ))}
      </Slider>

      <span className="absolute top-[1.63rem] left-[22.75rem]">
        <TwinkleCharacter />
      </span>
    </div>
  );
};

export default HotLogCardList;
