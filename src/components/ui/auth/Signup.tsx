"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
// import Image from "next/image"
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import Link from "next/link";
import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Signup() {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log("Form Data:", data);
    toast.success("Signup successful");
    localStorage.setItem("user", JSON.stringify(true));
    router.push("/success");
    reset(); // Reset the form after submission
  };
  return (
    <>
      <div className="w-full max-w-[600px] mx-auto p-6 bg-white rounded-[8px]">
        <h1 className="text-[32px] font-semibold text-center mb-8">Sign Up</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="firstName"
                className="text-[14px] font-medium text-gray-700"
              >
                First Name
              </label>
              <Input
                id="firstName"
                placeholder="First name"
                {...register("firstName", { required: true })}
                className="h-12 bg-gray-50 border-gray-200"
              />
            </div>

            <div>
              <label
                htmlFor="lastName"
                className="text-[14px] font-medium text-gray-700"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                {...register("lastName", { required: true })}
                placeholder="Last name"
                className="h-12 bg-gray-50 border-gray-200"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-[14px] font-medium text-gray-700"
            >
              E-mail
            </label>
            <Input
              id="email"
              {...register("email", { required: true })}
              type="email"
              placeholder="Enter your mail address"
              className="h-12 bg-gray-50 border-gray-200"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-[14px] font-medium text-gray-700"
            >
              Password
            </label>
            <Input
              id="password"
              {...register("password", { required: true })}
              type="password"
              placeholder="********"
              className="h-12 bg-gray-50 border-gray-200"
            />
          </div>

          <div>
            <label
              htmlFor="confirmPassword"
              className="text-[14px] font-medium text-gray-700"
            >
              Confirm Password
            </label>
            <Input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword", { required: true })}
              placeholder="********"
              className="h-12 bg-gray-50 border-gray-200"
            />
          </div>

          <Button
            type="submit"
            // onClick={handleSubmit}
            className="w-full h-12 text-[16px] bg-[#2C3641] hover:bg-[#3A4754]"
          >
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
            <Link href="/login" className="text-bg_Secondary hover:underline">
              Log in
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}
