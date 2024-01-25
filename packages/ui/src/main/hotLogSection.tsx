import React from "react";
import HotLogList from "./hotLogList";
import stylex from "@stylexjs/stylex";
import { colors, titleStyle, margins } from "../designToken.stylex";

const styles = stylex.create({
  background: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    padding: "4.63rem 0rem 4.63rem 0rem",
    backgroundColor: colors.primary10,
  },
  section: {
    width: "66.6rem",
    paddingLeft: "1.25rem",
  },
  blue: {
    color: colors.primary100,
  },
  margin: {
    marginBottom: margins.extraSmall3,
  },
});

const HotLogSection = () => {
  return (
    <div {...stylex.props(styles.background)}>
      <div {...stylex.props(styles.section)}>
        <div {...stylex.props(styles.margin)}>
          <span {...stylex.props(titleStyle.display4)}>오늘의</span>
          <span {...stylex.props(titleStyle.display4, styles.blue)}> HOT</span>
          <span {...stylex.props(titleStyle.display4)}>로그</span>
        </div>
        <HotLogList />
      </div>
    </div>
  );
};

export default HotLogSection;
