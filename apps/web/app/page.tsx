"use client";
import * as stylex from "@stylexjs/stylex";
import HotLogSection from "@repo/ui/hotLogSection";

const styles = stylex.create({
  page: {
    maxWidth: "1440px",
  },
});
export default function Page(): JSX.Element {
  return (
    <div {...stylex.props(styles.page)}>
      <HotLogSection />
    </div>
  );
}
