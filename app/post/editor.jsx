'use client'
import React from 'react';
import { Editor } from '@tinymce/tinymce-react';


const RichTextEditor = ({ value, onChange }) => {
  const handleEditorChange = (content, editor) => {
    onChange(content);
  };

  return (
    <Editor
      apiKey="YOUR_TINYMCE_API_KEY"
      initialValue={value}
      init={{
        height: 500,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount'
        ],
        toolbar:
          'undo redo | formatselect | bold italic underline strikethrough | ' +
          'forecolor backcolor | link image | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'removeformat | emoticons | code | help',
      }}
      onEditorChange={handleEditorChange}
    />
  );
};

export default RichTextEditor;
