'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
// import Image from "next/image"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useState } from "react";
import Login from "./Login";



export default function Signup() {
    const [loginForm, setLoginForm] = useState(true)

    return (
        <>
            {loginForm ? (
                <div className="w-full max-w-[600px] mx-auto p-6 bg-white rounded-[8px]">
                    <h1 className="text-[32px] font-semibold text-center mb-8">Sign Up</h1>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="text-[14px] font-medium text-gray-700">
                                    First Name
                                </label>
                                <Input
                                    id="firstName"
                                    placeholder="First name"
                                    className="h-12 bg-gray-50 border-gray-200"
                                />
                            </div>

                            <div>
                                <label htmlFor="lastName" className="text-[14px] font-medium text-gray-700">
                                    Last Name
                                </label>
                                <Input
                                    id="lastName"
                                    placeholder="Last name"
                                    className="h-12 bg-gray-50 border-gray-200"
                                />
                            </div>
                        </div>

                        <div>
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

                        <div>
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

                        <div>
                            <label htmlFor="confirmPassword" className="text-[14px] font-medium text-gray-700">
                                Confirm Password
                            </label>
                            <Input
                                id="confirmPassword"
                                type="password"
                                placeholder="********"
                                className="h-12 bg-gray-50 border-gray-200"
                            />
                        </div>

                        <Button className="w-full h-12 text-[16px] bg-[#2C3641] hover:bg-[#3A4754]">
                            Sign Up
                        </Button>

                        <div className="text-center text-gray-500 text-sm">
                            Or Sign up with
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
                            Already have an account?{" "}
                            <button onClick={() => setLoginForm(false)} className="text-bg_Secondary hover:underline">
                                Log in
                            </button>
                        </div>
                    </form>
                </div>
            ): (<Login/>)}
       </>
    )
}

