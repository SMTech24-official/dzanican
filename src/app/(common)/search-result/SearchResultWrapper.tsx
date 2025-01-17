"use client";
import SearchResultSidebar from "@/components/pages/searchResult/SearchResultSidebar";
import PostCard from "@/components/shared/PostCard/PostCard";
import { postData } from "@/components/utils/data";
import Image from "next/image";
import blankImage from "@/assets/blankImage.svg";
import Link from "next/link";
import { PiDotsThreeOutlineVerticalLight } from "react-icons/pi";
import { useState } from "react";

const SearchResultWrapper = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <div>
      <div className="container h-[90vh]  overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-[256px_1fr] h-full gap-8">
          <div
            className={`fixed md:static ${
              filterOpen ? "left-0" : "-left-full"
            } top-3 w-[90%] md:w-full max-w-[300px] h-full z-20 md:block py-6 bg-white md:bg-transparent p-5 md:p-0 md:py-6 duration-500`}
          >
            <SearchResultSidebar setFilterOpen={setFilterOpen} />
          </div>
          <div className="md:hidden">
            <div className="">
              <div className="flex items-center justify-end  py-3 -mb-7">
                <PiDotsThreeOutlineVerticalLight
                  onClick={() => setFilterOpen(!filterOpen)}
                  size={25}
                />
              </div>
            </div>
          </div>
          <div className=" py-6 px-5 bg-[#FAFAFA] rounded-lg">
            <div className="flex items-center justify-between">
              <h3 className="text-2xl">
                Search Results for: <span className="font-bold">Casio</span>
              </h3>
            </div>
            {/*  */}
            <div className="grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-6 max-h-[90vh] md:max-h-[82vh] overflow-y-auto pb-20 lg:pb-10 ">
              {postData?.slice(0, 8)?.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
              <Link
                href={"/create-post"}
                className="w-full max-h-[364px] min-h-[300px] h-full mb-16 flex flex-col items-center justify-center border gap-3 rounded-lg bg-white shadow"
              >
                <Image
                  src={blankImage}
                  width={60}
                  height={60}
                  alt="blank image"
                />
                <h2 className="text-lg">Upload Yours</h2>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultWrapper;
