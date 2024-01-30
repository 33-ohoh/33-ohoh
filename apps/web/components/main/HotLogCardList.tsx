"use client";
import HotLogCard from "./HotLogCard";
import { TwinkleCharacter } from "@repo/ui/icon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const mockData = [
  {
    profileImg:
      "https://mblogthumb-phinf.pstatic.net/MjAyMTAxMDhfMjA4/MDAxNjEwMDc1ODEyMTcw.K17tmua0Y0ADO1uYu-lQyN0IHeLjgAXX-XF9fn6OcFgg.HihmxWXbjFpXuc4fBnxrxgu3Uz-Dxg2FGL8Vrqo3UJEg.JPEG.brteddy/output_2741180172.jpg?type=w800",
    name: "daeunlee1",
    job: "PM, developer",
    title: "개발자가 되고싶은 이유",
    preview:
      "개발은 전 세계적인 커뮤니티와 연결되어있습니다. 다양한 배경과 경험을...",
    thumbnail: "https://i.ytimg.com/vi/1H-zZ6QDPWM/maxresdefault.jpg",
    previousRank: 5,
  },
  {
    profileImg:
      "https://mblogthumb-phinf.pstatic.net/MjAyMTAxMDhfMjA4/MDAxNjEwMDc1ODEyMTcw.K17tmua0Y0ADO1uYu-lQyN0IHeLjgAXX-XF9fn6OcFgg.HihmxWXbjFpXuc4fBnxrxgu3Uz-Dxg2FGL8Vrqo3UJEg.JPEG.brteddy/output_2741180172.jpg?type=w800",
    name: "daeunlee2",
    job: "PM, developer",
    title: "개발자가 되고싶은 이유",
    preview:
      "개발은 전 세계적인 커뮤니티와 연결되어있습니다. 다양한 배경과 경험을...",
    thumbnail: "https://i.ytimg.com/vi/1H-zZ6QDPWM/maxresdefault.jpg",
    previousRank: 5,
  },
  {
    profileImg:
      "https://mblogthumb-phinf.pstatic.net/MjAyMTAxMDhfMjA4/MDAxNjEwMDc1ODEyMTcw.K17tmua0Y0ADO1uYu-lQyN0IHeLjgAXX-XF9fn6OcFgg.HihmxWXbjFpXuc4fBnxrxgu3Uz-Dxg2FGL8Vrqo3UJEg.JPEG.brteddy/output_2741180172.jpg?type=w800",
    name: "daeunlee3",
    job: "PM, developer",
    title: "개발자가 되고싶은 이유",
    preview:
      "개발은 전 세계적인 커뮤니티와 연결되어있습니다. 다양한 배경과 경험을...",
    thumbnail: "https://i.ytimg.com/vi/1H-zZ6QDPWM/maxresdefault.jpg",
    previousRank: 5,
  },
  {
    profileImg:
      "https://mblogthumb-phinf.pstatic.net/MjAyMTAxMDhfMjA4/MDAxNjEwMDc1ODEyMTcw.K17tmua0Y0ADO1uYu-lQyN0IHeLjgAXX-XF9fn6OcFgg.HihmxWXbjFpXuc4fBnxrxgu3Uz-Dxg2FGL8Vrqo3UJEg.JPEG.brteddy/output_2741180172.jpg?type=w800",
    name: "daeunlee4",
    job: "PM, developer",
    title: "개발자가 되고싶은 이유",
    preview:
      "개발은 전 세계적인 커뮤니티와 연결되어있습니다. 다양한 배경과 경험을...",
    thumbnail: "https://i.ytimg.com/vi/1H-zZ6QDPWM/maxresdefault.jpg",
    previousRank: 5,
  },
];

const HotLogCardList = () => {
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
        {mockData.map((data, dataIndex) => (
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
