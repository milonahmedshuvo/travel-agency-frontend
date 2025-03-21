import React from "react";
import img1 from "../../../assets/card/tourexperience/img1.jpg";
import img2 from "../../../assets/card/tourexperience/img2.jpg";
import img3 from "../../../assets/card/tourexperience/img3.jpg";
import img4 from "../../../assets/card/tourexperience/img4.jpg";
import img5 from "../../../assets/card/tourexperience/img5.jpg";
import img6 from "../../../assets/card/tourexperience/img6.jpg";
import img7 from "../../../assets/card/tourexperience/img7.jpg";
import img8 from "../../../assets/card/tourexperience/img8.jpg";
import img9 from "../../../assets/card/tourexperience/img9.jpg";
import img10 from "../../../assets/card/tourexperience/img10.jpg";
import img11 from "../../../assets/card/tourexperience/img11.jpg";
import img12 from "../../../assets/card/tourexperience/img12.jpg";
import img13 from "../../../assets/card/tourexperience/img13.jpg";
import img14 from "../../../assets/card/tourexperience/img14.jpg";
import TourExperienceCard from "@/components/card/tourExCard/TourExCard";
import Pagination from "@/components/others/pagination/Pagination";

const TourAllExperience = () => {
  const products = [
    {
      imageUrl: img11,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img2,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img13,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img4,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img5,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img6,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img2,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img1,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img8,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img9,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img10,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img11,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img12,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img13,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img14,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img3,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img4,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img7,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img8,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
    {
      imageUrl: img9,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
    },
  ];

  return (
    <div className="custom-container">
      <h1 className="font-semibold text-[48px] text-center">
        Featured <span className="text-[#FF914D]">Accommodations</span>
      </h1>
      <p className="text-[#333333] text-[16px] text-center font-normal mt-1.5">
        Hit the open road and explore in style with the perfect bike, scooter,
        car, boat tour for your needs.
      </p>

      {/* button group  */}
      <div className="flex flex-col md:flex-row gap-3.5 lg:gap-4 mt-6 justify-center items-center">
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer hover:bg-[#156CF0] hover:text-[#ffffff]  hover:border-[#156CF0]">
          Bike Tour
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:bg-[#156CF0]  hover:text-[#ffffff] hover:border-[#156CF0]  ">
          Scooter Tour
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:bg-[#156CF0] hover:text-[#ffffff] hover:border-[#156CF0]  ">
          Car Tour
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:bg-[#156CF0] hover:text-[#ffffff] hover:border-[#156CF0]  ">
          Boat Tour
        </button>
      </div>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 mb-10">
        {products.map((product, index) => (
          <div key={index}>
            <TourExperienceCard
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
    </div>
  );
};

export default TourAllExperience;
