import Image from "next/image";
import blogImg from "../../../../../assets/avatars/tour.jpg";
import Header from "@/components/dashboard/Header/Header";
import FirstComponent from "@/components/dashboard/Blogs/Datails/FirstComponent";
import SecoundComponent from "@/components/dashboard/Blogs/Datails/SecoundComponent";


const page = () => {
  return (
    <div className="">
      <Header />

      <div className="mt-10 mx-4 md:mx-6 bg-[#FFF] rounded-2xl p-6">
        <div>
          <Image
            src={blogImg}
            width={500}
            height={500}
            alt="blog"
            className="w-full h-[500px] rounded-2xl cursor-pointer"
          />
        </div>

        <FirstComponent/>
        <SecoundComponent title="1. Lanikai / Kailua Pillboxes" />
        <SecoundComponent title="2. Maili / Pink Pillbox Hike" />
        <SecoundComponent title="3. Ehukai Pillboxes" />
        <SecoundComponent title="4. Diamond Head Hike" />

          <div className="flex gap-2.5 justify-end">
          <button className="bg-[#EEE] px-8  text-black py-2 rounded-md flex items-center gap-2 transition-colors cursor-pointer">
          
          <span>Cancel</span>
        </button>
        
        <button className="bg-linear-to-t from-[#FF383B] cursor-pointer via-50%  to-[#C00003] to-50% text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors">  
          <span>Delete Blog</span>
        </button>
          </div>
      </div>
    </div>
  );
};

export default page;
