"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";
import { useRouter } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const handleHome = () => {
    router.push("/personalize");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-[90vh] px-4">
      <div className="text-center space-y-6">
        <div className="flex items-center justify-center gap-3 mb-2">
          <div>
            <Image
              src={logo}
              className="w-[180px] cursor-pointer lg:w-[344px] object-cover object-center -ml-4 lg:-ml-6"
              width={344}
              height={120}
              alt="digitriit logo"
            />{" "}
          </div>
        </div>

        <h1 className="text-[48px] font-bold text-bg_Primary">
          Welcome to ChronoFit
        </h1>

        <p className="text-[#333333] text-[24px]">
          Discover the perfect watch for your wrist with real user photos.
        </p>

        <Button
          onClick={handleHome}
          className="bg-[#2C3641] hover:bg-[#3A4754] text-white px-8 py-2 h-11"
        >
          Get Started
        </Button>
      </div>
    </div>
  );
}
