"use client";

import { useEffect, useState } from "react";
// import img1 from '../../../assets/card/accommodation/img1.jpg'
import AccommodationSecoundCard from "@/components/card/accommodationCard/AccommoSecoundCard";
// import { useGetAllHotelPackagesQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { THotelPackage } from "@/components/lib/types";
import CustomPagination from "@/components/others/pagination/CustomPagination";
import Loading from "@/components/shared/loading/Loading";
import { getBaseUrl } from "@/config/base-url";

const AccommodationItems = () => {
  //  const {data, isLoading } = useGetAllHotelPackagesQuery("")
  //   // console.log("hotel", data?.data)
  //   if(isLoading){
  //     return <Loading/>
  //   }
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
          `${getBaseUrl()}/hotel-packages?limit=12&page=${newPage}`,
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
    <section className="custom-container">
      <h1 className="font-semibold text-[48px] text-center">
        Top Picks for <span className="text-[#FF914D]">Your Stay</span>
      </h1>
      <p className="text-[#333333] text-[16px] text-center font-normal mt-1.5">
        Hit the open road and explore in style with the perfect bike, scooter,
        car, boat tour for your needs.
      </p>

      <div className="my-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
        {tours?.map((product: THotelPackage, index: number) => (
          <div key={index}>
            <AccommodationSecoundCard
              id={product.id}
              imageUrl={product?.images[1]?.url}
              title={product.title}
              address={product.location}
              price={product.price}
              ratting={"5.0"}
              kitchenValue={product.kitchen}
              bedRoomValue={product.bedRoom}
              bathroomValue={product.bathRoom}
              livingRoomValue={product.livingRoom}
            ></AccommodationSecoundCard>
          </div>
        ))}
      </div>

      {/* Handle Pagination here  */}
      <CustomPagination
        meta={tourMeta}
        onPageChange={(newPage) => {
          setNewPage(newPage);
        }}
      />
    </section>
  );
};

export default AccommodationItems;
