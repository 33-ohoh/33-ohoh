interface ModalProps {
  children: React.ReactNode;
  className?: string;
}

const Modal = ({ children, className }: ModalProps) => {
  return (
    <form
      className={`ui-flex-col ui-items-center ui-text-center ui-w-[442px] ui-h-[222px] ui-justify-between ui-rounded-2xl ui-overflow-hidden ui-shadow-lg ui-fixed ui-top-[50%] ui-left-[50%] translate-x-[-50%] translate-y[-50%] ui-bg-white ${className}`}
    >
      {children}
    </form>
  );
};

export default Modal;
