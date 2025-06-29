"use client"

import { useState, useEffect,  } from "react"
import { Search, SlidersHorizontal, User, ChevronRight, ChevronLeft } from "lucide-react"
import Image from "next/image"
import { useGetAllTourCencelPackageQuery } from "@/redux/api/tourPackages/tourPackagesApi"
import Loading from "@/components/shared/loading/Loading"
import { CustomButton } from "@/components/ui/CustomButton"
export interface TourBooking {
  id: string;
  tourPackageId: string;
  availableDate: string;
  duration: number;
  groupSize: number;
  customerId: string;
  isCancelled: boolean;
  cancelReason: string;
  isPaid: boolean;
  isVehicleBooking: boolean;
  createdAt: string;
  updatedAt: string;
  guests: Guest[];
  vehicleBooking: null;
  transactions: Transaction | null;
  splitPayment: SplitPayment | null;
  tourPackage: TourPackage;
  customer: Customer;
}

export interface Guest {
  id: string;
  fullName: string;
  email: string;
  isAdult: boolean;
  age: number;
  contactNo: string;
  requestMessage: string;
  tourBookingId: string;
  roomBookingId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  billingAddress: string | null;
  paymentMethodType: "PAYPAL" | string;
  paymentMethodId: string;
  clientSecret: string;
  splitPaymentType: "INITIAL" | "FINAL" | string;
  splitWithId: string;
  status: "SUCCEEDED" | "PROCESSING" | "REQUIRES_PAYMENT_METHOD" | string;
  tourBookingId: string;
  roomBookingId: string | null;
  vehicleBookingId: string | null;
  customerId: string;
  createdAt: string;
  updatedAt: string;
}

export interface SplitPayment {
  id: string;
  initialPaymentTransactionId: string;
  finalPaymentTransactionId: string;
  roomBookingId: string | null;
  tourBookingId: string;
  paymentStatus: "PROCESSING" | "SUCCEEDED" | "FAILED" | string;
}

export interface TourPackage {
  id: string;
  title: string;
  description: string;
  slug: string;
  location: string;
  tourType: string;
  category: string;
  duration: number;
  price: number;
  isVehicleService: boolean;
  packageDate: string;
  createdAt: string;
  updatedAt: string;
  includes: PackageItem[];
  excludes: PackageItem[];
}

export interface PackageItem {
  title: string;
}

export interface Customer {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  location: string | null;
  createdAt: string;
  updatedAt: string;
  user: User;
}

export interface User {
  id: string;
  username: string;
  email: string;
  contactNo: string;
  password: string;
  role: "CUSTOMER" | "ADMIN" | string;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
  userStatus: "ACTIVE" | "INACTIVE" | string;
}




















// const packages = ["All Packages", "Sea Tour", "Land Tour", "Cultural Tours",]





