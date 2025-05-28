"use client";

import { useState } from "react";
import TabSeaTourCards from "./SeaTourCards";
import TabLandTourCards from "./LandTourCards";
import TabCulturalTourCards from "./CulturalTourCards";
import TabGrastroWineTourCards from "./GrastroWineTours";
import { ChevronRight } from 'lucide-react';
import Link from "next/link";




const TourExperience = () => {
  const [activeTab, setActiveTab] = useState("Sea Tours");

  const renderTab = () => {
    switch (activeTab) {
      case "Sea Tours":
        return <TabSeaTourCards />;

      case "Land Tours":
        return <TabLandTourCards />;

      case "Cultural Tours":
        return <TabCulturalTourCards />;

      case "Gastro & Wine Tours":
        return <TabGrastroWineTourCards />;

      default:
        return null;
    }
  };

  return (
    <div className="custom-container">

      <div className="flex justify-between items-center">

        <div>
          <h1 className="font-semibold text-[40px] md:text-[48px] ">
            Find Your <span className="text-[#FF914D]">Perfect Experience</span>
          </h1>
          <p className="text-[#333333] text-[16px] font-normal mt-1.5">
            Explore our curated selection of unique and captivating properties.
          </p>
        </div>

        <div className="flex">
            <Link href='/toursExperience'><p>See All</p></Link>
            <ChevronRight className="w-[18px]"/>
        </div>
      </div>

      {/* button group  */}
      <div className="flex flex-wrap gap-3.5 lg:gap-4 mt-6">
        <button
          onClick={() => setActiveTab("Sea Tours")}
          className={`${
            activeTab == "Sea Tours"
              ? " rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white "
              : "border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  focus:bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] focus:text-white focus:border-0"
          }`}
        >
          Sea Tours
        </button>

        <button
          onClick={() => setActiveTab("Land Tours")}
          className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  focus:bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] focus:text-white focus:border-0"
        >
          Land Tours
        </button>

        <button
          onClick={() => setActiveTab("Cultural Tours")}
          className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  focus:bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] focus:text-white focus:border-0"
        >
          Cultural Tours
        </button>
        <button
          onClick={() => setActiveTab("Gastro & Wine Tours")}
          className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  focus:bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] focus:text-white focus:border-0"
        >
          Gastro & Wine Tours
        </button>
        {/* <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  focus:bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] focus:text-white focus:border-0">
          Gastro & oliva oil Tour
        </button> */}
      </div>

      {/* tour card  */}
      {renderTab()}
    </div>
  );
};

export default TourExperience;
