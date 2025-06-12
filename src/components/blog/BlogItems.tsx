"use client"
import React from "react";
// import blog from "../../assets/blog/blog.png";
import { BlogCard } from "./BlogCard";
import { useGetAllBlogsQuery } from "@/redux/api/blog/blogApi";
// import Loading from "../shared/loading/Loading";

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



const BlogItems = () => {
  const {data} = useGetAllBlogsQuery("")
  console.log(data?.data?.data)
  /// blogs?limit=1&page=1
  




  return (
    <section className="custom-container">
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 ">
        {data?.data?.data.map((post:TBlogs) => (
          <BlogCard
            key={post.id}
            id={post.id}
            imageUrl={post.img}
            title="The Most Scenic Rural Roads To
Take A Road Trip"
            description="When it comes to road trips, the journey itself often becomes just as memorable as the destination..."
          />
        ))}
      </div>




    </section>
  );
};

export default BlogItems;
