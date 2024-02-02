"use client";

import { useState } from "react";

const Visiting = () => {
  // TODO:: 방문자 수 증가 구현
  const [visiting, setVisiting] = useState<number>(122);
  const [totalVisiting, setTotalVisiting] = useState<number>(12240);

  return (
    <div className="flex mb-extraSmall3">
      <strong>
        Today <span>{visiting}</span>
      </strong>
      <div>⎪</div>
      <strong>
        Total <span>{totalVisiting}</span>
      </strong>
    </div>
  );
};

export default Visiting;
