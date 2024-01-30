import { ReactNode } from "react";

interface TemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const TemplateModal: React.FC<TemplateModalProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  return (
    <div className="p-4 rounded-lg absolute right-0 top-[42px] border border-solid border-cyan-400 w-[200px] h-[300px] bg-slate-400">
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TemplateModal;
