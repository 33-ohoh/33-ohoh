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
    <div className="p-4 rounded-lg">
      {children}
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default TemplateModal;
