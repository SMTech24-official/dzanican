"use client";

import ProfileSidebar from "@/components/pages/profile/ProfileSidebar";
import PostCardProfile from "@/components/shared/Navbar/PostCardProfile/PostCardProfile";
import { postData } from "@/components/utils/data";
import React, { useState } from "react";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";

const Profile = () => {
  const [ProfileSidebarOpen, setProfileSidebarOpen] = useState(false);
  console.log(ProfileSidebarOpen);
  return (
    <div className="h-[90.5vh] max-h-[90.5vh] min-h-[500px] fles flex-col overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-[256px_1fr]  h-[91vh]">
        <div
          className={`fixed md:static  ${
            ProfileSidebarOpen ? "left-0 -top-0" : "-left-full -top-0"
          } top-3 w-[90%] md:w-full max-w-[300px] h-full z-20 md:block py-6 bg-slate-500 -bottom-10 shadow md:shadow-none  p-5 md:p-0 md:py-6 duration-500`}
        >
          <ProfileSidebar openClose={setProfileSidebarOpen} />
        </div>
        <div className="md:hidden relative z-50">
          <div className="">
            <div className="flex items-center justify-end px-5 py-3 ">
              <PiDotsThreeOutlineVerticalLight
                size={25}
                onClick={() => {
                  console.log(setProfileSidebarOpen(!ProfileSidebarOpen));
                  console.log("object");
                }}
              />
            </div>
          </div>
        </div>
        <div className="-mt-16 md:-mt-0">
          <h2 className="p-6 text-3xl md:text-4xl font-semibold">My Watches</h2>
          <div className="pr-6 lg:pr-0 pl-6 h-[91vh] pt-6 grid grid-cols-1 md:grid-cols-2 gap-8  pb-32 overflow-hidden overflow-y-auto">
            {postData?.map((post) => (
              <PostCardProfile key={post?.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
