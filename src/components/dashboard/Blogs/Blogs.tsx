/* eslint-disable @next/next/no-img-element */
"use client";

// import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
// import blogImg from "../../../assets/blog/blog.png";
import { useGetAllBlogsQuery } from "@/redux/api/blog/blogApi";
import Image from "next/image";
import Loading from "@/components/shared/loading/Loading";

interface TBlogs {
  createdAt: string;
  description: string;
  id: string;
  img: string;
  slug: string;
  title: string;
  updatedAt: string;
}

export default function BlogPage() {
  const { data: Blogs, isLoading } = useGetAllBlogsQuery("");
  console.log("Blogs", Blogs?.data?.data);

  if (isLoading) {
    return <Loading />;
  }

  // Sample blog post data
  // const blogPosts = Array(6).fill({
  //   title: "The Most Scenic Rural Roads To Take A Road Trip",
  //   excerpt:
  //     "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point B...",
  //   image: blogImg,
  // })

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[20px] font-[500] ">Our Blog</h1>
        <Link href="/dashboard/blogs/addBlog">
          <button className="bg-linear-to-t from-[#156CF0]  via-50%  to-[#38B6FF] to-50%  text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors cursor-pointer">
            <Plus className="w-5 h-5" />
            <span>Add Blog</span>
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {Blogs?.data?.data?.map((post: TBlogs, index: number) => (
          <div
            key={index}
            className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="relative h-60">
              <Link href="/dashboard/blogs/id">
                {/* <Image src={post.img || "/public/vercel.svg"} alt={post.title} width={500} height={500} /> */}

                {/* <Image
                  src={post.img || "/vercel.svg"}
                  alt={post.title}
                  width={500}
                  height={300}
                  className="w-full h-full object-cover"
                  priority={true}
                  // unoptimized
                /> */}
                
                <Image
                  src={post?.img || "/placeholder.svg"}
                  alt={post?.title}
                  fill
                  className="object-cover"
                  unoptimized
                  loading="lazy"
                />
              </Link>
            </div>
            <div className="p-4">
              <h2 className="text-[#15202E] text-[20px] font-[500] mb-2">
                {post?.title}
              </h2>

              {/* <p className="text-gray-600 mb-4 text-sm" dangerouslySetInnerHTML={{ __html: post.description }} ></p> */}

              <Link
                href="/dashboard/blogs/id"
                className="text-blue-500 hover:text-blue-700 flex items-center justify-end gap-1 transition-colors"
              >
                Read More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 flex justify-between items-center">
        <div className="text-sm text-gray-600">
          Showing
          <select className="mx-2 px-2 py-1 border rounded">
            <option>8</option>
            <option>16</option>
            <option>24</option>
          </select>
          out of 286
        </div>

        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border rounded flex items-center gap-1 text-gray-600 hover:bg-gray-100">
            <ChevronLeft className="w-4 h-4" />
            Previous
          </button>

          <div className="flex gap-1">
            <button className="w-8 h-8 flex items-center justify-center rounded bg-blue-500 text-white">
              1
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
              2
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
              3
            </button>
            <span className="w-8 h-8 flex items-center justify-center">
              ...
            </span>
            <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-gray-100">
              16
            </button>
          </div>

          <button className="px-3 py-1 border rounded flex items-center gap-1 text-gray-600 hover:bg-gray-100">
            Next
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <footer className="mt-10 text-right text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} Travel Agency
      </footer>
    </main>
  );
}
