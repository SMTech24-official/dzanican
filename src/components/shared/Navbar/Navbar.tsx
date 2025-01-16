"use client";

import logo from "@/assets/logo.svg";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchComponent from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";

export const navlinks = [
  { path: "/about", text: "About Us" },
  { path: "/#faq", text: "FAQ" },
  { path: "/support", text: "Support" },
  { path: "/#faq", text: "Contact Us" },
];

const Navbar = () => {
  const [isOpen, setIsopen] = useState<boolean>(false);
  return (
    <div className="bg-white bg-opacity-15 backdrop-blur-md  top-0 left-0 z-50 w-full">
      <div className="container h-24 flex items-center justify-between">
        <div className="">
          <Link href={"/"}>
            <Image
              src={logo}
              className="w-[180px] lg:w-[220px] object-cover object-center -ml-4 lg:-ml-6"
              width={200}
              height={120}
              alt="digitriit logo"
            />
          </Link>
        </div>
        {/* center  */}
        <SearchComponent hidden={true} />
        {/* right  */}
        <div className=" hidden lg:flex items-center gap-8 lg:gap-20 text-white">
          <div className="flex items-center gap-5">
            <Link href={"/login"}>
              <button className="border text-lg border-[#2C3E50]/80 flex items-center p-2 text-[#2C3E50]  rounded-sm  px-12 hover:text-white  hover:border-[#2C3E50] bg-transparent duration-500 hover:bg-[#2C3E50]">
                Login
              </button>
            </Link>
            <Link href={"/signup"}>
              <button className="border text-lg border-[#2C3E50]/80 flex items-center p-2 text-white rounded-sm  px-8 hover:text-white  hover:border-[#2C3E50] bg-[#2C3E50] duration-300 hover:bg-[#47688a]">
                Register now
              </button>
            </Link>
          </div>
        </div>
        {/* menu icon */}
        <div className="lg:hidden">
          <button onClick={() => setIsopen(true)}>
            <MenuIcon className="text-[#2C3E50]" size={28} />
          </button>
          <Sidebar isOpen={isOpen} setIsopen={setIsopen} />
        </div>
      </div>
      {/* Sidebar */}
    </div>
  );
};

export default Navbar;
