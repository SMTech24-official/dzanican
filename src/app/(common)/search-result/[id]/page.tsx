import PostCard from "@/components/shared/PostCard/PostCard";
import PostDetailsCard from "@/components/shared/PostDetails/PostDetails";
import { postData } from "@/components/utils/data";
import React from "react";

const PostDetails = ({ params }: { params: { id: number | string } }) => {
  console.log(params?.id);
  const post = postData?.find((post) => post?.id === Number(params?.id));

  return (
    <div>
      <div className="container py-12">
        <PostDetailsCard data={post} />
        {/* related */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {postData?.slice(0, 3)?.map((post) => (
            <PostCard key={post?.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
