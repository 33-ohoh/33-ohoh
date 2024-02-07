"use client";

import { NavDown } from "@repo/ui/index";
import QuillEditor from "@repo/ui/quillEditor";
import Image from "next/image";
import { useEffect, useState, ChangeEvent } from "react";
import DraftModal from "../../components/log/DraftModal";
import TemplateModal from "../../components/log/templateModal";
import PocketBase from "pocketbase";

const pb = new PocketBase("http://13.209.16.46:8090");

const Page = () => {
  const [isTemplateModalOpen, setTemplateModalOpen] = useState(false);
  const [isDraftModalOpen, setDraftModalOpen] = useState(false);
  const [showAllTags, setShowAllTags] = useState<boolean>(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [thumbnail, setThumbnail] = useState("");
  const [publishTime, setPublishTime] = useState("now");
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  // 제목과 내용 입력 핸들러
  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  // QuillEditor에서 사용될 내용 변경 핸들러
  const handleContentChange = (newContent: string) => {
    setContent(newContent);
  };

  // 게시물 등록 함수
  const handleSubmit = async () => {
    try {
      const newRecord = await pb.collection("logs").create({
        collectionName: "logs",
        created: publishTime,
        title,
        content,
        thumbnail,
        isPublic: true,
        isQuestion: false,
        isBookmark: false,
        hitCount: 722,
        likeCount: 722,
        commentCount: 722,
        tags: selectedTags,
        user: "y78rq48jvf5muh9",
        series: "2o39vccfkf1jcyj",
      });

      // 게시물 등록 성공 후 처리, 예: 사용자에게 성공 메시지 표시, 페이지 리디렉션 등
      console.log("Post created successfully:", newRecord);
    } catch (error) {
      // 게시물 등록 실패 처리, 예: 사용자에게 오류 메시지 표시
      console.error("Error creating post:", error);
    }
  };

  // 템플릿 모달 토글
  const toggleTemplateModal = () => {
    setTemplateModalOpen(!isTemplateModalOpen);
    if (isDraftModalOpen) setDraftModalOpen(false);
  };

  // 임시저장 모달 토글
  const toggleDraftModal = () => {
    setDraftModalOpen(!isDraftModalOpen);
    if (isTemplateModalOpen) setTemplateModalOpen(false);
  };

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

  // 예약 시간 입력 필드 활성화/비활성화를 위한 useEffect
  useEffect(() => {
    const scheduleDateInput = document.getElementById(
      "scheduleDate",
    ) as HTMLInputElement;
    const scheduleTimeInput = document.getElementById(
      "scheduleTime",
    ) as HTMLInputElement;
    const disabled = publishTime !== "schedule";
    if (scheduleDateInput && scheduleTimeInput) {
      scheduleDateInput.disabled = disabled;
      scheduleTimeInput.disabled = disabled;
    }
  }, [publishTime]); // publishTime이 변경될 때마다 실행

  return (
    <section className="mx-auto w-[1185px]">
      <div className="flex justify-between items-center mt-regular1 mb-small1 relative">
        <h1 className="display3 text-neutral80">게시글 작성</h1>
        <div className="flex items-center gap-[23px]">
          <button
            onClick={toggleTemplateModal}
            className="bg-primary50 p-[9px] w-[138px] h-[40px] rounded-radius5 text-white subhead1"
          >
            템플릿 추가
          </button>

          <button
            onClick={toggleDraftModal}
            className="bg-neutral40 p-[9px] w-[138px] h-[40px] rounded-radius5 text-white subhead1"
          >
            임시저장 | 50
          </button>
        </div>
        <TemplateModal
          isOpen={isTemplateModalOpen}
          onClose={toggleTemplateModal}
        ></TemplateModal>
        <DraftModal
          isOpen={isDraftModalOpen}
          onClose={toggleDraftModal}
        ></DraftModal>
      </div>
      <div>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="제목"
          className="w-full border-b mb-extraSmall1 display2 focus:outline-none p-[10px]"
          value={title}
          onChange={handleTitleChange}
        />
        <QuillEditor value={content} onChange={handleContentChange} />
      </div>
      <div className="flex flex-col gap-[15px] mt-small1">
        <div>
          <div className="flex">
            <span className="body1M">태그</span>
            <button
              onClick={toggleTags}
              className="ml-extraSmall4 body4M text-neutral30 flex items-center	gap-[5px]"
            >
              {showAllTags ? "간략히" : "더보기"}
              <NavDown width="8.33px" height="13.33px" stroke="#B3B3B3" />
            </button>
          </div>
          <ul className="flex flex-wrap mt-extraSmall3 ">
            {(showAllTags ? tags : selectedTags).map((tag, index) => (
              <li key={index} className="mr-extraSmall4 mb-extraSmall4">
                <button
                  className={`px-[20px] py-[8px] rounded-full body4M border ${selectedTags.includes(tag) ? "border-primary90 text-primary90" : "border-neutral50 text-neutral50"}`}
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
              className="bg-neutral80 text-white px-[20px] py-[10px] rounded-radius5 subhead2"
              onClick={handleImageUpload}
            >
              직접 업로드 하기
            </button>
          </div>
          <div className="grid grid-cols-3 border border-solid border-neutral10">
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
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center">
          <span className="body1M w-[132px]">시리즈 설정</span>
          <div className="border border-solid border-neutral30 rounded-radius5 px-[15px]">
            <select
              name="series"
              id="series"
              className="w-[440px] h-[48px] body4M text-neutral30 focus:outline-none"
            >
              <option>시리즈를 선택하세요.</option>
            </select>
          </div>
        </div>
        <div className="flex items-center">
          <span className="body1M w-[132px]">공개범위</span>
          <div className="flex gap-[15px]">
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-[10px] rounded-full cursor-pointer"
                htmlFor="publicAccess"
              >
                <input
                  type="checkbox"
                  className="peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-neutral10 checked:border-primary90"
                  id="publicAccess"
                />
                <span className="absolute text-primary90 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                      fill="#196AFF"
                    />
                    <path
                      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                      fill="#196AFF"
                    />
                  </svg>
                </span>
              </label>
              <label htmlFor="publicAccess" className="body3M">
                전체 공개
              </label>
            </div>

            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-[10px] rounded-full cursor-pointer"
                htmlFor="followersAccess"
              >
                <input
                  type="checkbox"
                  className="peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-neutral10 checked:border-primary90"
                  id="followersAccess"
                />
                <span className="absolute text-primary90 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                      fill="#196AFF"
                    />
                    <path
                      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                      fill="#196AFF"
                    />
                  </svg>
                </span>
              </label>
              <label htmlFor="followersAccess" className="body3M">
                팔로우 공개
              </label>
            </div>

            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-[10px] rounded-full cursor-pointer"
                htmlFor="privateAccess"
              >
                <input
                  type="checkbox"
                  className="peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-neutral10 checked:border-primary90"
                  id="privateAccess"
                />
                <span className="absolute text-primary90 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                      fill="#196AFF"
                    />
                    <path
                      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                      fill="#196AFF"
                    />
                  </svg>
                </span>
              </label>
              <label htmlFor="privateAccess" className="body3M">
                나만 보기
              </label>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <span className="body1M w-[132px]">발행설정</span>
          <div className="flex gap-[15px]">
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-[10px] rounded-full cursor-pointer"
                htmlFor="commentsAllowed"
              >
                <input
                  type="checkbox"
                  className="peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-neutral10 checked:border-primary90"
                  id="commentsAllowed"
                />
                <span className="absolute text-primary90 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                      fill="#196AFF"
                    />
                    <path
                      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                      fill="#196AFF"
                    />
                  </svg>
                </span>
              </label>
              <label htmlFor="commentsAllowed" className="body3M">
                댓글 허용
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-[10px] rounded-full cursor-pointer"
                htmlFor="externalSharingAllowed"
              >
                <input
                  type="checkbox"
                  className="peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-neutral10 checked:border-primary90"
                  id="externalSharingAllowed"
                />
                <span className="absolute text-primary90 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                      fill="#196AFF"
                    />
                    <path
                      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                      fill="#196AFF"
                    />
                  </svg>
                </span>
              </label>
              <label htmlFor="externalSharingAllowed" className="body3M">
                외부 공유 허용
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-[10px] rounded-full cursor-pointer"
                htmlFor="copySaveAllowed"
              >
                <input
                  type="checkbox"
                  className="peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-neutral10 checked:border-primary90"
                  id="copySaveAllowed"
                />
                <span className="absolute text-primary90 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                      fill="#196AFF"
                    />
                    <path
                      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                      fill="#196AFF"
                    />
                  </svg>
                </span>
              </label>
              <label htmlFor="copySaveAllowed" className="body3M">
                복사, 저장 허용
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-[10px] rounded-full cursor-pointer"
                htmlFor="autoAttribution"
              >
                <input
                  type="checkbox"
                  className="peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-neutral10 checked:border-primary90"
                  id="autoAttribution"
                />
                <span className="absolute text-primary90 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                      fill="#196AFF"
                    />
                    <path
                      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                      fill="#196AFF"
                    />
                  </svg>
                </span>
              </label>
              <label htmlFor="autoAttribution" className="body3M">
                자동 출처 사용
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-[10px] rounded-full cursor-pointer"
                htmlFor="blogCafeShareAllowed"
              >
                <input
                  type="checkbox"
                  className="peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-neutral10 checked:border-primary90"
                  id="blogCafeShareAllowed"
                />
                <span className="absolute text-primary90 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                      fill="#196AFF"
                    />
                    <path
                      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                      fill="#196AFF"
                    />
                  </svg>
                </span>
              </label>
              <label htmlFor="blogCafeShareAllowed" className="body3M">
                블로그,카페 공유허용
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-[10px] rounded-full cursor-pointer"
                htmlFor="cclUsage"
              >
                <input
                  type="checkbox"
                  className="peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-neutral10 checked:border-primary90"
                  id="cclUsage"
                />
                <span className="absolute text-primary90 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                      fill="#196AFF"
                    />
                    <path
                      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                      fill="#196AFF"
                    />
                  </svg>
                </span>
              </label>
              <label htmlFor="cclUsage" className="body3M">
                CCL 사용
              </label>
            </div>
          </div>
        </div>

        {/* 발행시간 - 현재 또는 예약 선택 */}
        <div className="flex items-center">
          <span className="body1M w-[132px]">발행시간</span>
          <div className="flex gap-[15px] items-center">
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-[10px] rounded-full cursor-pointer"
                htmlFor="publishNow"
              >
                <input
                  type="radio"
                  className="peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-neutral10 checked:border-primary90"
                  id="publishNow"
                  name="publishTime"
                  value="now"
                  defaultChecked
                  onChange={() => setPublishTime("now")}
                />
                <span className="absolute text-primary90 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                      fill="#196AFF"
                    />
                    <path
                      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                      fill="#196AFF"
                    />
                  </svg>
                </span>
              </label>
              <label htmlFor="publishNow" className="body3M">
                현재
              </label>
            </div>
            <div className="inline-flex items-center">
              <label
                className="relative flex items-center p-[10px] rounded-full cursor-pointer"
                htmlFor="schedulePublish"
              >
                <input
                  type="radio"
                  className="peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-neutral10 checked:border-primary90"
                  id="schedulePublish"
                  name="publishTime"
                  value="schedule"
                  onChange={() => setPublishTime("schedule")}
                />
                <span className="absolute text-primary90 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                      fill="#196AFF"
                    />
                    <path
                      d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                      fill="#196AFF"
                    />
                  </svg>
                </span>
              </label>
              <label htmlFor="schedulePublish" className="body3M">
                예약
              </label>
              <input type="date" name="" id="" className="ml-extraSmall3" />
              <input type="time" name="" id="" className="ml-extraSmall3" />
            </div>
          </div>
        </div>
        <div className="ml-[132px]">
          <div className="inline-flex items-center">
            <label
              className="relative flex items-center p-[10px] rounded-full cursor-pointer"
              htmlFor="setDefault"
            >
              <input
                type="checkbox"
                className="peer relative h-[20px] w-[20px] cursor-pointer appearance-none rounded-full border-2 border-neutral10 checked:border-primary90"
                id="setDefault"
              />
              <span className="absolute text-primary90 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.58 18 2 14.42 2 10C2 5.58 5.58 2 10 2C14.42 2 18 5.58 18 10C18 14.42 14.42 18 10 18Z"
                    fill="#196AFF"
                  />
                  <path
                    d="M10 15C12.7614 15 15 12.7614 15 10C15 7.23858 12.7614 5 10 5C7.23858 5 5 7.23858 5 10C5 12.7614 7.23858 15 10 15Z"
                    fill="#196AFF"
                  />
                </svg>
              </span>
            </label>
            <label htmlFor="setDefault" className="body3M">
              이 설정을 기본값으로 유지
            </label>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center gap-[18px] mt-regular1 mb-extraLarge">
        <button className="w-[210px] h-[46px] border-2 border-primary90 rounded-radius5 text-primary90 subhead1">
          취소
        </button>
        <button
          className="w-[210px] h-[46px] bg-primary90 text-white rounded-radius5 subhead1"
          onClick={handleSubmit}
        >
          등록
        </button>
      </div>
    </section>
  );
};

export default Page;
