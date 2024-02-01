import React from "react";

const MypageLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className="w-[1120px] mx-auto">{children}</div>;
};

export default MypageLayout;
