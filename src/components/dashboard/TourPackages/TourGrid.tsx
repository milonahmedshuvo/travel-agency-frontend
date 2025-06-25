"use client";

import TourExperienceCardDashboard from "@/components/card/tourExCard/TourExCardDashboard";
import { TTourPackage } from "@/components/lib/types";
import Loading from "@/components/shared/loading/Loading";
import { getBaseUrl } from "@/config/base-url";
import { Plus } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function TourGrid() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("ALL");

  const [tourPackages, setTourPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        // Build URL based on tab
        let url = `${getBaseUrl()}/tour-packages`;
        if (selectedSort !== "ALL") {
          url += `?category=${selectedSort}`;
        }

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        setTourPackages(data?.data || []);
      } catch (error) {
        console.error("Failed to fetch tours:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, [selectedSort]);

  if (loading) {
    return <Loading />;
  }

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSelectType = (data: string) => {
    setSelectedSort(data);
    setIsDropdownOpen(false);
  };

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-[23px] font-[500] text-[#000E19]">
          Sea All Tour Packages
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by:</span>
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center justify-between w-[180px] px-3 py-2 text-sm bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <span>{selectedSort}</span>
                <svg
                  className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                  <ul className="py-1">
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("SEA_TOUR")}
                    >
                      Sea Tour
                    </li>
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("LAND_TOUR")}
                    >
                      Land Tour
                    </li>
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("CULTURAL_TOUR")}
                    >
                      Cultural Tour
                    </li>
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("GASTRO_WINE_TOUR")}
                    >
                      Gastro Wine Tour
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <Link href="/dashboard/addTourPackages">
            <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-linear-to-t from-[#156CF0]  via-50%  to-[#38B6FF] to-50% rounded-md  transition-colors">
              <Plus className="h-4 w-4 mr-2" /> Add Packages
            </button>
          </Link>
        </div>
      </div>


      {tourPackages.length > 0 ? (
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
          {tourPackages?.map((product: TTourPackage, index: number) => (
            <div key={index}>
              <TourExperienceCardDashboard
                id={product.id}
                imageUrl={product.images?.[1]?.url}
                title={product.title}
                price={`$${product.price}`}
                day={`${product.duration} Days Trip`}
                ratting={""}
              ></TourExperienceCardDashboard>
            </div>
          ))}
        </div>
      ) : (
        <p className="mt-10">No tours found for this category.</p>
      )}
    </div>
  );
}
