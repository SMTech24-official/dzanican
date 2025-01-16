import SearchResultSidebar from "@/components/pages/searchResult/SearchResultSidebar";
import PostCard from "@/components/shared/PostCard/PostCard";
import { postData } from "@/components/utils/data";
import Image from "next/image";
import blankImage from "@/assets/blankImage.svg";
import Link from "next/link";

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
              {postData?.slice(0, 8)?.map((post, index) => (
                <PostCard key={index} post={post} />
              ))}
              <Link
                href={"/"}
                className="w-full h-full flex flex-col items-center gap-3 justify-center rounded-lg bg-white shadow mb-6"
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
