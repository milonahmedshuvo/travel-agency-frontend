"use client";

import ActivityCard from "@/components/common/activityCard/ActivityCard";
import BookingCard from "@/components/common/bookingCard/BookingCard";
import Checklist from "@/components/common/checklist/Checklist";
import Highlights from "@/components/common/highlights/Highlights";
import ImportantInfo from "@/components/common/importantInfo/ImportantInfo";
import { IncludedExcludedCard } from "@/components/common/includedExcludedCard/IncludedExcludedCard/IncludedExcludedCard";
import KnowBeforeYouGo from "@/components/common/knowBeforeYouGo/KnowBeforeYouGo";
import PickupPreferences from "@/components/common/pickupPreferences/PickupPreferences";
import RatingComponent from "@/components/common/rating/Rating";
import RelatedTour from "@/components/common/relatedTour/RelatedTour";
import TravelItinerary, {
  ItineraryItem,
} from "@/components/common/travelItinerary/TravelItinerary";
import WineTourFeatures from "@/components/common/wineTourFeatures/WineTourFeatures";
import WineTourItinerary from "@/components/common/wineTourItinerary/WineTourItinerary";
import RecentBlog from "@/components/toursExperience/recentBlog/RecentBlog";
import TestimonialSlider from "@/components/toursExperience/testimonialSlider/TestimonialSlider";
import Image from "next/image";
import { useState } from "react";



import img1 from '../../../../assets/tour/img1.png'
import img2 from '../../../../assets/tour/img2.png'
import img4 from '../../../../assets/tour/img4.png'
import img5 from '../../../../assets/tour/img5.png'
import img3 from "../../../../assets/card/tourexperience/img2.jpg";
import img6 from "../../../../assets/card/tourexperience/img8.jpg";
import { TravelCard } from "@/components/common/travelCard/TravelCard";
import TourOverviewWithCalender from "@/components/common/tourOverviewCalender/TourOverviewCalender";


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

// Example usage with custom data
const baliItinerary: ItineraryItem[] = [
  {
    title: "Start Your Adventure",
    description:
      "Your tour begins with a pick-up from your hotel or a scenic drive to the starting point. Upon arrival, you'll meet your guide and receive a brief introduction.",
  },
  {
    title: "Explore & Discover",
    description:
      "You'll hike, sail, ride, and explore through highlighted locations, landmarks, and activities, learning fascinating facts and stories along the way.",
  },
  {
    title: "A Taste of Local Life",
    description:
      "Stop by a charming local café, vineyard, or cultural site to enjoy a wine tasting, traditional meal, or interactive experience.",
  },
  {
    title: "Unforgettable Memories",
    description:
      "Enjoy plenty of opportunities to take stunning photos and immerse yourself in the beauty of your surroundings before heading back.",
  },
];



// Sample data for the component
const includedItems = [
  { text: "Luxury hotel pickup & drop-off" },
  { text: "Wine tastings (5+ wines) at top-rated wineries" },
  { text: "Guided vineyard & cellar tours" },
  { text: "3-course gourmet Tuscan lunch with wine pairing" },
  { text: "Small-group experience (max 12 people)" },
]

const excludedItems = [{ text: "Tips for the guide (optional)" }, { text: "Travel insurance" }]



// checklist data 
const items = [
  { text: "Comfortable shoes" },
  { text: "Sunglasses & sunscreen" },
  { text: "Hat or cap" },
  { text: "Camera or smartphone" },
  { text: "Extra cash for personal expenses" },
];

// Usage Know before you go Example
const infoItems = [
  { title: "Weather Conditions", description: "The tour may be adjusted in case of bad weather." },
  { title: "Accessibility", description: "Not suitable for wheelchairs, strollers, etc." },
  { title: "Refund Policy", description: "Free cancellation up to 24 hours before the tour." },
  { title: "Health & Safety", description: "COVID-19 precautions, safety measures, or dietary restrictions." },
];



export default function Page() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div> 
    <div className="bg-[#F4F4F4] pb-10 md:pb-16">
      <div className="custom-container px-4 py-8 ">

        {/* Responsive masonry-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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




        {/* image datails component  */}
        <div className="flex flex-col md:flex-row mt-10 gap-6">


          <div className="w-full md:w-[55%] lg:w-[65%]">
            {/* travel card  */}
            <TravelCard title ='Bali Sea Beach, Indonesia'
                        location='Coxs Bazar, Bangladesh'
                        duration='5 Days Trip'
                        rating={4}
                        reviewCount={2000}
                        href=''
                        className = ""
                         />


            <TourOverviewWithCalender />
            {/* WineTourFeatures */}
            <WineTourFeatures
              heading="Why You'll Love This Tour"
              features={features}
            />
            {/* WineTourItinerary */}
            <WineTourItinerary />
            {/* ActivityCard */}
            <ActivityCard />
            {/* Highlights */}
            <Highlights />
            {/* travel Itinerary  and drescription */}
            <TravelItinerary destinationName="Bali" items={baliItinerary} />

            {/* {includedExcludedCard} */}
            <IncludedExcludedCard includedItems={includedItems} excludedItems={excludedItems} className="mt-5" />
            {/* ImportantInfo  */}
             <ImportantInfo/>
             {/* Checklist */}
             <Checklist title="What to bring" items={items} />
             {/* KnowBeforeYouGo */}
             <KnowBeforeYouGo items={infoItems}/>

             
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
              route="/booking/tourBookingStep1"
            />
            {/* PickupPreferences */}
            <PickupPreferences />
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
