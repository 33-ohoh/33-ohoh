import React, { useEffect, useState } from "react";
import HotLogCard from "./hotLogCard";
import * as stylex from "@stylexjs/stylex";

const mockData = [
  {
    profile:
      "https://mblogthumb-phinf.pstatic.net/MjAyMTAxMDhfMjA4/MDAxNjEwMDc1ODEyMTcw.K17tmua0Y0ADO1uYu-lQyN0IHeLjgAXX-XF9fn6OcFgg.HihmxWXbjFpXuc4fBnxrxgu3Uz-Dxg2FGL8Vrqo3UJEg.JPEG.brteddy/output_2741180172.jpg?type=w800",
    id: "daeunlee1",
    job: "PM, developer",
    title: "개발자가 되고싶은 이유",
    preview:
      "개발은 전 세계적인 커뮤니티와 연결되어있습니다. 다양한 배경과 경험을...",
    thumbnail: "https://i.ytimg.com/vi/1H-zZ6QDPWM/maxresdefault.jpg",
    up: 1,
  },
  {
    profile:
      "https://mblogthumb-phinf.pstatic.net/MjAyMTAxMDhfMjA4/MDAxNjEwMDc1ODEyMTcw.K17tmua0Y0ADO1uYu-lQyN0IHeLjgAXX-XF9fn6OcFgg.HihmxWXbjFpXuc4fBnxrxgu3Uz-Dxg2FGL8Vrqo3UJEg.JPEG.brteddy/output_2741180172.jpg?type=w800",
    id: "daeunlee1",
    job: "PM, developer",
    title: "개발자가 되고싶은 이유",
    preview:
      "개발은 전 세계적인 커뮤니티와 연결되어있습니다. 다양한 배경과 경험을...",
    thumbnail: "https://i.ytimg.com/vi/1H-zZ6QDPWM/maxresdefault.jpg",
    up: 1,
  },
  {
    profile:
      "https://mblogthumb-phinf.pstatic.net/MjAyMTAxMDhfMjA4/MDAxNjEwMDc1ODEyMTcw.K17tmua0Y0ADO1uYu-lQyN0IHeLjgAXX-XF9fn6OcFgg.HihmxWXbjFpXuc4fBnxrxgu3Uz-Dxg2FGL8Vrqo3UJEg.JPEG.brteddy/output_2741180172.jpg?type=w800",
    id: "daeunlee1",
    job: "PM, developer",
    title: "개발자가 되고싶은 이유",
    preview:
      "개발은 전 세계적인 커뮤니티와 연결되어있습니다. 다양한 배경과 경험을...",
    thumbnail: "https://i.ytimg.com/vi/1H-zZ6QDPWM/maxresdefault.jpg",
    up: 1,
  },
  {
    profile:
      "https://mblogthumb-phinf.pstatic.net/MjAyMTAxMDhfMjA4/MDAxNjEwMDc1ODEyMTcw.K17tmua0Y0ADO1uYu-lQyN0IHeLjgAXX-XF9fn6OcFgg.HihmxWXbjFpXuc4fBnxrxgu3Uz-Dxg2FGL8Vrqo3UJEg.JPEG.brteddy/output_2741180172.jpg?type=w800",
    id: "daeunlee1",
    job: "PM, developer",
    title: "개발자가 되고싶은 이유",
    preview:
      "개발은 전 세계적인 커뮤니티와 연결되어있습니다. 다양한 배경과 경험을...",
    thumbnail: "https://i.ytimg.com/vi/1H-zZ6QDPWM/maxresdefault.jpg",
    up: 1,
  },
];

const styles = stylex.create({
  listBox: {
    width: "100%",
    overflow: "hidden",
  },
  list: {
    transition: "transform 0.5s ease-in-out",
    display: "flex",
    gap: "1.56rem",
    marginBottom: "2px",
  },
});
const HotLogList = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const totalSlides = mockData.length;

    const intervalId = setInterval(() => {
      setCurrentSlide(
        (prevSlide) => (prevSlide + 1) % (totalSlides * Infinity),
      );
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const slideWidth = 49.75;

  const listStyle = {
    transform: `translateX(${-slideWidth * currentSlide}%)`,
  };

  return (
    <div {...stylex.props(styles.listBox)}>
      <div {...stylex.props(styles.list)} style={listStyle}>
        {Array.from({ length: 100 }).map((_, index) => (
          <React.Fragment key={index}>
            {mockData.map((data, dataIndex) => (
              <HotLogCard key={dataIndex} {...data} rank={dataIndex + 1} />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HotLogList;
