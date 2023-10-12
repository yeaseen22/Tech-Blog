// 'use client'
// import React from 'react';
// import { Editor } from '@tinymce/tinymce-react';

// const RichTextEditor = ({ value, onChange }) => {
//   const handleEditorChange = (content, editor) => {
//     onChange(content);
//   };

//   return (
//     <Editor
//       apiKey="YOUR_TINYMCE_API_KEY"
//       initialValue={value}
//       init={{
//         height: 500,
//         menubar: false,
//         plugins: [
//           'advlist autolink lists link image charmap print preview anchor',
//           'searchreplace visualblocks code fullscreen',
//           'insertdatetime media table paste code help wordcount'
//         ],
//         toolbar:
//           'undo redo | formatselect | bold italic underline strikethrough | ' +
//           'forecolor backcolor | link image | alignleft aligncenter ' +
//           'alignright alignjustify | bullist numlist outdent indent | ' +
//           'removeformat | emoticons | code | help',
//       }}
//       onEditorChange={handleEditorChange}
//     />
//   );
// };

// export default RichTextEditor;

"use client";
import React, { useState } from "react";
import { Editor } from "@tinymce/tinymce-react";

const RichTextEditor = ({ value, onChange }) => {
  const [isEditorVisible, setEditorVisible] = useState(true); // Initially visible
  const handleEditorChange = (content, editor) => {
    onChange(content);
  };

  const toggleEditorVisibility = () => {
    setEditorVisible(!isEditorVisible);
  };

  const editorStyles = {
    width: isEditorVisible ? "100%" : "50px", // Adjust the width as needed
    height: "500px", // Keep the desired height
    transition: "width 0.3s", // Add a smooth transition effect
  };

  return (
    <div>
      <button className="w-full" onClick={toggleEditorVisibility}>
        {isEditorVisible ? "Hide Editor" : "Show Editor"}
      </button>
      <div style={editorStyles}>
        {isEditorVisible && (
          <Editor
            apiKey="w62e8k953c5ucjccshzmr129g6qxlfbke074omav3idsm0ne"
            // initialValue={value}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                "advlist autolink lists link image charmap print preview anchor",
                "searchreplace visualblocks code fullscreen",
                "insertdatetime media table paste code help wordcount",
              ],
              toolbar:
                "undo redo | formatselect | bold italic underline strikethrough | " +
                "forecolor backcolor | link image | alignleft aligncenter " +
                "alignright alignjustify | bullist numlist outdent indent | " +
                "removeformat | emoticons | code | help",
              // Add image upload configuration
              images_upload_url: "/your-image-upload-endpoint", // Replace with your image upload API endpoint
              images_upload_handler: function (blobInfo, success, failure) {
                // Implement your image upload logic here and call success() or failure() accordingly
              },
            }}
            onEditorChange={handleEditorChange}
          />
        )}
      </div>
    </div>
  );
};

export default RichTextEditor;
