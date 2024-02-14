const PageHeader = () => {
  // TODO:: 방문자 수 증가 구현
  // const [visiting, setVisiting] = useState<number>(122);
  // const [totalVisiting, setTotalVisiting] = useState<number>(12240);
  const visiting = 112;
  const totalVisiting = 12240;

  return (
    <div>
      <h2 className="text-[28px] font-bold mt-[172px] mb-[75px]">마이페이지</h2>
      <div className="flex mb-extraSmall3">
        <strong>
          Today <span>{visiting}</span>
        </strong>
        <div>⎪</div>
        <strong>
          Total <span>{totalVisiting}</span>
        </strong>
      </div>
    </div>
  );
};

export default PageHeader;
