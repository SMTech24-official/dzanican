import Image from "next/image"
import { Button } from "@/components/ui/button"
import logo from "@/assets/logo.svg";


export default function Page() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen px-4">
            <div className="text-center space-y-6">
                <div className="flex items-center justify-center gap-3 mb-2">
                    <div className="w-8 h-8">
                        <Image
                            src={logo}
                            className="w-[180px] lg:w-[258px] object-cover object-center -ml-4 lg:-ml-6"
                            width={258}
                            height={120}
                            alt="digitriit logo"
                        />                    </div>
                </div>

                <h1 className="text-[32px] font-semibold text-[#2C3641]">
                    Great to meet you, David!
                </h1>

                <p className="text-[#333333CC] max-w-md">
                    Choose a unique username to personalize your profile.
                </p>
                <div className="pt-[29px] pb-[20px]">
                    <label htmlFor="username" className="text-[14px]">Enter your Username</label>
                    <input id="username" className="w-[450px] py-[11px] px-[16px] text-[#BDC3C7]" placeholder="Enter Username" />
                </div>

                <Button
                    className="bg-[#2C3E50] hover:bg-[#3A4754] text-[20px] text-white px-10 rounded-[5px] py-3 h-11"
                >
                    Start Exploring
                </Button>
            </div>
        </div>
    )
}

