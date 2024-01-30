interface InfoItemProps {
  title: string;
  children?: any;
}

const InfoItem = ({ title, children }: InfoItemProps) => {
  return (
    <div className=" border-b border-solid border-neutral20 pb-[25px] mb-small4 ">
      <h4 className="font-bold text-[16px] mb-extraSmall4">{title}</h4>
      <div className="leading-[18px]">{children}</div>
    </div>
  );
};

export default InfoItem;
