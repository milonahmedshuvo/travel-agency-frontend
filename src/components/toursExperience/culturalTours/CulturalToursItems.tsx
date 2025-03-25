import React from "react";
import img1 from "../../../assets/cultural/img1.jpg";
import img2 from "../../../assets/cultural/img2.jpg";
import img3 from "../../../assets/cultural/img3.jpg";
import img4 from "../../../assets/cultural/img4.jpg";
import img5 from "../../../assets/cultural/img5.jpg";
import img6 from "../../../assets/cultural/img6.jpg";
import img7 from "../../../assets/cultural/img7.jpg";


import TourExperienceCard from "@/components/card/tourExCard/TourExCard";
import Pagination from "@/components/others/pagination/Pagination";

const CulturalTourItems = () => {

  
  const products = [
    {
      id: "1",
      imageUrl: img1,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "2",
      imageUrl: img2,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "3",
      imageUrl: img3,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "4",
      imageUrl: img4,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "5",
      imageUrl: img5,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "6",
      imageUrl: img6,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "7",
      imageUrl: img2,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "8",
      imageUrl: img1,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "9",
      imageUrl: img2,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "10",
      imageUrl: img6,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "11",
      imageUrl: img5,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "12",
      imageUrl: img3,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "13",
      imageUrl: img1,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "14",
      imageUrl: img4,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "15",
      imageUrl: img3,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "16",
      imageUrl: img3,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "17",
      imageUrl: img4,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "18",
      imageUrl: img7,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "19",
      imageUrl: img7,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      id: "20",
      imageUrl: img6,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
  ];

  return (
    <section className="custom-container">
      <h1 className="font-semibold text-[48px] text-center">
      Find Your  <span className="text-[#FF914D]">Perfect Experience</span>
      </h1>
      <p className="text-[#333333] text-[16px] text-center font-normal mt-1.5">
      Explore our curated selection of unique and captivating properties.
      </p>


      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 mb-10">
        {products.map((product, index) => (
          <div key={index}>
            <TourExperienceCard
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              day={product.day}
              ratting={product.ratting}
            ></TourExperienceCard>
          </div>
        ))}
      </div>

      {/* Handle Pagination here  */}
      {/* total means all product  */}
      <Pagination total={50} defaultCurrent={1} />
    </section>
  );
};

export default CulturalTourItems;
