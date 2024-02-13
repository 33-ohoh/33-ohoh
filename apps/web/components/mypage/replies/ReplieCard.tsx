interface Reply {
  id: number;
  content: string;
  expand: any;
}

interface ReplieCardProps {
  repliesData: Reply[];
}
const ReplieCard = ({ repliesData }: ReplieCardProps) => {
  if (repliesData.length === 0) return null;

  return (
    <>
      {repliesData?.map((data) => (
        <div
          key={data.id}
          className="border border-primary90 flex flex-col w-full p-[25px] rounded-radius15"
        >
          <div className="border-b border-neutral20 pb-[15px] mb-extraSmall3">
            <div className="flex gap-[10px]">
              <div className="flex flex-col">
                <strong className="text-[24px]">
                  {data.expand?.user?.name}
                </strong>
                <span className="text-[14px]">{data.expand?.user?.myJob}</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-extraSmall5 text-[24px] font-bold">
              {data.expand.log.title}
            </h3>
            <p className="text-overflow text-neutral80">{data.content}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ReplieCard;
