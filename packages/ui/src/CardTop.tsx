interface CardTopProps {
  children?: React.ReactNode;
  className?: React.ReactNode;
  style?: {};
}

const CardTop = ({ children, className, style }: CardTopProps) => {
  return (
    <div
      className={`${className} bg-gray-100 flex-auto ui-overflow-hidden p-[16px]`}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardTop;
