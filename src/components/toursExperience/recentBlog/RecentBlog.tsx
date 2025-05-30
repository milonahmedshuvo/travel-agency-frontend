"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import vector1 from "../../../assets/logo/Vector 2.svg";
import Link from "next/link";
import { useGetAllBlogsQuery } from "@/redux/api/blog/blogApi";
import Loading from "@/components/shared/loading/Loading";

interface TBlogs {
  createdAt: string;
  description: string;
  id: string;
  img: string;
  slug: string;
  title: string;
  subTitle:string;
  updatedAt: string;
}



export default function RecentBlog() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
   const { data, isLoading } = useGetAllBlogsQuery("");
  

   


  
  

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



  if(isLoading){
    return <Loading/>
  }

  return (
    <section>
      <div className="w-full px-4  relative xl:pl-[10%] xl:pr-[10%] py-11">

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold">
              <span className="text-black">Our </span>
              <span className="relative text-[#FF9966]">
                Recent Blog
                <span
                  className="absolute left-1/2 top-full -translate-x-1/2 w-full h-5 bg-cover bg-no-repeat"
                  style={{ backgroundImage: `url('${vector1.src}')` }}
                ></span>
              </span>
            </h2>
            <p className="text-gray-700 mt-10 max-w-2xl">
              Get expert travel tips, destination guides, and exclusive insights
              to make your next adventure unforgettable.
            </p>
          </div>
          <Link href="/blog">
            <button className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white rounded-lg px-6 py-3 self-start sm:self-center cursor-pointer">
              See All
            </button>
          </Link>
        </div>
      </div>







      <div className="px-4  relative xl:pl-[10%]">
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
          {data?.data?.data?.map((card:TBlogs) => (
            <div
              key={card.id}
              className="card-item flex-shrink-0 w-[calc(100%/3.5-16px)] min-w-[280px] bg-white rounded-3xl  overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 snap-start"
            >
              <div className="relative h-[350px] w-full">
                <Link href={`/blog/${card.id}`}>
                  <Image
                    src={card.img || "/placeholder.svg"}
                    alt="Scenic travel destination"
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </Link>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-medium text-gray-800 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.subTitle}</p>
                <div className="flex justify-end">
                  <Link
                    href={`/blog/${card.id}`}
                    className="inline-flex items-center text-blue-500 font-medium hover:text-blue-700 transition-colors"
                  >
                    Read More
                    <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
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
    </section>
  );
}
