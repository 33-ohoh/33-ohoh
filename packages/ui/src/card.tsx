interface CardProps {
  children?: React.ReactNode;
  className?: React.ReactNode;
  onClick?: () => void;
  style?: {};
}

const Card = ({ children, className, onClick, style }: CardProps) => {
  return (
    <div
      className={`${className} border rounded-md flex flex-col justify-between overflow-hidden box-border shadow-sm cursor-pointer`}
      onClick={onClick}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
