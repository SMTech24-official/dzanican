import ProfileSidebar from "@/components/pages/profile/ProfileSidebar";
import PostCardProfile from "@/components/shared/Navbar/PostCardProfile/PostCardProfile";
import { postData } from "@/components/utils/data";
import React from "react";

const Profile = () => {
  return (
    <div className="h-[90.5vh] max-h-[90.5vh] min-h-[500px] fles flex-col overflow-hidden">
      <div className="container grid grid-cols-1 md:grid-cols-[256px_1fr]  h-[91vh]">
        <div className="hidden md:block h-full bg-slate-500 max-h-[91vh]">
          <ProfileSidebar />
        </div>
        <div>
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
