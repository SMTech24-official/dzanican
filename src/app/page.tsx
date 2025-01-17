'use client'
import { IoMdSearch } from "react-icons/io";
import { Button } from "@/components/ui/button"
import bg from '@/assets/images/bg.png'
import { MdAttachFile } from "react-icons/md";
import { useState } from "react";
import SearchBar from "@/components/ui/SearchBar";
import { useRouter } from "next/navigation";



export default function Home() {
  const [showSearch, setShowSearch] = useState(true);

  const router = useRouter();

  const signIn = () => {
    router.push("/signup"); // Call push correctly
  };


  return (
    <div className="">
      <main
        className="h-[90vh] relative bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bg.src})` }}

      >
        {/* Dark overlay */}


        <div className="relative z-10 mx-auto px-4 text-center">
          {/* <div className="absolute inset-0 bg-black/30" /> */}
          <p className="text-white/90 text-[32px] mb-4">
            Find wrist shots, explore styles, and make the perfect choice.
          </p>
          <h1 className="text-white text-[64px] md:text-6xl font-serif mb-12">
            Discover the Perfect Watch for Your Wrist
          </h1>

          <div className=" items-center">
            {showSearch ? (
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  className="bg-bg_Primary hover:bg-slate-800 text-white text-lg py-6 px-8 w-full sm:w-auto min-w-[240px]"
                  onClick={() => setShowSearch(false)} // Hide the search section
                >
                  <IoMdSearch className="w-8" />
                  Search
                </Button>
                <Button
                  size="lg"
                  onClick={signIn} // Hide the search section

                  className="bg-bg_Secondary hover:bg-[#d4ab45] text-black text-lg py-6 px-8 w-full sm:w-auto min-w-[240px]"
                >
                  <MdAttachFile className="w-8" />
                  Upload a Watch
                </Button>
              </div>
            ) : (
              <SearchBar />
            )}
          </div>
        </div>



      </main>
    </div>
  )
}

