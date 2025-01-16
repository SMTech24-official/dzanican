import Image from "next/image";
import Link from "next/link";
// import postImge1 from "@/assets/images/postImage1.png";
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function PostCard({ post }: { post: any }) {
  console.log(post);
  return (
    <div className="w-full overflow-hidden h-fit rounded-lg bg-white shadow mb-6">
      <div className="relative h-[200px]">
        <Image
          src={post?.image}
          alt="Watch on wrist"
          width={800}
          height={800}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-4 space-y-2">
        <div className="flex gap-1.5">
          <span className="font-medium text-gray-900">Brand:</span>
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
        <Link href={`/search-result/${post?.id}`}>
          <button className="mt-2 w-full rounded bg-slate-800 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
}
