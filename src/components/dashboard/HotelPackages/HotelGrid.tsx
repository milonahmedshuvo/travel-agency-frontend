"use client";

import { useEffect, useState } from "react"
import Loading from "@/components/shared/loading/Loading"
import Link from "next/link"
import { Plus } from "lucide-react"
import { THotelPackage } from "@/components/lib/types"
import CustomPagination from "@/components/others/pagination/CustomPagination"
import AccommodationCard from "@/components/card/accommodationCard/AccommodationCard";

// Utility function to get the base URL
function getBaseUrl() {
  if (typeof window !== "undefined") {
    // Adjust this as needed for your environment
    return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";
  }
  return process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api";
}

export function HotelGrid() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("ALL");

  const [hotelPackages, setHotelPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [newPage, setNewPage] = useState(0);

  useEffect(() => {
    const fetchTours = async () => {
      setLoading(true);
      try {
        const token = localStorage.getItem("token");

        // Build URL based on tab
        let url = `${getBaseUrl()}/hotel-packages`;
        if (selectedSort !== "ALL") {
          url += `?roomCategory=${selectedSort}`;
        }

        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await response.json();
        // console.log("HOtel packages", data?.meta?.totalPage)
        // setTotalPages( data?.meta?.totalPage)
        setHotelPackages(data?.data || []);
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

  //  console.log("hotel type", selectedSort)
  //  console.log("HOtel packages", hotelPackages)
  console.log(newPage);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-[23px] font-[500] text-[#000E19]">
          Sea All Room Packages
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
                      onClick={() => handleSelectType("SINGLE")}
                    >
                      SINGLE
                    </li>
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("DOUBLE")}
                    >
                      DOUBLE
                    </li>
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("SUITE")}
                    >
                      SUITE
                    </li>
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("TRIPLE")}
                    >
                      TRIPLE
                    </li>

                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("SUITE")}
                    >
                      SUITE
                    </li>

                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("DELUXE")}
                    >
                      DELUXE
                    </li>
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("FAMILY")}
                    >
                      FAMILY
                    </li>
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("EXECUTIVE")}
                    >
                      EXECUTIVE
                    </li>
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("PRESIDENTIAL")}
                    >
                      PRESIDENTIAL
                    </li>
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("STUDIO")}
                    >
                      STUDIO
                    </li>
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("PRESIDENTIAL")}
                    >
                      PRESIDENTIAL
                    </li>
                    <li
                      className="px-3 py-2 text-sm hover:bg-gray-100 cursor-pointer"
                      onClick={() => handleSelectType("APARTMENT")}
                    >
                      APARTMENT
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          <Link href="/dashboard/addHotelPackages">
            <button className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-linear-to-t from-[#156CF0]  via-50%  to-[#38B6FF] to-50% rounded-md  transition-colors">
              <Plus className="h-4 w-4 mr-2" /> Add Packages
            </button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hotelPackages?.map((product: THotelPackage, index: number) => (
          <div key={index}>
            <AccommodationCard
              id={product.id}
              imageUrl={product?.images[1]?.url}
              title={product.title}
              address={"address"}
              price={product.price}
              ratting={"5.0"}
            />
          </div>
        ))}
      </div>

      {/* call custom pagination handle here  */}
      <CustomPagination
        meta={{
          page: 3,
          limit: 10,
          total: 100,
          totalPage: 5,
        }}
        onPageChange={(newPage) => {
          console.log("Go to page:", newPage);
          // fetch new data here
          setNewPage(newPage);
        }}
      />
    </div>
  );
}
