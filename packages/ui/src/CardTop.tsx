interface CardTopProps {
  children?: React.ReactNode;
  className?: React.ReactNode;
}

const CardTop = ({ children, className }: CardTopProps) => {
  return (
    <div className={`${className} bg-gray-100 p-[16px] flex-auto`}>
      {children}
    </div>
  );
};

export default CardTop;
