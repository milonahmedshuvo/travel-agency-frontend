"use client"
import studyFemale from "../../../../assets/avatars/avaters1.png"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Search, SlidersHorizontal } from "lucide-react"
import Image from "next/image"
import Header from "@/components/dashboard/Header/Header"
import TravelarListModal from "@/components/dashboard/modal/TravelarListModal"
export interface TTravelersList {
  id: number | string,
  name: string,
  email: string,
  date: string,
  phone: string,
  package: string,
  address: string,
  avatar: string | null
}

const travelers = [
  {
    id: 1,
    name: "Camellia Swan",
    email: "camellia.swan@example.com",
    date: "March 12, 2025",
    phone: "+1 (555) 123-4567",
    package: "Sea Tour",
    address: "Bali, Indonesia",
    avatar: null,
  },
  {
    id: 2,
    name: "Raphael Goodman",
    email: "raphael.goodman@example.com",
    date: "March 12, 2025",
    phone: "+1 (555) 234-5678",
    package: "Land Tour",
    address: "Jakarta, Indonesia",
    avatar: null,
  },
  {
    id: 3,
    name: "Ludwig Contessa",
    email: "ludwig.contessa@example.com",
    date: "March 12, 2025",
    phone: "+1 (555) 345-6789",
    package: "Cultural Tours",
    address: "Bandung, Indonesia",
    avatar: null,
  },
  {
    id: 4,
    name: "Armina Raul Meyes",
    email: "armina.meyes@example.com",
    date: "March 12, 2025",
    phone: "+1 (555) 456-7890",
    package: "Sea Tour",
    address: "Surabaya, Indonesia",
    avatar: null,
  },
  {
    id: 5,
    name: "James Dunn",
    email: "james.dunn@example.com",
    date: "March 12, 2025",
    phone: "+1 (555) 567-8901",
    package: "Cultural Tours",
    address: "Yogyakarta, Indonesia",
    avatar: null,
  },
  {
    id: 6,
    name: "Hillary Grey",
    email: "hillary.grey@example.com",
    date: "March 12, 2025",
    phone: "+1 (555) 345-6780",
    package: "Sea Tour",
    address: "Melbourne, Australia",
    avatar: null,
  },
  {
    id: 7,
    name: "Lucas O'connor",
    email: "lucas.oconnor@example.com",
    date: "March 12, 2025",
    phone: "+1 (555) 901-2345",
    package: "Cultural Tours",
    address: "Munich, Germany",
    avatar: null,
  },
  {
    id: 8,
    name: "Layla Linch",
    email: "layla.linch@example.com",
    date: "March 12, 2025",
    phone: "+1 (555) 012-3456",
    package: "Sea Tour",
    address: "Cape Town, South Africa",
    avatar: null,
  },
  {
    id: 9,
    name: "Sophia Lee",
    email: "sophia.lee@example.com",
    date: "March 12, 2025",
    phone: "+1 (555) 678-9012",
    package: "Culinary & Wine Adventures",
    address: "Seoul, South Korea",
    avatar: null,
  },
  {
    id: 10,
    name: "Michael Smith",
    email: "michael.smith@example.com",
    date: "March 12, 2025",
    phone: "+1 (555) 789-0123",
    package: "Cultural Tours",
    address: "Sydney, Australia",
    avatar: null,
  },
  {
    id: 11,
    name: "Zaire Dorwart",
    email: "zaire.dorwart@example.com",
    date: "March 12, 2025",
    phone: "+1 (555) 345-7890",
    package: "Culinary & Wine Adventures",
    address: "Madrid, Spain",
    avatar: null,
  },
]

const packageOptions = [
  { value: "sea-tour", label: "Sea Tour" },
  { value: "land-tour", label: "Land Tour" },
  { value: "cultural-tours", label: "Cultural Tours" },
  { value: "culinary-wine", label: "Culinary & Wine Adventures" },
]

const categoryOptions = [
  { value: "regular", label: "Regular" },
  { value: "premium", label: "Premium" },
  { value: "vip", label: "VIP" },
]

const itemsOptions = [
  { value: "10", label: "10" },
  { value: "11", label: "11" },
  { value: "20", label: "20" },
  { value: "50", label: "50" },
  { value: "100", label: "100" },
]



