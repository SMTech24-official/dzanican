"use client";
import { IoMdSearch } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";
import { Button } from "./button";
import { useState } from "react";
// import WatchFilters from "./WatchFilters";
import DropdownMenu from "./WatchFilters";
import { useRouter } from "next/navigation";

export default function SearchBar() {
    const [filter, setFilter] = useState(true)
    const router = useRouter()
    const handleSearch = () => {
        router.push('/search-result')
    }
    return (
        <span className="">
            {
                filter ? (
                    <div className="max-w-3xl mx-auto px-2">
                        <div className="relative flex flex-col sm:flex-row sm:gap-2 px-4 sm:px-0">
                            <div className="relative flex-1">
                                <IoMdSearch className="absolute top-2 left-1 z-40 text-white w-9 h-9" />
                                <TbMenuDeep
                                    onClick={() => setFilter(false)}
                                    className="absolute top-2 right-1 z-40 text-white w-9 h-9 cursor-pointer hover:text-slate-300"
                                />
                                <input
                                    type="text"
                                    style={{ paddingLeft: '40px' }}
                                    placeholder="GMT-Master for 38mm"
                                    className="h-12 w-full rounded-[8px] max-w-[858px] font-medium bg-[#ECECEC59] pl-4 text-white placeholder:text-white/70"
                                />
                            </div>
                            <Button
                                onClick={handleSearch}
                                className="h-12 sm:px-9 px-4 mt-2 sm:mt-0 text-[20px] font-medium bg-slate-800 hover:bg-slate-700"
                            >
                                Search
                            </Button>
                        </div>
                    </div>
                ) : (
                    <DropdownMenu />
                )
            }
        </span>
    );
}
