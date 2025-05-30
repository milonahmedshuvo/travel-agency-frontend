"use client"

import Image from "next/image";
import Header from "@/components/dashboard/Header/Header";
import FirstComponent from "@/components/dashboard/Blogs/Datails/FirstComponent";
import { useParams } from "next/navigation";
import { useGetSingleBlogQuery } from "@/redux/api/blog/blogApi";
import Loading from "@/components/shared/loading/Loading";
import BlogDeleteModal from "@/components/ui/BlogDeleteModal";


const BlogDatailsPage = () => {
      const params = useParams()
      const id = params.id 
      const {data, isLoading } = useGetSingleBlogQuery(id)

      if(isLoading){
        return <Loading/>
      }





      




  return (
    <div className="">
      <Header />

      <div className="mt-10 mx-4 md:mx-6 bg-[#FFF] rounded-2xl p-6">
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


        {/* <SecoundComponent title="1. Lanikai / Kailua Pillboxes" />
        <SecoundComponent title="2. Maili / Pink Pillbox Hike" />
        <SecoundComponent title="3. Ehukai Pillboxes" />
        <SecoundComponent title="4. Diamond Head Hike" /> */}

          <div className="flex gap-2.5 justify-end">
          <button className="bg-[#EEE] px-8  text-black py-2 rounded-md flex items-center gap-2 transition-colors cursor-pointer">
          
          <span>Cancel</span>
        </button>
      
        {/* blog delete modal  */}
          <BlogDeleteModal />
          </div>
      </div>
    </div>
  );
};

export default BlogDatailsPage;
