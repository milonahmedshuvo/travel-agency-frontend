import Image from "next/image";
import blogImg from "../../../../assets/blog/datails.jpg";
import FirstComponent from "@/components/dashboard/Blogs/Datails/FirstComponent";
import SecoundComponent from "@/components/dashboard/Blogs/Datails/SecoundComponent";
import RecentBlog from "@/components/toursExperience/recentBlog/RecentBlog";




const page = () => {


  return (

    <section>     

      <div className="mt-10 bg-[#FFF] rounded-2xl custom-container ">
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

          
      </div>

      <RecentBlog/>

      
    </section>
  );
};

export default page;