export default function TravelerList() {
    const [searchQuery, setSearchQuery] = useState("")
  const {data, isLoading } = useGetAllTourCencelPackageQuery("")
  console.log(data?.data)

  const cencelPackages = data?.data

  
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10
  const totalPages = Math.ceil(cencelPackages?.length / itemsPerPage)

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = cencelPackages?.slice(indexOfFirstItem, indexOfLastItem)

  

 


  const filterRoomBooking = currentItems?.filter(
    (booking: TourBooking) =>
      booking?.customer?.firstName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      booking?.customer?.user?.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dateFormated = (date: string) => {
    const formatedDate = new Date(date);
    const stringFormatedDated = formatedDate.toLocaleDateString();
    return stringFormatedDated;
  };


  
















  // const [selectedPackage, setSelectedPackage] = useState("All Packages")
  // // Dropdown state
  // const [packageDropdownOpen, setPackageDropdownOpen] = useState(false)


  // // Refs for dropdown click outside detection
  // const packageDropdownRef = useRef<HTMLDivElement>(null)


  // Mobile detection
  const [isMobile, setIsMobile] = useState(false)

  // Handle window resize for mobile detection
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Initial check
    handleResize()

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  
 

  



if(isLoading){
    return <Loading/>
  }


    

  return (
    <div className="space-y-4 px-4 md:px-6 mt-7">
        <h1 className="text-[#101010] text-[22px] font-[500]  mb-6">Traveler List</h1>
        
      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row justify-between gap-4">
        <div className="flex flex-wrap gap-2">
          {/* Package Dropdown */}
          {/* <div className="relative" ref={packageDropdownRef}>
            <button
              className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md bg-white hover:bg-gray-50"
              onClick={() => setPackageDropdownOpen(!packageDropdownOpen)}
            >
              {selectedPackage} <ChevronDown className="h-4 w-4" />
            </button>

            {packageDropdownOpen && (
              <div className="absolute z-10 mt-1 w-56 rounded-md bg-white shadow-lg border border-gray-200">
                <div className="py-1">
                  {packages.map((pkg) => (
                    <button
                      key={pkg}
                      className={`block w-full text-left px-4 py-2 text-sm ${selectedPackage === pkg ? "bg-gray-100" : "hover:bg-gray-50"}`}
                      onClick={() => {
                        setSelectedPackage(pkg)
                        setPackageDropdownOpen(false)
                      }}
                    >
                      {pkg}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div> */}

          {/* Member Category Dropdown */}
        
        </div>

        <div className="relative w-full sm:w-auto max-w-sm">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
          <input
            type="search"
            placeholder="Search name, address, job, etc."
            className="w-full pl-8 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-2 top-2 text-gray-400 hover:text-gray-600">
            <SlidersHorizontal className="h-4 w-4" />
          </button>
        </div>
      </div>




      {/* Table */}
      <div className="rounded-md  bg-white overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#E8F5FF]">
              <tr>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                 
                >
                  Name 
                </th>
                {!isMobile && (
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                )}
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  
                >
                  Phone Number 
                </th>
                <th
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                  
                >
                  Packages 
                </th>
                {!isMobile && (
                  <th
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer"
                    
                  >
                    Cancel Reason{" "}
                   
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">


              {filterRoomBooking?.length > 0 ? (
                filterRoomBooking?.map((traveler:TourBooking) => (
                  <tr key={traveler.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                          {traveler.customer?.user?.avatar ? (
                            <Image
                              src={traveler?.customer?.user?.avatar || "/placeholder.svg"}
                              width={500}
                              height={500}
                              alt={traveler.customer?.firstName}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                ;(e.target as HTMLImageElement).style.display = "none"
                              }}
                            />
                          ) : null}
                          <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
                            {/* {getInitials(traveler?.customer?.firstName)} */}
                            {
                              traveler?.customer?.firstName.slice(0, 2)
                            }
                          </span>
                        </div>
                        <div>
                          <div className="font-medium text-gray-900">{traveler?.customer?.firstName}</div>
                          <div className="text-sm text-gray-500">{traveler?.customer?.user?.email}</div>
                        </div>
                      </div>
                    </td>
                    {!isMobile && (
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        
                       {
                        dateFormated(traveler.createdAt)
                       }
                        </td>
                    )}
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{traveler?.customer?.user?.contactNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{traveler?.tourPackage?.category}</td>
                    {!isMobile && (
                      <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate">{traveler.cancelReason}</td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={isMobile ? 3 : 5} className="px-6 py-8 text-center text-sm text-gray-500">
                    No travelers found matching your criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}

       <div className="mt-4 flex items-center justify-between">
                     <div className="text-sm text-muted-foreground">
                       {/* Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, tourBookings?.data?.length)} out of {tourBookings?.data?.length} */}
                     </div>
                     <div className="flex items-center space-x-2">
                       <CustomButton
                         variant="outline"
                         size="icon"
                         onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                         disabled={currentPage === 1}
                       >
                         <ChevronLeft className="h-4 w-4" />
                       </CustomButton>
           
           
                       {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                         // Show current page and surrounding pages
                         let pageToShow
                         if (totalPages <= 5) {
                           pageToShow = i + 1
                         } else if (currentPage <= 3) {
                           pageToShow = i + 1
                         } else if (currentPage >= totalPages - 2) {
                           pageToShow = totalPages - 4 + i
                         } else {
                           pageToShow = currentPage - 2 + i
                         }
           
                         return (
                           <CustomButton
                             key={i}
                             variant={currentPage === pageToShow ? "default" : "outline"}
                             size="icon"
                             onClick={() => setCurrentPage(pageToShow)}
                             className={currentPage === pageToShow ? "bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF]" : ""}
                           >
                             {pageToShow}
                           </CustomButton>
                         )
                       })}
                       {totalPages > 5 && currentPage < totalPages - 2 && (
                         <>
                           <span className="text-muted-foreground">...</span>
                           <CustomButton variant="outline" size="icon" onClick={() => setCurrentPage(totalPages)}>
                             {totalPages}
                           </CustomButton>
                         </>
                       )}
                       <CustomButton
                         variant="outline"
                         size="icon"
                         onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                         disabled={currentPage === totalPages}
                       >
                         <ChevronRight className="h-4 w-4" />
                       </CustomButton>
                     </div>
                   </div>
      
    </div>
  )
}
