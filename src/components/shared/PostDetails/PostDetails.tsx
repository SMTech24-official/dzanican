import Image from "next/image";
import postImge1 from "@/assets/images/postImage1.png";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PostDetailsCard({ data }: { data: any }) {
  console.log(data);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5  gap-8 rounded-lg bg-white">
      <div className="w-full overflow-hidden rounded-lg lg:col-span-2">
        <Image
          src={postImge1}
          alt="Casio G-Shock Mudmaster watch"
          className="h-full w-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-4 lg:col-span-3">
        <h1 className="text-[32px] font-semibold text-gray-900">
          {data?.title}
        </h1>

        <div className="space-y-2">
          <div className="flex gap-2">
            <span className="font-semibold text-xl  text-gray-900">
              Brand :
            </span>
            <span className="text-gray-600">{data?.brand}</span>
          </div>

          <div className="flex gap-2">
            <span className="font-semibold text-gray-900">Model :</span>
            <span className="text-gray-600">[data?.model]</span>
          </div>

          <div className="flex gap-2">
            <span className="font-semibold text-gray-900">Wrist Size:</span>
            <span className="text-gray-600">{data?.wristSize}</span>
          </div>
        </div>

        <div className="space-y-2 mt-5">
          <span className="font-semibold text-2xl text-gray-900">
            Additional Comment :
          </span>
          <p className="text-gray-600 text-lg">{data?.comment}</p>
        </div>

        <Link href={data?.amazonListingURL}>
          <button className="mt-2 w-fit rounded bg-[#2C3E50] px-8 py-3 text-md font-medium text-white hover:bg-slate-700">
            View on Amazon
          </button>
        </Link>
      </div>
    </div>
  );
}
