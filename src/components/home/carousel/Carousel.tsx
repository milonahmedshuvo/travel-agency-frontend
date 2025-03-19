/* eslint-disable @next/next/no-img-element */
"use client";
import img1 from "../../../assets/carousel/img1.jpg";
import img2 from "../../../assets/carousel/img2.jpg";
import img3 from "../../../assets/carousel/img3.jpg";
import img4 from "../../../assets/carousel/img4.jpg";
import img5 from "../../../assets/carousel/img5.jpg";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { MdOutlineStarPurple500 } from "react-icons/md";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  { id: 1, name: "Product 1", image: img1 },
  { id: 2, name: "Product 2", image: img2 },
  { id: 3, name: "Product 3", image: img3 },
  { id: 4, name: "Product 4", image: img4 },
  { id: 5, name: "Product 5", image: img5 },
  { id: 6, name: "Product 6", image: img1 },
  { id: 7, name: "Product 7", image: img2 },
  { id: 8, name: "Product 8", image: img3 },
  { id: 9, name: "Product 8", image: img4 },
  { id: 10, name: "Product 5", image: img5 },
];

export default function ProductCarousel() {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4.5;
  const [direction, setDirection] = useState(1);

  const handleNext = () => {
    if (startIndex + itemsPerPage < products.length) {
      setDirection(1);
      setStartIndex(startIndex + Math.floor(itemsPerPage));
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex(Math.max(startIndex - Math.floor(itemsPerPage), 0));
    }
  };

  return (
    <div>
      <h1 className="font-semibold text-[48px] text-center">
        Top <span className="text-[#FF914D]">Destinations &</span>
      </h1>
      <h1 className="font-semibold text-[48px] text-center">
        {" "}
        <span className="text-[#FF914D]">Featured </span>Tours
      </h1>

      <p className="text-[#333333] text-[16px] font-normal text-center max-w-lg mx-auto my-3 md:my-6">
        Explore Our Bestselling Experiences. Discover top-rated adventures
        handpicked by travelers like you!
      </p>

      <div className="relative w-full p-4 overflow-hidden custom-container">
        <div className="flex items-center">
          <button
            onClick={handlePrev}
            disabled={startIndex === 0}
            className="absolute left-[29px] top-1/2 transform -translate-y-1/2 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white p-2 rounded-full disabled:opacity-0 z-10"
          >
            <GoArrowLeft size={24} />
          </button>

          <div className="w-full overflow-hidden">
            <motion.div
              key={startIndex}
              initial={{ x: direction === 1 ? "100%" : "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: direction === 1 ? "-100%" : "100%", opacity: 0 }}
              transition={{ type: "tween", duration: 0.5 }}
              className="flex gap-4 justify-center"
              style={{ width: "110%" }}
            >
              {products
                .slice(startIndex, startIndex + Math.ceil(itemsPerPage))
                .map((product, index) => (
                  <div
                    key={product.id}
                    className={`p-2  h-[369px] rounded-lg text-center z-0 relative ${
                      index === itemsPerPage - 1 ? "opacity-50 w-1/2" : "w-1/5"
                    }`}
                  >
                    <Image
                      src={product.image}
                      width={500}
                      height={500}
                      alt="img"
                      className="w-full h-full object-cover rounded-md"
                    />

                    <div className="text-sm absolute top-[20px] right-[25px] bg-[#ffffff] rounded-full px-2.5 flex gap-1.5 items-center">
                      <MdOutlineStarPurple500 className="text-[#FFB525]"></MdOutlineStarPurple500>
                      <span>5.0</span>
                    </div>
                  </div>
                ))}
            </motion.div>
          </div>

          <button
            onClick={handleNext}
            disabled={startIndex + itemsPerPage >= products.length}
            className="absolute right-[23px] top-1/2 transform -translate-y-1/2 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white p-2 rounded-full delay-200 ease-in-out disabled:opacity-0"
          >
            <GoArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
