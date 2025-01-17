/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useState } from "react";
import { LogOutIcon, Paperclip, XIcon } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const ProfileSidebar = ({
  openClose,
}: {
  openClose: (val: boolean) => void;
}) => {
  const [uploadedImage, setUploadedImage] = useState<any>();
  const router = useRouter();

  const handleFileUpload = (e: any) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => setUploadedImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleLogout = (e: any) => {
    e.preventDefault();
    toast.success("Logout successful");
    localStorage?.removeItem("user");
    router.push("/");
  };
  return (
    <div className="py-6 flex flex-col relative  h- md:h-[90vh] bg-slate-500">
      <div
        onClick={() => openClose(false)}
        className=" md:hidden absolute top-0 right-0 text-white"
      >
        <XIcon />
      </div>
      <div className="flex flex-col items-center gap-2 p-4">
        <Avatar className="h-28 w-28">
          {uploadedImage ? (
            <Image
              src={uploadedImage}
              alt="Uploaded Avatar"
              className="h-full w-full rounded-full"
            />
          ) : (
            <AvatarFallback className="bg-[#1A1D23] text-xl text-white">
              D
            </AvatarFallback>
          )}
        </Avatar>
        <div className="flex flex-col items-center gap-1">
          <h2 className="text-lg font-medium text-white">David Denials</h2>
          <p className="text-sm text-gray-400">danialdavid@gmail.com</p>
        </div>
        <label htmlFor="upload-photo" className="w-full">
          <button className="mt-2 w-full gap-2 border  bg-gray-100/10 text-sm text-white flex items-center justify-center p-3 rounded-lg hover:bg-gray-100/15">
            <Paperclip className="h-4 w-4" />
            Upload Photo
          </button>
        </label>
        <input
          id="upload-photo"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileUpload}
        />
      </div>
      <div className="p-4 flex-1 flex items-end">
        <Button
          onClick={handleLogout}
          className="w-full bg-red-600 hover:bg-red-500 duration-300"
        >
          <LogOutIcon /> Logout
        </Button>
      </div>
    </div>
  );
};

export default ProfileSidebar;
