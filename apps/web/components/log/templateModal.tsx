import { useState } from "react";
import { X, Plus, Bin } from "@repo/ui/index";

interface TemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TemplateModal: React.FC<TemplateModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  const [activeTab, setActiveTab] = useState("my"); // 탭 상태

  return (
    <div
      className={`z-10 absolute right-[160px] top-[40px] flex justify-center items-center`}
    >
      <div className="bg-white w-[390px] rounded-b-radius15 shadow-lg overflow-hidden">
        <div className="flex justify-between items-center bg-primary90 rounded-tl-radius15 px-[25px] py-[20px]">
          <span className="display5B text-white">스팩로그의 템플릿</span>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-500 cursor-pointer"
          >
            <X fill="white" />
          </button>
        </div>
        <div>
          <nav className="flex flex-row w-full justify-around">
            <button
              className={`w-full p-[10px] body2M ${activeTab === "recommended" ? "text-blue-700 border-b-2 border-primary90" : "text-gray-500"}`}
              onClick={() => setActiveTab("recommended")}
            >
              추천 템플릿
            </button>
            <button
              className={`w-full p-[10px] body2M ${activeTab === "partial" ? "text-blue-700 border-b-2  border-primary90" : "text-gray-500"}`}
              onClick={() => setActiveTab("partial")}
            >
              부분 템플릿
            </button>
            <button
              className={`w-full p-[10px] body2M ${activeTab === "my" ? "text-blue-700 border-b-2 border-primary90" : "text-gray-500"}`}
              onClick={() => setActiveTab("my")}
            >
              내 템플릿
            </button>
          </nav>
          <div>
            {activeTab === "recommended" && <div>추천 템플릿 내용</div>}
            {activeTab === "partial" && <div>부분 템플릿 내용</div>}
            {activeTab === "my" && (
              <div>
                <div className="flex justify-center items-center gap-[30px] border-b py-[15px]">
                  <div className="w-[40px] h-[40px] rounded-full bg-primary10 border border-dashed border-primary90 flex justify-center items-center">
                    <Plus stroke="#196AFF" />
                  </div>
                  <div className="flex flex-col">
                    <span className="headline2">템플릿 등록하기</span>
                    <span className="body4R text-neutral50">
                      나만의 템플릿을 등록해보세요
                    </span>
                  </div>
                </div>
                <ul className="h-[520px] overflow-scroll overflow-x-hidden">
                  <li className="group px-[25px] pt-[10px] hover:bg-primary10 relative">
                    <div className="flex gap-[20px] justify-center border-b pb-[10px]">
                      <div className="w-[80px] h-[80px] rounded-radius5 bg-neutral10"></div>
                      <div className="flex flex-col justify-center">
                        <span className="headline2">지식 정보</span>
                        <span className="body4R text-neutral50">
                          8년차 개발자가 신입이 된 이유
                        </span>
                        <button className="opacity-0 absolute right-5 top-1/2 transform -translate-y-1/2 transition-opacity group-hover:opacity-100">
                          <Bin fill="#196AFF" />
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TemplateModal;