export default function TravelerList() {
  const [packageFilter, setPackageFilter] = useState("")
  const [memberCategory, setMemberCategory] = useState("")
  const [searchQuery, setSearchQuery] = useState("")
  const [itemsPerPage, setItemsPerPage] = useState("11")
  const [showPackageDropdown, setShowPackageDropdown] = useState(false)
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false)
  const [showItemsDropdown, setShowItemsDropdown] = useState(false)
  
  const [showModal, setShowModal] = useState(false)
  const [selectedTraveler, setSelectedTraveler] = useState<TTravelersList | null >(null)

  

  
   
  const handleRowClick = (travelers:TTravelersList) => {
        setSelectedTraveler(travelers)
        setShowModal(true)
  }

  const closeModal = () => {
    setShowModal(false);
    setSelectedTraveler(null);
  };

  


  return (

    <div>
    <Header/>
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-medium mb-6">Traveler List</h1>



      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex flex-1 flex-col sm:flex-row gap-4">



          {/* Custom Package Dropdown */}
          <div className="relative w-full sm:w-[180px]">
            <button
              type="button"
              className="flex items-center justify-between w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setShowPackageDropdown(!showPackageDropdown)}
            >
              <span className="text-gray-500">{packageFilter || "Package"}</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showPackageDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className="py-1">
                  {packageOptions.map((option) => (
                    <li key={option.value}>
                      <button
                        type="button"
                        className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                        onClick={() => {
                          setPackageFilter(option.label)
                          setShowPackageDropdown(false)
                        }}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>



          {/* Custom Member Category Dropdown */}
          <div className="relative w-full sm:w-[180px]">
            <button
              type="button"
              className="flex items-center justify-between w-full px-3 py-2 text-sm bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
            >
              <span className="text-gray-500">{memberCategory || "Member Category"}</span>
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showCategoryDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className="py-1">
                  {categoryOptions.map((option) => (
                    <li key={option.value}>
                      <button
                        type="button"
                        className="block w-full px-4 py-2 text-sm text-left hover:bg-gray-100"
                        onClick={() => {
                          setMemberCategory(option.label)
                          setShowCategoryDropdown(false)
                        }}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>



        <div className="relative flex-1 mb-1">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            <Search className="h-4 w-4" />
          </div>
          <input
            type="text"
            className="w-full pl-10 pr-10 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Search name, address, job, etc"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
          >
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>






      <div className="bg-white border-0 rounded-lg  overflow-hidden ">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#E8F5FF]  text-left">
              <tr>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Phone Number</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Packages</th>
                <th className="px-6 py-3 text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
              </tr>
            </thead>


            <tbody className="divide-y divide-gray-200">
              {travelers.map((traveler) => (
                <tr key={traveler.id} className="hover:bg-gray-50" onClick={()=>handleRowClick(traveler)}>
                  <td className="px-6 py-6 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-sky-100 flex-shrink-0 rounded-full overflow-hidden">
                        <Image 
                          width={40}
                          height={40}
                          src={traveler.avatar || studyFemale}
                          alt={traveler.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">{traveler.name}</div>
                        <div className="text-sm text-gray-500">{traveler.email}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{traveler.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{traveler.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{traveler.package}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{traveler.address}</td>
                </tr>
              ))}
            </tbody>
          </table>
         {/* show modal  */}
         {
           showModal && selectedTraveler && <TravelarListModal 
           selectedTraveler={selectedTraveler} 
           closeModal={closeModal} 
         />
         }

        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 gap-4">
        <div className="text-sm text-gray-500 flex items-center">
          Showing
          <div className="relative mx-2">
            <button
              type="button"
              className="flex items-center justify-between w-[70px] px-2 py-1 text-sm bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={() => setShowItemsDropdown(!showItemsDropdown)}
            >
              <span>{itemsPerPage}</span>
              <svg
                className="w-4 h-4 ml-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {showItemsDropdown && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg">
                <ul className="py-1">
                  {itemsOptions.map((option) => (
                    <li key={option.value}>
                      <button
                        type="button"
                        className="block w-full px-2 py-1 text-sm text-left hover:bg-gray-100"
                        onClick={() => {
                          setItemsPerPage(option.value)
                          setShowItemsDropdown(false)
                        }}
                      >
                        {option.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          out of 1,450
        </div>

        <div className="flex items-center gap-1">
          <button
            type="button"
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous</span>
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center h-8 w-8 rounded-md bg-blue-600 text-white"
          >
            1
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          >
            2
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          >
            3
          </button>
          <span className="mx-1">...</span>
          <button
            type="button"
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          >
            16
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next</span>
          </button>
        </div>
      </div>

      <div className="mt-8 text-center text-sm text-gray-500">Copyright © 2024 Travel Agency</div>
    </div>
    </div>
  )
}
