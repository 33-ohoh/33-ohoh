"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quillEditor.css";

interface QuillEditorProps {
  value: string;
  onChange: (newContent: string) => void;
}

// Quill 편집기에 사용할 모듈을 정의합니다.
const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};

// Quill 편집기에서 지원하는 포맷을 정의합니다.
const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "clean",
  "code-block",
];

const QuillEditor: React.FC<QuillEditorProps> = ({ value, onChange }) => {
  const handleChange = (
    content: string,
    delta: any,
    source: string,
    editor: any,
  ): void => {
    if (source === "user") {
      onChange(editor.getHTML());
    }
  };

  return (
    <ReactQuill
      value={value}
      onChange={handleChange}
      modules={modules}
      formats={formats}
      bounds={".app"}
      placeholder="내용을 입력하세요."
    />
  );
};

export default QuillEditor;
