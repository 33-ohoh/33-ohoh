// "use client";

// import { useRef, useState } from "react";
// import PocketBase from "pocketbase";

// const pb = new PocketBase("http://13.209.16.46:8090");

// export const ImageUpload = () => {
//   //   const [selectedFile, setSelectedFile] = useState(null);
//   //   const [previewFile, setPreviewFile] = useState<string>("");
//   //   const imgRef = useRef<HTMLInputElement>(null);

//   //   // 이미지 선택하기
//   //   const handleChangeFile = (event: any) => {
//   //     const file = event.target.files[0];
//   //     setSelectedFile(file);

//   //     // 이미지 미리보기
//   //     if (file) {
//   //       const reader = new FileReader();
//   //       reader.onloadend = () => {
//   //         setPreviewFile(reader.result);
//   //       };
//   //       reader.readAsDataURL(file);
//   //     } else {
//   //       setPreviewFile("");
//   //     }
//   //   };

//   //   // 이미지 업로드하기
//   //   const handleUploadFile = async () => {
//   //     if (!selectedFile) {
//   //       console.error("업로드 할 파일을 선택해주세요.");
//   //       return;
//   //     }

//   //     try {
//   //       const formData = new FormData();
//   //       formData.append("field", selectedFile);

//   //       const createdRecord = await pb
//   //         .collection("profileImage")
//   //         .create(formData);

//   //       console.log("생성된 레코드:", createdRecord);
//   //     } catch (error) {
//   //       console.error("이미지 업로드 오류:", error);
//   //     }
//   //   };

//   //   // 이미지 제거하기
//   //   const handleDeleteFile = () => {
//   //     setPreviewFile("");
//   //     setSelectedFile(null);
//   //   };

//   return (
//     <div>
//       {/* <div {...stylex.props(styles.profileImage)}>
//         <div>
//           <img
//             src={previewFile || ""}
//             alt=""
//             {...stylex.props(styles.imgStyle)}
//           />
//         </div>
//         <input
//           id="fileInput"
//           type="file"
//           accept="image/*"
//           ref={imgRef}
//           onChange={handleChangeFile}
//           {...stylex.props(styles.profileInput)}
//         />
//       </div>

//       <p>20MB 이내의 이미지 파일을 업로드 해주세요.</p>
//       <div {...stylex.props(styles.buttons)}>
//         <button onClick={handleUploadFile}>업로드 하기</button>
//         <button type="button" onClick={handleDeleteFile}>
//           프로필 사진 삭제
//         </button>
//       </div> */}
//       ImageUpload
//     </div>
//   );
// };
