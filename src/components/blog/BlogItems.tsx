"use client"
import React from "react";
// import blog from "../../assets/blog/blog.png";
import { BlogCard } from "./BlogCard";
import { useGetAllBlogsQuery } from "@/redux/api/blog/blogApi";

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

  // const travelCards = [
  //   {
  //     id: 1,
  //     title: "The Most Scenic Rural Roads To Take A Road Trip",
  //     description:
  //       "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point..",
  //     imageUrl: blog,
  //   },
  //   {
  //     id: 2,
  //     title: "The Most Scenic Rural Roads To Take A Road Trip",
  //     description:
  //       "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
  //     imageUrl: blog,
  //   },
  //   {
  //     id: 3,
  //     title: "The Most Scenic Rural Roads To Take A Road Trip",
  //     description:
  //       "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
  //     imageUrl: blog,
  //   },
  //   {
  //     id: 4,
  //     title: "The Most Scenic Rural Roads To Take A Road Trip",
  //     description:
  //       "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
  //     imageUrl: blog,
  //   },
  //   {
  //     id: 5,
  //     title: "The Most Scenic Rural Roads To Take A Road Trip",
  //     description:
  //       "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
  //     imageUrl: blog,
  //   },
  //   {
  //     id: 6,
  //     title: "The Most Scenic Rural Roads To Take A Road Trip",
  //     description:
  //       "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
  //     imageUrl: blog,
  //   },
  //   {
  //     id: 7,
  //     title: "The Most Scenic Rural Roads To Take A Road Trip",
  //     description:
  //       "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
  //     imageUrl: blog,
  //   },
  //   {
  //     id: 8,
  //     title: "The Most Scenic Rural Roads To Take A Road Trip",
  //     description:
  //       "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
  //     imageUrl: blog,
  //   },
  // ];


  const {data} = useGetAllBlogsQuery("")
  console.log(data?.data?.data)



  return (
    <section className="custom-container">
      <h1>dddddddddddddddddd</h1>
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
