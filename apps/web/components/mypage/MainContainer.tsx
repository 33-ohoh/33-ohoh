import LogCard from "./LogCard";

const MainContainer = async () => {
  const favoriteLogChip = [
    "전체",
    "서버/밴엔드 개발자",
    "웹 풀스택 개발자",
    "안드로이드 개발자",
  ];

  const logs = [{}, {}, {}];

  return (
    <main>
      {/* <h3 className=" text-[28px] font-bold mb-extraSmall5">대표로그</h3> */}
      <div className="flex gap-[10px] mb-small1">
        {favoriteLogChip.map((logChip: any, index: any) => (
          <button
            key={index}
            type="button"
            className={`border border-solid rounded-radius100 py-[10px] px-[22px]`}
          >
            {logChip}
          </button>
        ))}
      </div>
      <ul className="flex flex-wrap gap-[50px] w-[694px] h-[1006px]">
        {logs.map((log: any) => {
          return <LogCard key={log.id} log={log} />;
        })}
      </ul>
    </main>
  );
};

export default MainContainer;
