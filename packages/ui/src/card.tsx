interface CardProps {
  children?: React.ReactNode;
  className?: React.ReactNode;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div
      className={`${className} border rounded-md flex flex-col justify-between overflow-hidden box-border shadow-sm cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default Card;
