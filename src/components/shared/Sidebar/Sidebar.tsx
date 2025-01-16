import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { FC } from "react";
import { navlinks } from "../Navbar/Navbar";
import SearchComponent from "../Search/Search";
interface PageProps {
  isOpen: boolean;
  setIsopen: (val: boolean) => void;
}

const Sidebar: FC<PageProps> = ({ isOpen, setIsopen }) => {
  const openClose = () => {
    setIsopen(!isOpen);
  };
  return (
    <div>
      <Sheet open={isOpen} onOpenChange={openClose}>
        <SheetTrigger asChild></SheetTrigger>
        <SheetContent className="p-0 border-none bg-white">
          <SheetHeader className="hidden">
            <SheetTitle>title</SheetTitle>
            <SheetDescription>description</SheetDescription>
          </SheetHeader>
          <div className="relative p-3 fill-primary flex items-center justify-end">
            <svg
              onClick={openClose}
              className="rotate-45"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
            >
              <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
            </svg>
          </div>
          {/* search bar */}
          <SearchComponent hidden={false} />

          <div className="mt-4 px-5">
            <div className="flex flex-col items-center gap-5">
              <div className="flex flex-wrap items-center gap-5 mt-8">
                <Link href={"/login"} className="w-full">
                  <button className="border text-lg w-full border-[#2C3E50]/80 flex items-center justify-center p-2 text-[#2C3E50]  rounded-sm  px-12 hover:text-white  hover:border-[#2C3E50] bg-transparent duration-500 hover:bg-[#2C3E50]">
                    Login
                  </button>
                </Link>
                <Link href={"/signup"} className=" w-full">
                  <button className="border text-lg w-full border-[#2C3E50]/80 flex items-center justify-center p-2 text-white rounded-sm  px-8 hover:text-white  hover:border-[#2C3E50] bg-[#2C3E50] duration-300 hover:bg-[#47688a]">
                    Register now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
