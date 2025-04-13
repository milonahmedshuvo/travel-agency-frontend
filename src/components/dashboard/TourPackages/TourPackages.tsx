import Image from "next/image";
import { MapPin, Clock, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import popular from "../../../assets/avatars/popular.jpg";
import SeaImg from "../../../assets/avatars/sea.jpg";
import Header from "../Header/Header";





export default function TourPackages() {
  return (
      <div> 
       <Header/>    
    <div  className="container mx-auto px-3.5 lg:px-0  py-6">

      <h1 className="text-[#101010] text-[24px] font-[500] mb-6">
        Tour Packages
      </h1>



      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">


        {/* Left Column - New Package */}
        <div className="lg:col-span-2">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#101010] text-[14px] font-[500]">
              New Package
            </h2>
            <button className="bg-linear-to-t from-[#156CF0]  via-50%  to-[#38B6FF] to-50% px-4 py-1.5 rounded flex items-center justify-center text-white ">
              <Plus className="h-4 w-4 mr-2" /> Add Package
            </button>
          </div>

          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3">
              {/* Package Images */}
              <div className="relative h-full">
                <div
                  className="col-span-2 row-span-2 relative h-full bg-cover bg-no-repeat "
                  style={{ backgroundImage: `url('${SeaImg.src}')` }}
                >
                  
                  <div className="flex justify-end items-end h-full pb-9 gap-2">
                    <Image
                      src={popular}
                      alt="Maldives beach"
                      width={100}
                      height={0}
                      className="object-cover border h-[90px] rounded-lg"
                    />

                    <Image
                      src={popular}
                      alt="Maldives beach"
                      width={100}
                      height={0}
                      className="object-cover border h-[90px] rounded-lg"
                    />

                    <Image
                      src={SeaImg}
                      alt="Maldives beach"
                      width={100}
                      height={0}
                      className="object-cover border h-[90px] rounded-lg"
                    />
                  </div>
                </div>
              </div>

              {/* Package Details */}
              <div className="p-6 md:col-span-1">
                <div className="flex flex-col h-full">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Sea Tour</h3>
                    <div className="flex items-center text-gray-500 mb-4">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>Maldives</span>
                    </div>

                    <p className="text-gray-600 mb-6">
                      Escape to a tropical haven where pristine beaches, lush
                      greenery, and luxurious accommodations await. Perfect for
                      those looking to unwind and experience the ultimate
                      relaxation.
                    </p>
                  </div>

                  <div className="mt-auto">
                    <div className="space-y-8">
                      <div className="flex flex-col sm:flex-row justify-between items-start  gap-4">
                        <div>
                          <div className="text-sm text-gray-500">Price:</div>
                          <div className="text-2xl font-bold text-[#FF914D]">
                            $2,100
                          </div>
                          <div className="text-sm text-gray-500">
                            per person
                          </div>
                        </div>

                        <div className="flex flex-col items-end">
                          <div className="text-sm text-gray-500">Duration:</div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1 text-gray-500" />
                            <span>1 day 5 hr</span>
                          </div>
                        </div>
                      </div>

                      <div className="w-full sm:w-auto bg-linear-to-t from-[#156CF0]  via-50%  to-[#38B6FF] to-50% rounded py-3 text-center text-white font-[500] ">
                        <button>Edit Detail</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* thrid icon  */}
              <div className="p-6 md:col-span-1 bg-[#F7F8F8]">
                <div className="grid grid-cols-1  gap-4 mb-6">
                  <div className="flex gap-3 md:col-span-2   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-badge-check-icon lucide-badge-check"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Sustainability</h4>
                      <p className="text-sm text-[#757D83]">
                        Partnering with the local community to preserving marine
                        life and supporting local communities
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 md:col-span-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-badge-check-icon lucide-badge-check"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Sustainability</h4>
                      <p className="text-sm text-[#757D83]">
                        Partnering with the local community to preserving marine
                        life and supporting local communities
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3 md:col-span-2   ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="64"
                      height="34"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-badge-check-icon lucide-badge-check"
                    >
                      <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                    <div>
                      <h4 className="font-medium">Sustainability</h4>
                      <p className="text-sm text-[#757D83]">
                        Partnering with the local community to preserving marine
                        life and supporting local communities
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Right Column - Popular Packages */}
        <div>
          <h2 className="text-lg font-medium mb-4">Popular Packages</h2>

          <div className="space-y-3">
            {popularPackages.map((pkg, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="flex flex-row h-[110px]">
                  <div className="relative w-1/3 ">
                    <Image
                      src={pkg.image || popular}
                      alt={pkg.title}
                      fill
                      className="object-cover p-3 rounded"
                    />
                  </div>
                  <CardContent className="w-2/3 p-3">
                    <h3 className="font-bold">{pkg.title}</h3>
                    <div className="flex items-center text-xs text-gray-500 mb-2">
                      <MapPin className="h-3 w-3 mr-1" />
                      <span>{pkg.location}</span>
                    </div>
                    <div className="text-lg font-bold text-[#FF914D] flex items-center gap-10 ">
                      <span>${pkg.price}</span>{" "}
                      <span className="text-[#B3B7BA] text-[12px] font-[200]">
                        4.5/5
                      </span>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
        
      </div>
    </div>
    </div>
  );
}





const popularPackages = [
  {
    title: "Alpine Escape",
    location: "Swiss Alps, Switzerland",
    price: "2,100",
    rating: "4.6",
    image: popular,
  },
  {
    title: "Caribbean Cruise",
    location: "Caribbean Islands",
    price: "2,100",
    rating: "4.5",
    image: popular,
  },
  {
    title: "Parisian Romance",
    location: "Paris, France",
    price: "2,100",
    rating: "4.5",
    image: popular,
  },
  {
    title: "Greek Island Hopping",
    location: "Athens, Mykonos and Crete",
    price: "2,100",
    rating: "4.5",
    image: popular,
  },
];
