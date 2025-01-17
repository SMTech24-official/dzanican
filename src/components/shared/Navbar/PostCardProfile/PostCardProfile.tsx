import { EditIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
// import postImge1 from "@/assets/images/postImage1.png";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PostCardProfile({ post }: { post: any }) {
  //   console.log(post);
  return (
    <div className="w-full overflow-hidden h-fit flex flex-col xl:flex-row rounded-lg min-h-[430px] xl:min-h-[230px] border bg-white shadow ">
      <div className="relative h-[220px] xl:h-[240px] p-5">
        <Image
          src={post?.image}
          alt="Watch on wrist"
          width={800}
          height={800}
          className="h-full w-full object-cover rounded-xl"
        />
      </div>
      <div className="p-4 flex flex-col gap-2 h-full min-h-[200px] text-xl">
        <div className="flex gap-1.5 text-xl">
          <span className="font-medium  text-gray-900">Brand:</span>
          <span className="text-gray-600">{post?.brand}</span>
        </div>
        <div className="flex gap-1.5">
          <span className="font-medium text-gray-900">Model:</span>
          <span className="text-gray-600">{post?.model}</span>
        </div>
        <div className="flex gap-1.5">
          <span className="font-medium text-gray-900">Wrist Size:</span>
          <span className="text-gray-600">{post?.wristSize}</span>
        </div>
        <Link href={`/dashboard/edit-post/${post?.id}`}>
          <button className=" w-full flex items-center justify-center gap-3 text-lg mt-5 rounded bg-slate-800 px-4 py-2 font-medium text-white hover:bg-slate-700">
            <EditIcon width={20} />
            Edit
          </button>
        </Link>
      </div>
    </div>
  );
}
