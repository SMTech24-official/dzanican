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
          <div className="flex flex-col items-start gap-3 text-primary mt-8">
            {navlinks?.map((link, indx) => (
              <Link
                className="block w-full border-b hover:bg-primary hover:text-white"
                key={indx}
                href={link?.path}
              >
                <h3 className="p-3 px-5">{link?.text}</h3>
              </Link>
            ))}
          </div>
          <div className="mt-4 px-5">
            <div className="flex flex-col items-center gap-5">
              <button className="border flex items-center justify-center p-2 w-full text-center text-primary px-8 hover:text-white rounded-full  border-primary hover:border-primary/50 bg-transparent duration-300 hover:bg-primary">
                Login
              </button>
              <button className="border flex w-full justify-center items-center p-2 text-white px-5 hover:text-primary rounded-full  border-primary hover:bg-transparent duration-300 bg-primary">
                Register now
              </button>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default Sidebar;
