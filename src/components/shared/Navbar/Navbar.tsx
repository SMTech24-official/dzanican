"use client";

import logo from "@/assets/logo.svg";
import { ChevronDown, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import SearchComponent from "../Search/Search";
import Sidebar from "../Sidebar/Sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export const navlinks = [
  { path: "/about", text: "About Us" },
  { path: "/#faq", text: "FAQ" },
  { path: "/support", text: "Support" },
  { path: "/#faq", text: "Contact Us" },
];

const Navbar = () => {
  const [isOpen, setIsopen] = useState<boolean>(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage?.getItem("user");
    setUser(user);
  }, [user]);
  return (
    <div className="bg-white bg-opacity-15 backdrop-blur-md  top-0 left-0 z-50 w-full shadow-xl">
      <div className="container h-[100px] flex items-center justify-between">
        <div className="">
          <Link href={"/"}>
            <Image
              src={logo}
              className="w-[180px] lg:w-[220px] object-cover object-center -ml-2"
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
          {user ? (
            <Link href={"/dashboard/profile"}>
              <Button
                variant="ghost"
                className="h-auto w-full flex flex-row-reverse justify-start gap-3 p-2 hover:bg-transparent"
              >
                <Avatar className="h-10 w-10">
                  <AvatarFallback className="bg-gray-700 text-white">
                    D
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col items-end text-left">
                  <div className="flex items-center gap-1">
                    <span className="text-black text-lg font-medium">
                      David Denials
                    </span>
                    <ChevronDown className="h-4 w-4 text-gray-500" />
                  </div>
                  <span className="text-sm text-gray-500">
                    danialdavid@gmail.com
                  </span>
                </div>
              </Button>
            </Link>
          ) : (
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
          )}
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
