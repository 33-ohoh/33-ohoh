// 스타일 토큰 - 폰트 크기, 테마 색상, 보더 라운드

import * as stylex from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

type Props = {
  tokens: StyleXStyles<{ color?: string; background?: string }>;
};

export const tokens = stylex.defineVars({
  color: "blue",
  background: "white",
});

const DARK = "@media (prefers-color-scheme: dark)";

export const colors = stylex.defineVars({
  primaryText: { default: "black", [DARK]: "white" },
  secondaryText: { default: "#333", [DARK]: "#ccc" },
  accent: { default: "blue", [DARK]: "lightblue" },
  background: { default: "white", [DARK]: "black" },
  lineColor: { default: "gray", [DARK]: "lightgray" },
});

export const spacing = stylex.defineVars({
  none: "0px",
  xsmall: "4px",
  small: "8px",
  medium: "12px",
  large: "20px",
});

export const textStyle = stylex.create({
  h2: {
    fontSize: "28px",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: "36px",
  },

  p: {
    fontSize: "18px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
  },
});

export const profileStyle = stylex.create({
  rounded: {
    width: "175px",
    height: "175px",
    borderRadius: "50%",
  },
});

export const buttonStyles = stylex.create({
  button: {
    backgroundColor: {
      default: "lightblue",
      ":hover": "blue",
      ":active": "darkblue",
    },
    display: "flex",
    padding: "0 5px",
    borderRadius: "10px",
    justifyContent: "center",
    alignItems: "center",
    background: "#ccc",
    border: "1px solid transparent",
  },
  text: {
    fontSize: "18px",
    fontWeight: "700",
  },
});

// export const inputStyles = stylex.create({
// 	input: {
// 		padding: "22px 25px",
// 		fontSize: "20px",
// 	},
// 	label: {
// 		fontSize: "24px",
// 		fontWeight: 400,
// 		lineHeight: "32px",
// 	},
// });
