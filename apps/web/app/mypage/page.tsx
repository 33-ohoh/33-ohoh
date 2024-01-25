"use client";

import { useState } from "react";
import * as stylex from "@stylexjs/stylex";
import AsideContainer from "@repo/ui/asideContainer";
import MainContainer from "@repo/ui/mainContainer";

const Mypage = () => {
  // TODO:: 방문자 수 증가 구현
  const [visiting, setVisiting] = useState<number>(122);
  const [totalVisiting, setTotalVisiting] = useState<number>(12240);

  return (
    <div {...stylex.props(styles.layout)}>
      <h2 {...stylex.props(styles.pageTitle)}>마이페이지</h2>
      <div {...stylex.props(styles.visitingStatus)}>
        <strong>
          Today <span>{visiting}</span>
        </strong>
        <div>⎪</div>
        <strong>
          Total <span>{totalVisiting}</span>
        </strong>
      </div>
      <div {...stylex.props(styles.containerLayout)}>
        <AsideContainer />
        <MainContainer />
      </div>
    </div>
  );
};

export default Mypage;

const styles = stylex.create({
  layout: {
    display: "flex",
    flexDirection: "column",
  },

  containerLayout: {
    display: "flex",
    gap: "50px",
  },

  pageTitle: {
    fontSize: "28px",
    marginTop: "188px",
    marginBottom: "75px",
  },

  visitingStatus: {
    display: "flex",
    fontSize: "18px",
    marginBottom: "15px",
  },
});
