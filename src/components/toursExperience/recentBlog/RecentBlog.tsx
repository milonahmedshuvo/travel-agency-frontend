"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import vector1 from "../../../assets/logo/Vector 2.svg";


export default function TravelCarousel() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Sample data for the travel cards
  const travelCards = [
    {
      id: 1,
      title: "The Most Scenic Rural Roads To Take A Road Trip",
      description:
        "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point..",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7WHgC0c_tgTHQDex4Byf3H7ZSBElbI2M2g&s",
    },
    {
      id: 2,
      title: "The Most Scenic Rural Roads To Take A Road Trip",
      description:
        "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7WHgC0c_tgTHQDex4Byf3H7ZSBElbI2M2g&s",
    },
    {
      id: 3,
      title: "The Most Scenic Rural Roads To Take A Road Trip",
      description:
        "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7WHgC0c_tgTHQDex4Byf3H7ZSBElbI2M2g&s",
    },
    {
      id: 4,
      title: "The Most Scenic Rural Roads To Take A Road Trip",
      description:
        "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7WHgC0c_tgTHQDex4Byf3H7ZSBElbI2M2g&s",
    },
    {
      id: 5,
      title: "The Most Scenic Rural Roads To Take A Road Trip",
      description:
        "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7WHgC0c_tgTHQDex4Byf3H7ZSBElbI2M2g&s",
    },
    {
      id: 6,
      title: "The Most Scenic Rural Roads To Take A Road Trip",
      description:
        "When it comes to road trips, the journey itself often becomes just as memorable as the destination. While highways and city roads may get you from point A to point...",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7WHgC0c_tgTHQDex4Byf3H7ZSBElbI2M2g&s",
    },
  ];

  // Check if scroll buttons should be enabled/disabled
  const checkScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(
        container.scrollLeft <
          container.scrollWidth - container.clientWidth - 10
      );
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScrollButtons);
      // Initial check
      checkScrollButtons();
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollButtons);
      }
    };
  }, []);

  // Scroll to the next or previous card
  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (container) {
      const cardWidth = container.querySelector(".card-item")?.clientWidth || 0;
      const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };


  
  return (
    <div>
      <div className="w-full custom-container px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-black">Our </span>

              {/* <span className="text-[#FF9966] bg-cover bg-no-repeat" style={{backgroundImage: `url('${vector1.src}')`}} >Recent Blog</span> */}
              {/* <div className="w-[120px] md:w-[180px] h-10  mt-1 rounded-full bg-cover bg-no-repeat "> </div> */}

              <span  className="relative text-[#FF9966]">
                Recent Blog
                <span
                  className="absolute left-1/2 top-full -translate-x-1/2 w-full h-5 bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url('${vector1.src}')` }}
                ></span>
              </span >

            </h2>
            <p className="text-gray-700 mt-10 max-w-2xl">
              Get expert travel tips, destination guides, and exclusive insights
              to make your next adventure unforgettable.
            </p>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-lg px-6 py-3 self-start sm:self-center">
              See All
          </button>
        </div>
      </div>

      <div className="px-4 py-12 relative xl:pl-[10%]">
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
          className="absolute z-10 left-[8%] top-1/2 transform -translate-y-1/2 bg-[#156CF0] text-white p-2 rounded-full shadow-md disabled:opacity-0"
          aria-label="Previous card"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto gap-6 pb-4 scrollbar-hide snap-x"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {travelCards.map((card) => (
            <div
              key={card.id}
              className="card-item flex-shrink-0 w-[calc(100%/3.5-16px)] min-w-[280px] bg-white rounded-3xl  overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 snap-start"
            >
              <div className="relative h-[350px] w-full">
                <Image
                  src={card.imageUrl || "/placeholder.svg"}
                  alt="Scenic travel destination"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <div className="flex justify-end">
                  <a
                    href="#"
                    className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
          className="absolute z-10  right-[8%] top-1/2 transform -translate-y-1/2 bg-[#156CF0] text-white p-2 rounded-full shadow-md disabled:opacity-0 "
          aria-label="Next card"
        >
          <ChevronRight className="h-8 w-8" />
        </button>

        {/* Right-side Gradient Overlay */}
        <div className="absolute right-0 top-0 h-full w-1/5 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none"></div>
      </div>
    </div>
  );
}
