"use client";

import TourExperienceCard from "@/components/card/tourExCard/TourExCard";
import { TTourPackage } from "@/components/lib/types";
import Loading from "@/components/shared/loading/Loading";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const TourExperienceAllCategory = () => {
  const [activeTab, setActiveTab] = useState("SEA_TOUR");
  const [tourPackages, setTourPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  
  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem('token')
        const response = await fetch(
          `https://supermariobos-api.code-commando.com/api/v1/tour-packages?category=${activeTab}`,{
            method: "GET",
            headers: {
                "Content-Type": "Application/json",
                Authorization: `Bearer ${token}`,
            }
          }
        );
        const data = await response.json();
        setTourPackages(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch tours:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [activeTab]);

  if(loading){
    return <Loading/>
  }





  console.log('curent tour data', tourPackages)



  return (
    <div>
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
          <div className="flex items-center">
            <Link href="/toursExperience">
              <p className="text-blue-600 hover:underline cursor-pointer">See All</p>
            </Link>
            <ChevronRight className="w-[18px]" />
          </div>
        </div>

        {/* Button group */}
        <div className="flex flex-wrap gap-3.5 lg:gap-4 mt-6">
          {[
            { id: "SEA_TOUR", label: "Sea Tours" },
            { id: "LAND_TOUR", label: "Land Tours" },
            { id: "CULTURAL_TOUR", label: "Cultural Tours" },
            { id: "GASTRO_WINE_TOUR", label: "Gastro & Wine Tours" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id
                  ? "bg-gradient-to-t from-[#156CF0] to-[#38B6FF] text-white"
                  : "border border-[#333333] focus:bg-gradient-to-t from-[#156CF0] to-[#38B6FF] focus:text-white focus:border-0"
              } rounded-lg px-6.5 py-2.5 cursor-pointer focus:outline-none`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tour Package Content */}

        {
            tourPackages.length > 0 ? <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
        {tourPackages?.slice(0, 8)?.map((product:TTourPackage, index:number) => (
          <div key={index}>
            <TourExperienceCard
               id={product.id}
              imageUrl={product.images?.[1]?.url  }
              title={product.title}
              price={`$${product.price}`}
              day={`${product.duration} Days Trip`}
              ratting={'5.0'}
            ></TourExperienceCard>
          </div>
        ))}
        
      </div> : <p className="mt-10">No tours found for this category.</p>
        }

        
        
      </div>
    </div>
  );
};

export default TourExperienceAllCategory;
