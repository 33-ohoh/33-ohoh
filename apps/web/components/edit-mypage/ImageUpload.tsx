"use client";

import { useRef, useState } from "react";
import PocketBase from "pocketbase";
import Image from "next/image";

const pb = new PocketBase("http://13.209.16.46:8090");

export const ImageUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewFile, setPreviewFile] = useState<string>("");
  const imgRef = useRef<HTMLInputElement>(null);

  // 이미지 선택하기
  const handleChangeFile = (event: any) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // 이미지 미리보기
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        // setPreviewFile(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewFile("");
    }
  };

  // 이미지 업로드하기
  const handleUploadFile = async () => {
    if (!selectedFile) {
      console.error("업로드 할 파일을 선택해주세요.");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("field", selectedFile);

      const createdRecord = await pb
        .collection("profileImage")
        .create(formData);

      console.log("생성된 레코드:", createdRecord);
    } catch (error) {
      console.error("이미지 업로드 오류:", error);
    }
  };

  // 이미지 제거하기
  const handleDeleteFile = () => {
    setPreviewFile("");
    setSelectedFile(null);
  };

  return (
    <div>
      <div className="flex flex-col items-center mx-auto bg-neutral5 w-[170px] h-[170px] rounded-radius100 text-center overflow-hidden">
        <div className="">
          <Image src={previewFile || ""} alt="" />
        </div>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          ref={imgRef}
          onChange={handleChangeFile}
          className="opacity-0 w-full h-full cursor-pointer"
        />
      </div>

      <p className="my-[20px] text-[16px] text-neutral50 text-center">
        20MB 이내의 이미지 파일을 업로드 해주세요.
      </p>

      <div className="text-center text-white flex gap-[15px] font-semibold mb-[55px]">
        <div className="bg-neutral80 rounded-radius5">
          <button
            type="button"
            onClick={handleUploadFile}
            className="py-[15px] w-[210px]"
          >
            업로드 하기
          </button>
        </div>

        <div className="bg-neutral80 rounded-radius5">
          <button
            type="button"
            onClick={handleDeleteFile}
            className="py-[15px] w-[210px]"
          >
            프로필 사진 삭제
          </button>
        </div>
      </div>
    </div>
  );
};
