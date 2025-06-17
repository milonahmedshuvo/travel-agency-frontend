/* eslint-disable @next/next/no-img-element */
"use client";
import BookingCard from "@/components/common/bookingCard/BookingCard";
import { TravelCard } from "@/components/common/travelCard/TravelCard";
import WineTourFeatures from "@/components/common/wineTourFeatures/WineTourFeatures";
import { useParams, useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { useGetSingleHotelPackagesQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { THotelImage } from "@/components/lib/types";
import { setHotelPackageseId } from "@/redux/slice/accommodationBooking/accommodationBooking";
import Loading from "@/components/shared/loading/Loading";
import BestPlaces from "@/components/common/roomCard/bestPlaces/BestPlaces";
import ActivityCard from "@/components/common/activityCard/ActivityCard";
import Highlights from "@/components/common/highlights/Highlights";
import TestimonialSlider from "@/components/toursExperience/testimonialSlider/TestimonialSlider";
import RecentBlog from "@/components/toursExperience/recentBlog/RecentBlog";
import RatingHotel from "@/components/common/rating/RatingHotel";



export default function Page() {
  const router= useRouter()
  const dispatch =useAppDispatch()
  const params = useParams()
  const id = params.id 
  const {data, isLoading } = useGetSingleHotelPackagesQuery(id)

  if(isLoading){
    return <Loading/>
  }
  


  // console.log('ROOM Datails Page', data?.data)



  




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



       

        {/* add without image component  */}
        <div className="flex flex-col md:flex-row mt-10 gap-6">
          <div className="w-full md:w-[55%] lg:w-[65%]">
            {/* travel card  */}
           <TravelCard title ={data?.data?.title}
                        location={data?.data?.location}
                        duration={`${data?.data?.duration} Hours`}
                        rating={4}
                        reviewCount={2000}
                        href=''
                        className = ""
                         />

            <div className=" my-5 bg-white py-6 px-4">
              <div className="text-gray-600 mb-4 text-sm" dangerouslySetInnerHTML={{ __html: data?.data?.description }} ></div>
            </div>

            {/* <TourOverviewWithCalender /> */}
            {/* WineTourFeatures */}
            <WineTourFeatures heading="About This Stay" features={data?.data?.aboutStays } />
           
           
             <ActivityCard activity={data?.data?.activity} />
              <Highlights title="Amenities & Services" highlights={data?.data?.amenities} />
              <Highlights title="Distance from the property" highlights={data?.data?.distances} />


            
                <div className="bg-white my-6">
                   <h1 className="text-base md:text-lg lg:text-3xl font-medium text-slate-800 py-4" >Gallery – Visual Storytelling</h1>
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
                </div>


                <BestPlaces title="Best places to visit in Croatia"  detailedItineraries={data?.data?.bestPlaces} ></BestPlaces>   


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
  
            <RatingHotel/>
          </div>
        </div>
      </div>

       <TestimonialSlider/>
        <RecentBlog/>
    </div>
  );
}
