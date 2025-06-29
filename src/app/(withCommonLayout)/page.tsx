import Accommodation from "@/components/home/accommodation/Accommodation";
import Banner from "@/components/home/banner/Banner";
import ProductCarousel from "@/components/home/carousel/Carousel";
import TestimonialSection from "@/components/home/testimonial/testimonial";
import TourExperienceAllCategory from "@/components/home/tourExperience/TourExperienceAllCategory";
import WhyChooseus from "@/components/home/whyChooseus/WhyChooseus";
import TourPackageFilterFiled from "@/components/others/tourPackageFilter/page";
import RecentBlog from "@/components/toursExperience/recentBlog/RecentBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hvarlocalguide - Home",
  description: "Hvar Local Travel Agency",
};

const page = () => {
  return (
    <div>
      <Banner></Banner>
      <TourPackageFilterFiled />
      <ProductCarousel />

      <WhyChooseus />

      <TourExperienceAllCategory />
      <Accommodation />

      {/* All Vehicle cards */}
      {/* <AllVehicleTourCards/> */}
      <TestimonialSection />
      {/* <HomeTestimonialSlider/> */}
      <RecentBlog />
    </div>
  );
};

export default page;
