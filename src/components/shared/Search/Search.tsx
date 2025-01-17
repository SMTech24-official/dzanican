/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SearchComponent = ({ hidden }: { hidden: boolean }) => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState<string | number>("");
  const handleSearch = (e: any) => {
    e.preventDefault();
    console.log(searchValue);
    router.push("/search-result");
  };
  return (
    <div
      className={` items-center gap-5 flex-1 ${
        hidden ? "hidden md:flex" : "flex md:hidden"
      }`}
    >
      <div className="flex flex-col md:flex-row w-full  max-w-2xl mx-auto px-5 md:items-center gap-2 rounded-lg ">
        <div className="flex flex-1 items-center w-full gap-2  bg-[#1D1D1F0D]/5 rounded-sm border-[#BDC3C7] border p-1 h-full px-4">
          <Search className="h-5 w-5 text-black" />
          <Input
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            onChange={(e: any) => setSearchValue(e.target?.value)}
            type="text"
            placeholder="G-Shock Mudmaster"
            className="border-0 bg-transparent shadow-none  w-full p-0 text-sm text-black placeholder:text-gray-500 focus-visible:ring-0"
          />
        </div>
        <Button
          onClick={handleSearch}
          variant="ghost"
          className="rounded-sm bg-[#2C3E50] px-8 w-1/2 md:w-20 p-3 text-sm h-full duration-300  text-white hover:text-white hover:bg-[#405c77]"
        >
          Search
        </Button>
      </div>
    </div>
  );
};

export default SearchComponent;
