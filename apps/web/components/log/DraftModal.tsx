import { X, Bin } from "@repo/ui/index";
import { useState } from "react";

interface DraftModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DraftModal: React.FC<DraftModalProps> = ({ isOpen, onClose }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  if (!isOpen) return null;

  const toggleEditing = () => {
    if (isEditing) {
      setSelectedItems(new Set());
    }
    setIsEditing(!isEditing);
  };

  const handleSelectItem = (itemId: number) => {
    setSelectedItems((prevSelectedItems) => {
      const newSelectedItems = new Set(prevSelectedItems);
      if (newSelectedItems.has(itemId)) {
        newSelectedItems.delete(itemId);
      } else {
        newSelectedItems.add(itemId);
      }
      return newSelectedItems;
    });
  };

  const handleDeleteSelected = () => {
    console.log("Deleting items: ", Array.from(selectedItems));
    setSelectedItems(new Set());
    setIsEditing(false);
  };

  return (
    <div
      className={`z-10 absolute right-0 top-[40px] flex justify-center items-center`}
    >
      <div className="bg-white w-[390px] rounded-b-radius15 shadow-lg overflow-hidden">
        <div className="flex justify-between items-center bg-primary90 rounded-tl-radius15 px-[25px] py-[20px]">
          <span className="display5B text-white">임시저장 게시물</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 cursor-pointer"
          >
            <X fill="white" />
          </button>
        </div>
        <div>
          <div className="bg-primary50 flex justify-between px-[25px] py-[10px] h-[56px] items-center">
            <span className="text-white body3M">총 50개</span>
            <div className="flex items-center gap-[10px]">
              {isEditing && (
                <button
                  onClick={handleDeleteSelected}
                  className="w-[24px] h-[24px]"
                >
                  <Bin fill="white" />
                </button>
              )}
              <button
                onClick={toggleEditing}
                className={`border rounded-full w-[65px] h-[36px] body4M ${isEditing ? "bg-white text-primary50" : "text-white"}`}
              >
                {isEditing ? "완료" : "편집"}{" "}
              </button>
            </div>
          </div>
          <ul className="h-[552px] overflow-scroll overflow-x-hidden">
            {[...Array(10).keys()].map((itemId) => (
              <li
                key={itemId}
                className={`px-[35px] pt-[15px] cursor-pointer ${selectedItems.has(itemId) ? "bg-primary10" : ""}`}
                onClick={() => isEditing && handleSelectItem(itemId)} // Only allow selection if in editing mode
              >
                <div className="flex justify-between items-center border-b pb-[15px]">
                  <div className="flex flex-col">
                    <span className="headline2">지식 정보</span>
                    <span className="body4R text-neutral50">
                      2024.01.13 13:34
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DraftModal;
