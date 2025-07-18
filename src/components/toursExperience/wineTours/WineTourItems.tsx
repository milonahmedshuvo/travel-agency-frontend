"use client";

import TourExperienceCard from "@/components/card/tourExCard/TourExCard";
import { useEffect, useState } from "react";
// import Pagination from "@/components/others/pagination/Pagination";
// import { useGetGastroTourQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { Component5Props, TTourPackage } from "@/components/lib/types";
import CustomPagination from "@/components/others/pagination/CustomPagination";
import Loading from "@/components/shared/loading/Loading";
import { getBaseUrl } from "@/config/base-url";

const WineTourItems = ({scrollRef}:Component5Props) => {
  // const {data, isLoading} = useGetGastroTourQuery("")
  // if(isLoading){
  //   return <Loading/>
  // }
  // GASTRO_WINE_TOUR

  const [newPage, setNewPage] = useState(1);
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [tourMeta, setTourMeta] = useState<{
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
          `${getBaseUrl()}/tour-packages?limit=12&category=GASTRO_WINE_TOUR&page=${newPage}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // optional
            },
          }
        );

        const data = await response.json();
        setTours(data?.data || []);
        setTourMeta(data?.meta);
      } catch (error) {
        console.error("Error fetching tours:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [newPage]);

  if (loading) {
    return <Loading />;
  }

  return (
    <section ref={scrollRef} className="custom-container">
      <h1 className="font-semibold text-[48px] text-center">
        Find Your <span className="text-[#FF914D]">Perfect Experience</span>
      </h1>
      <p className="text-[#333333] text-[16px] text-center font-normal mt-1.5">
        Explore our curated selection of unique and captivating properties.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 mb-10">
        {tours?.map((product: TTourPackage, index: number) => (
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
      <CustomPagination
        meta={tourMeta}
        onPageChange={(newPage) => {
          console.log("Go to page:", newPage);
          // fetch new data here
          setNewPage(newPage);
        }}
      />
    </section>
  );
};

export default WineTourItems;
