/* eslint-disable @next/next/no-img-element */
"use client";

// import Image from "next/image";
import Link from "next/link";
import { Plus, ArrowRight} from "lucide-react";
// import blogImg from "../../../assets/blog/blog.png";
import { useGetAllBlogsQuery } from "@/redux/api/blog/blogApi";
import Image from "next/image";
import { useEffect, useState } from "react";
import TextPagination from "@/components/others/pagination/TextPagination";

interface TBlogs {
  createdAt: string;
  description: string;
  id: string;
  img: string;
  slug: string;
  title: string;
  subTitle:string;
  updatedAt: string;
}

export default function BlogPage() {
  const { data: Blogs } = useGetAllBlogsQuery("");
  // console.log("Blogs", Blogs?.data?.data);
  
   const [ newPage, setNewPage ] = useState(1);    
    const [blogs, setBlogs] = useState([]);
    // const [loading, setLoading] = useState(true);
    const [blogMeta, setblogMeta] = useState<{
      page: number;
      limit: number;
      total: number;
      totalPage: number;
    }>({
      page: 1,
      limit: 12,
      total: 100,
      totalPage: 10,
    });
  
   
  
  useEffect(() => {
      const fetchTours = async () => {
        try {
          const token = localStorage.getItem("token");
          const response = await fetch(
            `https://supermariobos-api.code-commando.com/api/v1/blogs?limit=12&page=${newPage}`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`, // optional
              },
            }
          );
  
          const data = await response.json();
          setBlogs(data?.data || []);
          setblogMeta(data?.data?.meta);
        } catch (error) {
          console.error("Error fetching tours:", error);
        } finally {
          // setLoading(false);
        }
      };
  
      fetchTours();
    }, [newPage]);
  
    

    console.log({blogMeta, blogs})
  

  return (
    <main className="px-4 md:px-6 py-8 ">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-[25px] font-[500] ">Our Blog</h1>
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
              <p className="text-muted-foreground mb-4">{`${post.subTitle.length > 150 ? post.subTitle.slice(0, 150) : post.subTitle}...`}</p>

              <Link
                href={`/dashboard/blogs/${post.id}`}
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
        </div>
        <div className="flex items-center gap-2">
                              <TextPagination
                                meta={blogMeta}
                                onPageChange={(newPage) => {
                                  setNewPage(newPage);
                                }}
                              /> 
        </div>
      </div>

        

      <footer className="mt-10 text-right text-sm text-gray-500">
        Copyright © {new Date().getFullYear()} Travel Agency
      </footer>
    </main>
  );
}
