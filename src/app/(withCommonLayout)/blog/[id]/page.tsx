"use client"

import Image from "next/image";
import FirstComponent from "@/components/dashboard/Blogs/Datails/FirstComponent";
import RecentBlog from "@/components/toursExperience/recentBlog/RecentBlog";
import { useParams } from "next/navigation";
import Loading from "@/components/shared/loading/Loading";
import { useGetSingleBlogQuery } from "@/redux/api/blog/blogApi";




const BlogDatailsPage = () => {
   const params = useParams()
      const id = params.id 
      const {data, isLoading } = useGetSingleBlogQuery(id)

      if(isLoading){
        return <Loading/>
      }




  return (

    <section>     

      <div className="mt-10 bg-[#FFF] rounded-2xl custom-container ">
        <div>
          <Image
            src={data?.data?.img}
            width={500}
            height={500}
            alt="blog"
            className="w-full h-[500px] rounded-2xl cursor-pointer"
            unoptimized
            loading="lazy"
          />
        </div>

        
       <FirstComponent title={data?.data?.title} subTitle={data?.data?.subTitle} />
   

          <p className="text-gray-600 mb-4 text-sm" dangerouslySetInnerHTML={{ __html: data?.data?.description }} ></p>

          
      </div>

      <RecentBlog/>

      
    </section>
  );
};

export default BlogDatailsPage;
