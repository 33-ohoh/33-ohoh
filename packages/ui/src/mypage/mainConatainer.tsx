import React from "react";

const MainConatainer = () => {
  const interestLogChip = [
    "전체",
    "서버/밴엔드 개발자",
    "웹 풀스택 개발자",
    "안드로이드 개발자",
  ];

  return (
    <main>
      <h3>관심로그</h3>
      <div>
        {interestLogChip.map((logChip) => (
          <button>{logChip}</button>
        ))}
      </div>
      <ul>
        <li>
          <div>
            <div>
              <img src={""} alt={"개발자가 되고 싶은 이유 썸네일"} />
              <div>
                <strong>{"username"}</strong>
                <span>{"PM, developer"}</span>
              </div>
            </div>
            <button>
              <img src="" alt="관심로그 뱃지" />
            </button>
          </div>
          <div>
            <p>개발자가 되고 싶은 이유는 이건 돈을 많이 벌기 때문...</p>
            <div>
              <div>
                <img src="" alt="조회수" />
                <span>2.1K</span>
                {/* <span>{view}</span> */}
              </div>
              <div>
                <img src="" alt="좋아요 수" />
                <span>680</span>
                {/* <span>{like}</span> */}
              </div>
            </div>
          </div>
        </li>
      </ul>
    </main>
  );
};

export default MainConatainer;
