"use client";

interface DividerProps {
  width?: string;
  height?: string;
  color?: string;
}
export const Divider = ({
  width = "ui-w-[14px]",
  height = "ui-h-[1px]",
  color = "ui-bg-neutral20",
}: DividerProps) => {
  return <div className={`${width} ${height} ${color}`} />;
};
