import BlogBanner from "@/components/blog/BlogBanner"
import BlogItems from "@/components/blog/BlogItems"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hvarlocalguide - All Blogs",
  description: "Hvar Local Travel Agency",
};


const page = () => {
  return (
    <div> 
        <BlogBanner/>
        <BlogItems/>
    </div>
  )
}

export default page