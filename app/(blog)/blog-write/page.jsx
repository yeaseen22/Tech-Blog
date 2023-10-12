
"use client";
import React, { useState } from "react";
import { Button, Input, Select } from "@nextui-org/react";
import RichTextEditor from "@/components/widgets/Editor/editor";

const PostCreation = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [avatar, setAvatar] = useState(null); // Updated to null initially

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission, e.g., sending data to the server to create the post
    console.log("Title:", title);
    console.log("Content:", content);
    console.log("Category:", category);
    console.log("Avatar:", avatar); // Log the image data
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setAvatar(e.target.result); // Update the avatar state with the data URL of the selected image
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 bg-white shadow-lg rounded-lg max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-indigo-600">
        Create a New Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          fullWidth
          size="small"
          className="rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />
        <RichTextEditor onChange={(content) => setContent(content)} />
        <Select
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          options={["Category 1", "Category 2", "Category 3"]}
          required
          className="rounded-md focus:ring-indigo-500 focus:border-indigo-500"
        />

        <div>
          <label htmlFor="image" className="block text-gray-700">
            Upload Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 block w-full rounded-md border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
          />
          {avatar && ( // Only display the image preview when avatar is set
            <img
              src={avatar}
              alt="Image Preview"
              className="mt-2 rounded-md"
              style={{ maxWidth: "50%" }}
            />
          )}
        </div>

        <Button
          type="submit"
          auto
          className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-md w-full"
          size="small"
        >
          Create Post
        </Button>
      </form>
    </div>
  );
};

export default PostCreation;
