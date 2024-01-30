"use client";

import QuillEditor from "@repo/ui/quillEditor";
import { useState } from "react";
import TemplateModal from "../../components/log/templateModal";
import Image from "next/image";

const Page = () => {
  const [isModalOpen, setModalOpen] = useState<boolean>(false);
  const [showAllTags, setShowAllTags] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  //   const [images, setImages] = useState([]);
  const [thumbnail, setThumbnail] = useState("");

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const toggleTags = () => setShowAllTags(!showAllTags);

  const tags = [
    "전체",
    "서버/백엔드 개발자",
    "웹 풀스택 개발자",
    "안드로이드 개발자",
    "IOS 개발자",
    "크로스플랫폼 앱개발자",
    "게임 클라이언트 개발자",
    "DBA",
    "빅데이터 엔지니어",
    "인공지능/머신러닝",
    "프론트엔드 개발자",
    "개발 PM",
    "게임 서버 개발자",
    "블록체인",
    "QA 엔지니어",
    "웹퍼블리셔",
  ];

  const selectTag = (tag: string): void => {
    setSelectedTags((prevSelectedTags) => {
      if (prevSelectedTags.includes(tag)) {
        // 태그가 이미 선택된 경우 제거
        return prevSelectedTags.filter((t) => t !== tag);
      } else {
        // 태그가 선택되지 않은 경우 추가
        return [...prevSelectedTags, tag];
      }
    });
  };

  const recommendedThumbnails = [
    "/recommendedThumbnail.png",
    "/recommendedThumbnail.png",
    "/recommendedThumbnail.png",
  ];

  const handleImageUpload = () => {};

  // 썸네일 선택 핸들러
  const selectThumbnail = (image: string) => {
    setThumbnail(image);
  };

  return (
    <section className="mx-auto w-[1185px]">
      <div className="flex justify-between items-center mt-regular1 mb-small1 relative">
        <h1 className="display3 text-neutral80">게시글 작성</h1>
        <div className="flex items-center gap-[23px]">
          <button
            onClick={openModal}
            className="bg-primary50 p-[9px] w-[138px] h-[40px] rounded-radius5 text-white subhead1"
          >
            템플릿 추가
          </button>

          <button className="bg-neutral40 p-[9px] w-[138px] h-[40px] rounded-radius5 text-white subhead1">
            임시저장 | 50
          </button>
        </div>
        <TemplateModal isOpen={isModalOpen} onClose={closeModal}>
          <h2 className="text-lg font-bold mb-4">템플릿 선택</h2>
        </TemplateModal>
      </div>
      <div>
        <QuillEditor />
      </div>
      <div className="flex flex-col gap-[15px] mt-small1">
        <div>
          <div>
            <span className="body1M">태그</span>
            <button onClick={toggleTags}>
              {showAllTags ? "간략히" : "더보기"}
            </button>
          </div>
          <ul className="flex flex-wrap">
            {(showAllTags ? tags : selectedTags).map((tag, index) => (
              <li key={index} className="mr-2 mb-2">
                <button
                  className={`px-3 py-1 border ${selectedTags.includes(tag) ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}
                  onClick={() => selectTag(tag)}
                >
                  {tag}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg font-bold">썸네일 추천</h2>
            <button
              className="px-4 py-2 rounded-md"
              onClick={handleImageUpload}
            >
              직접 업로드 하기
            </button>
          </div>
          <div className="grid grid-cols-3">
            {recommendedThumbnails.map((image, index) => (
              <div
                key={index}
                className={`border-2 p-4 rounded-lg ${thumbnail === image ? "border-blue-500" : "border-transparent"}`}
                onClick={() => selectThumbnail(image)}
              >
                <Image
                  src={image}
                  alt={`Thumbnail ${index}`}
                  width={300}
                  height={300}
                  layout="responsive"
                />
              </div>
            ))}
          </div>
        </div>
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
