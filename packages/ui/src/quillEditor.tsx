"use client";

import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./quillEditor.css";

const QuillEditor = () => {
  const [text, setText] = useState("");
  const handleChange = (
    content: string,
    delta: any,
    source: string,
    editor: any,
  ): void => {
    setText(editor.getHTML()); // rich text
  };

  return (
    <ReactQuill
      value={text}
      onChange={handleChange}
      modules={QuillEditor.modules}
      formats={QuillEditor.formats}
      bounds={".app"}
      placeholder="내용을 입력하세요."
    />
  );
};

QuillEditor.modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video", "code-block"],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ["clean"],
  ],
  clipboard: {
    // Toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};

QuillEditor.formats = [
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
  "indent",
  "link",
  "image",
  "video",
  "code-block",
  "align",
  "color",
  "background",
];

export default QuillEditor;
