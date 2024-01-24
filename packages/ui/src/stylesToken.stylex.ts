import { stylex } from "@stylexjs/stylex";
import type { StyleXStyles } from "@stylexjs/stylex";

export const layoutStyle = stylex.defineVars({
  wrap: {
    display: "flex",
    width: "670px",
    flexDirection: "column",
    alignItems: "center",
    margin: "0 auto",
  },
});
