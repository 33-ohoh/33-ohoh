"use client";

import QuillEditor from "@repo/ui/quillEditor";
import { useState } from "react";
import TemplateModal from "../../components/log/templateModal";

const Page = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <section className="mx-auto w-[1185px]">
      <div className="flex justify-between items-center mt-regular1 mb-small1">
        <h1 className="display3 text-neutral80">게시글 작성</h1>
        <div className="flex items-center">
          <p className="mr-extraSmall2 text-neutral40 subhead1">
            자동 저장 21:10:27
          </p>
          <button className="bg-neutral40 p-[9px] w-[138px] h-[40px] rounded-radius5 text-white subhead1">
            임시저장 | 50
          </button>
        </div>
      </div>
      <div className="h-[800px]">
        <button onClick={openModal}>템플릿 추가</button>
        <QuillEditor />
        <TemplateModal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-lg font-bold mb-4">템플릿 선택</h2>
        </TemplateModal>
      </div>
      <div className="flex flex-col gap-[15px] mt-small1">
        <div className="flex items-center">
          <span className="body1M w-[132px]">시리즈 설정</span>
          <select name="series" id="series">
            <option>시리즈를 선택하세요.</option>
          </select>
        </div>
        <div className="flex items-center">
          <span className="body1M w-[132px]">공개범위</span>
          <div className="flex gap-[15px]">
            <div>
              <input type="checkbox" id="commentAccept" name="commentAccept" />
              <label htmlFor="commentAccept">전체 공개</label>
            </div>
            <div>
              <input type="checkbox" id="commentAccept" name="commentAccept" />
              <label htmlFor="commentAccept">팔로우 공개</label>
            </div>
            <div>
              <input type="checkbox" id="commentAccept" name="commentAccept" />
              <label htmlFor="commentAccept">나만 보기</label>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="body1M w-[132px]">발행설정</span>
          <div className="flex gap-[15px]">
            <div>
              <input type="checkbox" id="commentAccept" name="commentAccept" />
              <label htmlFor="commentAccept">댓글허용</label>
            </div>
            <div>
              <input type="checkbox" id="commentAccept" name="commentAccept" />
              <label htmlFor="commentAccept">외부 공유 허용</label>
            </div>
            <div>
              <input type="checkbox" id="commentAccept" name="commentAccept" />
              <label htmlFor="commentAccept">복사, 저장 허용</label>
            </div>
            <div>
              <input type="checkbox" id="commentAccept" name="commentAccept" />
              <label htmlFor="commentAccept">자동 출처 사용</label>
            </div>
            <div>
              <input type="checkbox" id="commentAccept" name="commentAccept" />
              <label htmlFor="commentAccept">블로그, 카페 공유 허용</label>
            </div>
            <div>
              <input type="checkbox" id="commentAccept" name="commentAccept" />
              <label htmlFor="commentAccept">CCL 사용</label>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="body1M w-[132px]">발행시간</span>
          <div className="flex gap-[15px] items-center">
            <div>
              <input type="checkbox" id="commentAccept" name="commentAccept" />
              <label htmlFor="commentAccept">현재</label>
            </div>
            <div>
              <input type="checkbox" id="commentAccept" name="commentAccept" />
              <label htmlFor="commentAccept">예약</label>
              <input type="date" name="" id="" className="ml-extraSmall3" />
              <input type="time" name="" id="" className="ml-extraSmall3" />
            </div>
          </div>
        </div>
        <div className="ml-[132px]">
          <input type="checkbox" id="commentAccept" name="commentAccept" />
          <label htmlFor="commentAccept">이 설정을 기본값으로 유지</label>
        </div>
      </div>
      <div className="w-full flex justify-center gap-[18px]">
        <button>취소</button>
        <button>등록</button>
      </div>
    </section>
  );
};

export default Page;
