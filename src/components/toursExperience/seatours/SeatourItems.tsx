import React, { useState } from "react";
// import img1 from "../../../assets/card/tourexperience/img1.jpg";
import TourExperienceCard from "@/components/card/tourExCard/TourExCard";
import { useGetSeaTourQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { TTourPackage } from "@/components/lib/types";
import Loading from "@/components/shared/loading/Loading";
import CustomPagination from "@/components/others/pagination/CustomPagination";


const SeaTourItems = () => {
  const [newPage, setNewPage] = useState(1);
  const { data, isLoading } = useGetSeaTourQuery("");
  if (isLoading) {
    return <Loading />;
  }

  console.log("pagination current page:", newPage);

  return (
    <section className="custom-container">
      <h1 className="font-semibold text-[48px] text-center">
        Find Your <span className="text-[#FF914D]">Perfect Experience</span>
      </h1>
      <p className="text-[#333333] text-[16px] text-center font-normal mt-1.5">
        Explore our curated selection of unique and captivating properties.
      </p>

      {/* button group  */}
      {/* <div className="flex flex-wrap gap-3.5 lg:gap-4 mt-6 justify-center items-center ">
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer hover:bg-[#156CF0] hover:text-[#ffffff]  hover:border-[#156CF0]">
          Boat Trips
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:bg-[#156CF0]  hover:text-[#ffffff] hover:border-[#156CF0]  ">
          Diving
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:bg-[#156CF0] hover:text-[#ffffff] hover:border-[#156CF0]  ">
          Kayaking
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:bg-[#156CF0] hover:text-[#ffffff] hover:border-[#156CF0]  ">
          Fishing
        </button>
      </div> */}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 mb-10">
        {data?.data?.map((product: TTourPackage, index: number) => (
          <div key={index}>
            <TourExperienceCard
              id={product.id}
              imageUrl={product.images?.[1]?.url}
              title={product.title}
              price={`$${product.price}`}
              day={`${product.duration} Days Trip`}
              ratting={"5.0"}
            ></TourExperienceCard>
          </div>
        ))}
      </div>

      {/* Handle Pagination here  */}
      {/* <Pagination total={40} defaultCurrent={1} /> */}

      {/* call custom pagination handle here  */}
      <CustomPagination
        meta={{
          page: 3,
          limit: 10,
          total: 100,
          totalPage: 5,
        }}
        onPageChange={(newPage) => {
          console.log("Go to page:", newPage);
          // fetch new data here
          setNewPage(newPage);
        }}
      />

    </section>
  );
};

export default SeaTourItems;
