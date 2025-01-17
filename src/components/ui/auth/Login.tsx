'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { FcGoogle } from "react-icons/fc"
import { FaApple } from "react-icons/fa"
import { useState } from "react"
import Signup from "./Signup"

export default function Login() {
    const [signup, setSignin] = useState(true)
    return (
        <>
            {signup ? (
                <div className="w-full max-w-[600px] mx-auto p-6 bg-white rounded-[8px] ">
                    <h1 className="text-[32px] font-semibold text-center mb-8">Login</h1>

                    <form className="space-y-6">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-[14px] font-medium text-gray-700">
                                E-mail
                            </label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Enter your mail address"
                                className="h-12 bg-gray-50 border-gray-200"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="password" className="text-[14px] font-medium text-gray-700">
                                Password
                            </label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="********"
                                className="h-12 bg-gray-50 border-gray-200"
                            />
                        </div>

                        <Button className="w-full h-12 text-[16px] bg-[#2C3641] hover:bg-[#3A4754]">
                            Login
                        </Button>

                        <div className="text-center text-gray-500 text-sm">
                            Or Log in with
                        </div>

                        <div className="flex justify-center gap-4">
                            <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                                <FcGoogle />
                            </button>
                            <button className="p-3 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                                <FaApple />
                            </button>
                        </div>


                        <div className="text-center text-gray-600 text-sm">
                            Dont have an account?{" "}
                            <button onClick={() => setSignin(false)} className="text-bg_Secondary hover:underline">
                                Sign in
                            </button>
                        </div>
                    </form>
                </div>
            ) : (<Signup />)}
        </>
    )
}

