/* eslint-disable @next/next/no-img-element */
"use client";

import ActivityCard from "@/components/common/activityCard/ActivityCard";
import BookingCard from "@/components/common/bookingCard/BookingCard";
import Checklist from "@/components/common/checklist/Checklist";
import Highlights from "@/components/common/highlights/Highlights";
import ImportantInfo from "@/components/common/importantInfo/ImportantInfo";
import { IncludedExcludedCard } from "@/components/common/includedExcludedCard/IncludedExcludedCard/IncludedExcludedCard";
import KnowBeforeYouGo from "@/components/common/knowBeforeYouGo/KnowBeforeYouGo";
// import PickupPreferences from "@/components/common/pickupPreferences/PickupPreferences";
import RatingComponent from "@/components/common/rating/Rating";
import RelatedTour from "@/components/common/relatedTour/RelatedTour";
import TravelItinerary, {
} from "@/components/common/travelItinerary/TravelItinerary";
import WineTourFeatures from "@/components/common/wineTourFeatures/WineTourFeatures";
import WineTourItinerary from "@/components/common/wineTourItinerary/WineTourItinerary";
import RecentBlog from "@/components/toursExperience/recentBlog/RecentBlog";
import TestimonialSlider from "@/components/toursExperience/testimonialSlider/TestimonialSlider";


// import img1 from '../../../../assets/tour/img1.png'
// import img2 from '../../../../assets/tour/img2.png'
// import img4 from '../../../../assets/tour/img4.png'
// import img5 from '../../../../assets/tour/img5.png'
// import img3 from "../../../../assets/card/tourexperience/img2.jpg";
// import img6 from "../../../../assets/card/tourexperience/img8.jpg";
import { TravelCard } from "@/components/common/travelCard/TravelCard";
import { useGetSingleTourQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { useParams, useRouter } from "next/navigation";
import { TPackageImage } from "@/components/lib/types";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setTourPackageId } from "@/redux/slice/vehicleBooking/vehicleBookingSlice";
import Loading from "@/components/shared/loading/Loading";


export default function Page() {
  const router = useRouter()
  const dispatch =useAppDispatch()
  const params = useParams()
  const id = params.id 
  const {data, isLoading} = useGetSingleTourQuery(id)
  
  const isAuthenticated = useAppSelector((state)=>state.auth.user?.email)

  console.log({isAuthenticated})



 

  if(isLoading){
    return <Loading/>
  }


   const handleOrder = (e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    // dispatch(setTourPackageId(id))
    // router.push('/booking/booking')

    if (isAuthenticated) {
      dispatch(setTourPackageId(id))
       router.push('/booking/booking')
    } else {
      router.push('/login?redirectTo=/booking/booking');
    }

   }



  return (
    <div> 
    <div className="bg-[#F4F4F4] pb-10 md:pb-16">
      <div className="custom-container px-4 py-8 ">

        {/* Responsive masonry-style grid */}
        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {properties.map((property) => (
            <div
              key={property.id}
              className={`
              overflow-hidden rounded-lg  transition-transform duration-300  hover:-translate-y-1
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

        {/* exarsize it  */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {data?.data?.images?.map((image:TPackageImage, index:number) => (
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



      



        {/* image datails component  */}
        <div className="flex flex-col md:flex-row mt-10 gap-6">

            {/* First colum  */}
          <div className="w-full md:w-[55%] lg:w-[65%]">
            {/* travel card  */}
            <TravelCard title ={data?.data?.title}
                        location={data?.data?.location}
                        duration={`${data?.data?.duration}Days Trip`}
                        rating={4}
                        reviewCount={2000}
                        href=''
                        className = ""
                         />
            {/* <TourOverviewWithCalender /> */}


            <div className=" mt-5 mb-1  bg-white py-5 px-4 ">
              <div className="text-gray-600 mb-4 text-sm" dangerouslySetInnerHTML={{ __html: data?.data?.description }} ></div>
            </div>



            {/* WineTourFeatures */}
            <WineTourFeatures
              heading="Why You'll Love This Tour"
              features={data?.data?.tourLovingReasons}
            />
            {/* WineTourItinerary */}
            <WineTourItinerary detailedItineraries={data?.data?.detailedItineraries}  />

            {/* ActivityCard */}
            <ActivityCard activity={data?.data?.activity} />


            {/* Highlights */}
            <Highlights title="Highlights" highlights={data?.data?.highlights} />
            {/* travel Itinerary  and drescription */}
            <TravelItinerary  items={data?.data?.descriptions} />
            {/* {includedExcludedCard} */}
            <IncludedExcludedCard includedItems={data?.data?.includes} excludedItems={data?.data?.includes}  />
            {/* ImportantInfo  */}
             <ImportantInfo importantInfo={data?.data?.importantInfo}  />
             {/* Checklist */}
             <Checklist items={data?.data?.brings} />
             {/* KnowBeforeYouGo */}
             <KnowBeforeYouGo items={data?.data?.knowBeforeYouGoes}/>    




          </div>




         {/* secound colum  */}
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
              route="/booking/booking"
              handleOrder={handleOrder}


            />
            {/* PickupPreferences */}
            {/* <PickupPreferences /> */}
            {/* RatingComponent */}
            <RatingComponent />
          </div>
        </div>



      </div>
    </div>

     {/* Releted component  */}
      <RelatedTour/>
      <TestimonialSlider/>
        <RecentBlog/>
         

    </div>
  );
}
