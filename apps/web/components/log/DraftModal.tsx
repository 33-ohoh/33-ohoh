import { ReactNode } from "react";
import { IconX } from "@repo/ui/IconComponents";

interface DraftModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const DraftModal: React.FC<DraftModalProps> = ({
  title,
  isOpen,
  onClose,
  children,
}) => {
  if (!isOpen) return null;

  const positionClass =
    title === "스팩로그의 템플릿" ? "right-[160px]" : "right-0";

  return (
    <div
      className={`absolute ${positionClass} top-[40px] flex justify-center items-center`}
    >
      <div className="bg-white w-[400px] rounded-radius15 shadow-lg">
        <div className="flex justify-between items-center bg-primary90 rounded-tl-radius15 px-[25px] py-[20px]">
          <span className="display5B text-white">{title}</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 cursor-pointer"
          >
            <IconX fill="white" />
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default DraftModal;
