'use client'
import React, { useState } from 'react';
import { Button, Input, Select } from '@nextui-org/react';
import RichTextEditor from '@/components/widgets/Editor/editor';

const PostCreation = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission, e.g., sending data to the server to create the post
    console.log('Title:', title);
    console.log('Content:', content);
    console.log('Category:', category);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Create a New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
          size="small" // Make the input smaller
        />
        <RichTextEditor value={content} onChange={(content) => setContent(content)} />
        <Select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={['Category 1', 'Category 2', 'Category 3']}
          required
          fullWidth
          size="small" // Make the select smaller
        />
        <Button
          type="submit"
          auto
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4" // Smaller button
          size="small" // Make the button smaller
        >
          Create Post
        </Button>
      </form>
    </div>
  );
};

export default PostCreation;