interface CardBottomProps {
  children?: React.ReactNode;
  className?: React.ReactNode;
}

const CardBottom = ({ children, className }: CardBottomProps) => {
  return (
    <div className={`${className} bg-white h-[108px] px-[20px] py-[15px]`}>
      {children}
    </div>
  );
};

export default CardBottom;
