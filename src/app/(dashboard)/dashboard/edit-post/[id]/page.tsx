/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image, { StaticImageData } from "next/image";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { postData } from "@/components/utils/data";
import WarningModal from "@/components/shared/WarningModal/WarningModal";
import { useParams } from "next/navigation";

const EditPost = () => {
  const params = useParams();
  const post = postData?.find((post) => post?.id === Number(params?.id));
  // console.log(post);

  const [file, setFile] = useState<string | null>(null);
  const [preview, setPreview] = useState<string | StaticImageData | null>(
    post?.image || ""
  );
  const [brand, setBrand] = useState<string | undefined>(post?.brand);
  const [model, setModel] = useState<string | undefined>(post?.model);
  const [size, setSize] = useState<string | undefined>(post?.wristSize);
  const [comment, setComment] = useState<string | undefined>(post?.comment);
  const [amazonUrl, setAmazonUrl] = useState<string | undefined>(
    post?.amazonListingURL
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = () => {
    // Handle delete action here
    console.log("Deleting...");
    setIsModalOpen(true);
  };

  const onDrop = (acceptedFiles: any) => {
    setFile(acceptedFiles[0]);
    setPreview(URL.createObjectURL(acceptedFiles[0]));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    multiple: false,
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      file,
      brand,
      model,
      size,
      comment,
      amazonUrl,
    });
  };

  return (
    <div>
      <div className="container py-12">
        <form onSubmit={handleSubmit} className="space-y-6 max-w-3xl mx-auto">
          {/* Drag and Drop Section */}
          <div
            {...getRootProps()}
            className="border-dashed border-4 py-12 md:py-20 lg:py-28 rounded-sm border-gray-300 p-6 text-center"
          >
            <input {...getInputProps()} />
            {file ? (
              <Image
                src={preview ? preview : ""}
                width={400}
                height={400}
                alt="uploaded"
                className="mx-auto w-32 h-32 object-cover"
              />
            ) : (
              <div className="">
                <Image
                  src={post?.image || ""}
                  alt="uploaded"
                  width={60}
                  height={60}
                  className="mx-auto w-20 h-20"
                />
                <p className="text-center text-[#2C3E50]">
                  Drag & drop files here <br /> or
                </p>
              </div>
            )}
            <button
              type="button"
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
            >
              Upload
            </button>
          </div>

          {/* Watch Brand */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Brand*
            </label>
            <Select value={brand || post?.brand} onValueChange={setBrand}>
              <SelectTrigger className="h-14 flex text-[#2C3E50] text-md items-center shadow-none border-none bg-gray-100 ">
                <SelectValue placeholder="Choose Watch Brand" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-[#2C3E50] text-md" value="brand1">
                  Brand 1
                </SelectItem>
                <SelectItem className="text-[#2C3E50] text-md" value="brand2">
                  Brand 2
                </SelectItem>
                <SelectItem className="text-[#2C3E50] text-md" value="brand3">
                  Brand 3
                </SelectItem>
                <SelectItem
                  className="text-[#2C3E50] text-md"
                  value={post?.brand || ""}
                >
                  {post?.brand}
                </SelectItem>
                {/* Add more options here */}
              </SelectContent>
            </Select>
          </div>

          {/* Watch Model */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Model*
            </label>
            <Select value={model || post?.model} onValueChange={setModel}>
              <SelectTrigger className="h-14 flex text-[#2C3E50] text-md items-center shadow-none border-none bg-gray-100 ">
                <SelectValue placeholder="Choose Watch Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-[#2C3E50] text-md" value="model1">
                  Model 1
                </SelectItem>
                <SelectItem className="text-[#2C3E50] text-md" value="model2">
                  Model 2
                </SelectItem>
                <SelectItem className="text-[#2C3E50] text-md" value="model3">
                  Model 3
                </SelectItem>
                <SelectItem
                  className="text-[#2C3E50] text-md"
                  value={post?.model || ""}
                >
                  {post?.model}
                </SelectItem>
                {/* Add more options here */}
              </SelectContent>
            </Select>
          </div>

          {/* Watch Size */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Size*
            </label>
            <Select value={size || post?.wristSize} onValueChange={setSize}>
              <SelectTrigger className="h-14 flex text-[#2C3E50] text-md items-center shadow-none border-none bg-gray-100 ">
                <SelectValue placeholder="Choose Wrist Size" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem className="text-[#2C3E50] text-md" value="brand1">
                  Size 1
                </SelectItem>
                <SelectItem className="text-[#2C3E50] text-md" value="brand2">
                  Size 2
                </SelectItem>
                <SelectItem className="text-[#2C3E50] text-md" value="brand3">
                  Size 3
                </SelectItem>
                <SelectItem
                  className="text-[#2C3E50] text-md"
                  value={post?.wristSize || ""}
                >
                  {post?.wristSize}
                </SelectItem>
                {/* Add more options here */}
              </SelectContent>
            </Select>
          </div>

          {/* Comment */}
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Comment
            </label>
            <textarea
              className="mt-1 block w-full p-3 px-5 bg-gray-100 rounded outline-gray-300"
              value={comment || post?.comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Type here..."
            ></textarea>
          </div>

          {/* Amazon Listing URL */}
          <div className="mb-8">
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              Amazon Listing URL (Optional)
            </label>
            <input
              type="url"
              className="mt-1 block w-full px-5 py-3 bg-gray-100 rounded outline-gray-300"
              value={amazonUrl || post?.amazonListingURL}
              onChange={(e) => setAmazonUrl(e.target.value)}
              placeholder="Paste The Amazon Listing URL Here"
            />
          </div>

          {/* Buttons */}
          <div className="flex justify-between gap-8 flex-wrap mt-8">
            <Button
              onClick={handleDelete}
              type="button"
              className="px-4 py-6 text-white w-1/3 text-lg border rounded  bg-red-600 hover:bg-red-400 duration-300"
            >
              Delete post
            </Button>
            <Button
              type="submit"
              className="px-4 py-6 text-white w-1/3 border rounded text-lg  bg-[#2C3E50] hover:bg-transparent hover:text-[#2C3E50] border-[#2C3E50] duration-300"
            >
              Publish
            </Button>
          </div>
        </form>
      </div>
      <WarningModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleDelete}
      />
    </div>
  );
};

export default EditPost;
