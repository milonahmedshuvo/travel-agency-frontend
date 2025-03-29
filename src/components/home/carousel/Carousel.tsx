"use client";
import img1 from "../../../assets/carousel/img1.jpg";
import img2 from "../../../assets/carousel/img2.jpg";
import img3 from "../../../assets/carousel/img3.jpg";
import img4 from "../../../assets/carousel/img4.jpg";
import img5 from "../../../assets/carousel/img5.jpg";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useState, useEffect } from "react";
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
  { id: 9, name: "Product 9", image: img4 },
  { id: 10, name: "Product 10", image: img5 },
];

export default function ResponsiveCarousel() {
  const [index, setIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4.5); // Default for large screens
  const totalItems = products.length;

  // 🛠 Responsive Breakpoints for Items Per Page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(4.5); // Large Screens
      } else if (window.innerWidth >= 768) {
        setItemsPerPage(3); // Tablets
      } else if (window.innerWidth >= 640) {
        setItemsPerPage(2); // Small Screens
      } else {
        setItemsPerPage(1); // Extra Small Screens
      }
    };

    updateItemsPerPage(); // Call on mount
    window.addEventListener("resize", updateItemsPerPage);
    return () => window.removeEventListener("resize", updateItemsPerPage);
  }, []);

  // 📌 Calculate Scroll Width Per Device
  const itemWidthPercentage = 100 / itemsPerPage; // Width for each item in %

  const handleNext = () => {
    if (index < totalItems - itemsPerPage) {
      setIndex((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <div>
      <h1 className="font-semibold text-[30px] md:text-[42px] lg:text-[48px] text-center">
        Top <span className="text-[#FF914D]">Destinations &</span>
      </h1>
      <h1 className="font-semibold text-[30px] md:text-[42px] lg:text-[48px] text-center">
        <span className="text-[#FF914D]">Featured </span>Tours
      </h1>

      <p className="text-[#333333] text-[14px] md:text-[16px] font-normal text-center max-w-lg mx-auto my-3 md:my-6">
        Explore Our Bestselling Experiences. Discover top-rated adventures
        handpicked by travelers like you!
      </p>

      <div className="relative w-full p-4 overflow-hidden custom-container">
        <div className="flex items-center">
          {/* Left Button */}
          <button
            onClick={handlePrev}
            disabled={index === 0}
            className="absolute left-4 md:left-6 lg:left-8 top-1/2 transform -translate-y-1/2 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white p-2 rounded-full disabled:opacity-0 z-10"
          >
            <GoArrowLeft size={24} />
          </button>

          {/* Product Container */}
          <div className="w-full overflow-hidden">
            <motion.div
              animate={{ x: `-${index * 10}%` }}
              transition={{ type: "tween", duration: 0.5 }}
              className="flex gap-4"
              style={{ width: `${(totalItems / itemsPerPage) * 100}%` }} // Scroll Width Based on Device
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-2 h-[320px] md:h-[350px] lg:h-[369px] rounded-lg text-center relative"
                  style={{ width: `${itemWidthPercentage}%` }} // Dynamic Width for Each Device
                >
                  <Image
                    src={product.image}
                    width={500}
                    height={500}
                    alt="img"
                    className="w-full h-full object-cover rounded-md"
                  />

                  <div className="text-sm absolute top-[20px] right-[20px] bg-[#ffffff] rounded-full px-2.5 flex gap-1.5 items-center">
                    <MdOutlineStarPurple500 className="text-[#FFB525]" />
                    <span>5.0</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Button */}
          <button
            onClick={handleNext}
            disabled={index + itemsPerPage >= totalItems}
            className="absolute right-4 md:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white p-2 rounded-full delay-200 ease-in-out disabled:opacity-0"
          >
            <GoArrowRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}
