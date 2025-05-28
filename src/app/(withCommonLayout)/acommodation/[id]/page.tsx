/* eslint-disable @next/next/no-img-element */
"use client";

import Image from "next/image";
import { useState } from "react";
import img1 from "../../../../assets/accom/img1.jpg";
import img2 from "../../../../assets/accom/img2.jpg";
import img3 from "../../../../assets/accom/img3.jpg";
import img4 from "../../../../assets/accom/img4.jpg";
import img5 from "../../../../assets/accom/img5.jpg";
import img6 from "../../../../assets/accom/img6.jpg";
import BookingCard from "@/components/common/bookingCard/BookingCard";
import RatingComponent from "@/components/common/rating/Rating";
import TourOverviewWithCalender from "@/components/common/tourOverviewCalender/TourOverviewCalender";
import { TravelCard } from "@/components/common/travelCard/TravelCard";
import WineTourFeatures from "@/components/common/wineTourFeatures/WineTourFeatures";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { useGetSingleHotelPackagesQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { THotelImage } from "@/components/lib/types";
import { setHotelPackageseId } from "@/redux/slice/accommodationBooking/accommodationBooking";
import Loading from "@/components/shared/loading/Loading";

// Sample property data with the saved image
const properties = [
  {
    id: 1,
    title: "Lakeside Resort",
    description: "Luxury waterfront property with stunning views",
    image: img1,
    size: "medium",
  },
  {
    id: 2,
    title: "Historic Clock Tower",
    description: "Charming building with unique architecture",
    image: img2,
    size: "large",
  },
  {
    id: 3,
    title: "Infinity Pool Villa",
    description: "Breathtaking sunset views from private infinity pool",
    image: img3,
    size: "medium",
  },
  {
    id: 4,
    title: "Beachfront Resort",
    description: "Direct beach access with premium amenities",
    image: img4,
    size: "large",
  },
  {
    id: 5,
    title: "Modern Apartments",
    description: "Contemporary living with sleek design",
    image: img5,
    size: "medium",
  },
  {
    id: 6,
    title: "Heritage Building",
    description: "Classical architecture with modern comforts",
    image: img6,
    size: "medium",
  },
];

const features = [
  {
    title: "Exclusive Vineyard Access",
    description: "Visit family-owned wineries & meet expert winemakers",
  },
  {
    title: "Premium Wine Tasting",
    description: "Sample 5+ award-winning wines paired with local delicacies",
  },
  {
    title: "Authentic Culinary Experience",
    description: "Savor a gourmet Tuscan meal with wine pairings",
  },
  {
    title: "Instagram-Worthy Views",
    description: "Capture stunning landscapes & unforgettable memories",
  },
  {
    title: "Local History & Culture",
    description: "Discover hidden gems & historic estates",
  },
];

export default function Page() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const router= useRouter()
  const dispatch =useAppDispatch()
  const params = useParams()
  const id = params.id 
  const {data, isLoading } = useGetSingleHotelPackagesQuery(id)


  if(isLoading){
    return <Loading/>
  }
  





  




  const handleOrder = () => {
        console.log("accomdation click")

        dispatch(setHotelPackageseId(id))
        router.push('/booking/accommodation/selectStayForm')
  };

  
  return (
    <div className="bg-[#F4F4F4] pb-10 md:pb-16">
      <div className="container mx-auto px-4 py-8">
        {/* Responsive masonry-style grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className={`
              overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1
              ${property.size === "large" ? "sm:col-span-1 sm:row-span-2" : ""}
              relative cursor-pointer
            `}
              onClick={() => setSelectedImage(property.id)}
            >
              <div className="relative h-full">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          ))}
        </div> */}
          

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {data?.data?.images?.map((image:THotelImage, index:number) => (
                      <div
                        key={index}
                        className={`
                        overflow-hidden rounded-lg  transition-transform duration-300  hover:-translate-y-1
                        ${  [1, 3].includes(index)  ? "sm:col-span-1 sm:row-span-2" : "" }
                        relative cursor-pointer
                      `}
                      >
                        <div className="relative h-full">
                          <img 
                            src={image.url || "/placeholder.svg"}
                            alt='dkdd'
                            className="object-cover w-full h-full"
                            loading="eager" 
                            decoding="async"
                          />
                        </div>
                      </div>
                    ))}
                  </div>



        {/* Image modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <button
                className="absolute top-4 right-4 bg-white/20 rounded-full p-2 text-white hover:bg-white/40"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(null);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
              <Image
                src={
                  properties.find((p) => p.id === selectedImage)?.image || ""
                }
                alt={
                  properties.find((p) => p.id === selectedImage)?.title || ""
                }
                width={1200}
                height={800}
                className="w-full h-auto rounded-lg"
              />
              <div className="bg-white p-4 rounded-b-lg">
                <h2 className="text-xl font-bold">
                  {properties.find((p) => p.id === selectedImage)?.title}
                </h2>
                <p className="text-gray-600">
                  {properties.find((p) => p.id === selectedImage)?.description}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* add without image component  */}
        <div className="flex flex-col md:flex-row mt-10 gap-6">
          <div className="w-full md:w-[55%] lg:w-[65%]">
            {/* travel card  */}
            <TravelCard
              title="Seaside Luxury Villa"
              location="Coxs Bazar, Bangladesh"
              duration="5 Days Trip"
              rating={4}
              reviewCount={2000}
              href=""
              className=""
            />

            <TourOverviewWithCalender />
            {/* WineTourFeatures */}
            <WineTourFeatures heading="About This Stay" features={features} />
          </div>

          <div className="w-full md:w-[45%] lg:w-[35%]">
            {/* <BookingCard /> */}
            <BookingCard
              title="Book Now!"
              features={[
                "Indulge in a Once-in-a-Lifetime Wine & Culinary Adventure!",
                "Limited Availability – Reserve Your Spot Now!",
                "Secure Payment & Instant Confirmation",
              ]}
              paymentMethods="Accepts PayPal, Stripe Payment Method"
              specialOffer="Special Offer: Book today & get a free souvenir bottle of wine!"
              reserveInfo="Reserve now & pay later to book your spot and pay nothing today"
              buttonText="Book Now"
              route="/booking/accommodation/selectStayForm"
              handleOrder={handleOrder}
            />

            {/* RatingComponent */}
            <RatingComponent />
          </div>
        </div>
      </div>
    </div>
  );
}
