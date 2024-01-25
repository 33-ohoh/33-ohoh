import * as stylex from "@stylexjs/stylex";

export const titleStyle = stylex.create({
  display1: {
    fontSize: "45px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "52px",
    color: "black",
  },
  display2: {
    fontSize: "36px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "44px",
    color: "black",
  },
  display3: {
    fontSize: "32px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "40px",
    color: "black",
  },
  display4: {
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "36px",
    color: "black",
  },
  display5B: {
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "32px",
    color: "black",
  },
  display5R: {
    fontSize: "24px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "32px",
    color: "black",
  },
  headline1: {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "28px",
    color: "black",
  },
  headline2: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "26px",
    color: "black",
  },
  subhead1: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "22px",
    color: "black",
  },
  subhead2: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "700",
    lineHeight: "20px",
    color: "black",
  },
});

export const bodyStyle = stylex.create({
  body1M: {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "28px",
    color: "black",
  },
  body1r: {
    fontSize: "20px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "28px",
    color: "black",
  },
  body2M: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "26px",
    color: "black",
  },
  body2R: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "26px",
    color: "black",
  },
  body3M: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "24px",
    color: "black",
  },
  body3R: {
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "24px",
    color: "black",
  },
  body4M: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "20px",
    color: "black",
  },
  body4R: {
    fontSize: "14px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "20px",
    color: "black",
  },
  body5M: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "16px",
    color: "black",
  },
  body5R: {
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "16px",
    color: "black",
  },
  body6R: {
    fontSize: "10px",
    fontStyle: "normal",
    fontWeight: "400",
    lineHeight: "14px",
    color: "black",
  },
});

export const colors = stylex.defineVars({
  neutral100: "#030303",
  neutral90: "#1A1A1A",
  neutral80: "#333333",
  neutral70: "#4D4D4D",
  neutral60: "#4D4D4D",
  neutral50: "#808080",
  neutral40: "#999999",
  neutral30: "#B3B3B3",
  neutral20: "#CCCCCC",
  neutral10: "#E6E6E6",
  neutral5: "#F3F3F3",
  primary100: "#0059FF",
  primary90: "#196AFF",
  primary80: "#337AFF",
  primary70: "#4C8BFF",
  primary60: "#669BFF",
  primary50: "#7FACFF",
  primary40: "#99BDFF",
  primary30: "#B2CDFF",
  primary20: "#CCDEFF",
  primary10: "#E5EEFF",
  primary5: "#F5F8FF",
  white: "#FFFFFF",
  background100: "#666666",
  background80: "#0000004D",
  background50: "#B5B5B5",
  background5: "#F8F8F9",
  systemWarning: "#FF0000",
  systemSuccess: "#07A320",
  systemText: "#EE5C5C",
  fuschia100: "#EF5DA8",
  fuschia80: "#F178B6",
  fuschia60: "#FCDDEC",
  iris100: "#5D5FEF",
  iris80: "#7879F1",
  iris60: "#A5A6F6",
});

export const margins = stylex.defineVars({
  noMargin: "0",
  extraSmall5: "5px",
  extraSmall4: "10px",
  extraSmall3: "15px",
  extraSmall2: "20px",
  extraSmall1: "25px",
  small4: "30px",
  small3: "35px",
  small2: "45px",
  small1: "50px",
  regular2: "65px",
  regular1: "75px",
  mediun: "100px",
  frame: "128px",
  extraLarge: "150px",
});

export const radius = stylex.defineVars({
  radius5: "5px",
  radius15: "15px",
  radius100: "100px",
});

export const shadows = stylex.defineVars({
  light10: "0px 0.368px 1.103px 0.368px rgba(0, 0, 0, 0.15)",
  light20: "0px 0.735px 2.205px 0.735px rgba(0, 0, 0, 0.15)",
  light30: "box-shadow: 0px 1.47px 2.94px 1.103px rgba(0, 0, 0, 0.15)",
});