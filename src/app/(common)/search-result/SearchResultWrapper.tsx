import SearchResultSidebar from "@/components/pages/searchResult/SearchResultSidebar";
import PostCard from "@/components/shared/PostCard/PostCard";
import { postData } from "@/components/utils/data";
import React from "react";

const SearchResultWrapper = () => {
  return (
    <div>
      <div className="container h-[90vh]  overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[256px_1fr] h-full gap-8">
          <div className=" hidden md:block py-6 ">
            <SearchResultSidebar />
          </div>
          <div className=" py-6 px-5 bg-[#FAFAFA] rounded-lg">
            <h3 className="text-2xl">
              Search Results for: <span className="font-bold">Casio</span>
            </h3>
            {/*  */}
            <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6 max-h-[90vh] md:max-h-[82vh] overflow-y-auto pb-32 lg:pb-5">
              {postData?.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultWrapper;
