/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Image from "next/image";
import { ChevronUp, ChevronDown } from "lucide-react";
import testimonial from "../../../assets/header/testimonial.jpg";
// import profile from "../../../assets/logo/tes.png";
import { useGetAllfeedbacksQuery } from "@/redux/api/feedbacks/feedbacksApi";

// Sample testimonial data
// const testimonials = [
//   {
//     id: 1,
//     name: "Mike Taylor",
//     location: "Cox's Bazar, Bangladesh.",
//     quote:
//       "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
//     role: "",
//     avatar: profile,
//   },
//   {
//     id: 2,
//     name: "Chris Thomas",
//     location: "",
//     quote:
//       "Travel opens your mind to new experiences and cultures. The underwater world is truly magical.",
//     role: "CEO of Tourist Guide",
//     avatar: img1,
//   },
//   {
//     id: 3,
//     name: "Sarah Johnson",
//     location: "Maldives",
//     quote:
//       "The coral reefs were breathtaking. I've never seen such vibrant colors and marine life before.",
//     role: "Travel Blogger",
//     avatar: img2,
//   },
// ];

export default function TestimonialSection() {
  const { data } = useGetAllfeedbacksQuery("");

  const testimonials = data?.data?.data || [];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };



  
  return (
    <section className="relative w-full  overflow-hidden flex justify-between !bg-white">
      <div className="block lg:hidden">
        <div className="w-1/2 inset-0  z-0 ">
          <Image
            src={testimonial}
            alt="Underwater coral reef"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full px-4 lg:px-0 py-16 lg:py-0 flex flex-col md:flex-row items-center lg:gap-24 ">
        {/* lg and destop divise  */}

        <div
          style={{ backgroundImage: `url('${testimonial.src}')` }}
          className="w-full lg:w-1/2 mb-10 md:mb-0  bg-no-repeat bg-cover bg-center h-[516px] hidden lg:block relative "
        >
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          <div className="absolute top-[40%] left-[16%] ">
            <h2 className="text-4xl md:text-5xl lg:text-[48px] font-[600] text-white leading-tight">
              What
              <span className="text-orange-500 mx-3.5">
                Our
                <br />
                <span className="relative">
                  Travelers
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400"></span>
                </span>
              </span>
              Say
            </h2>
            <p className="text-white text-xl mt-4">
              Real Stories, Real Experiences
            </p>
          </div>
        </div>

        {/* for sm md  and mobbile scren   */}

        <div className="w-full md:w-1/2 mb-10 md:mb-0 bg-no-repeat bg-cover bg-center  block lg:hidden">
          <h2 className="text-5xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            What
            <span className="text-orange-500 mx-3.5">
              Our
              <br />
              <span className="relative">
                Travelers
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-blue-400"></span>
              </span>
            </span>
            Say
          </h2>
          <p className="text-white text-xl mt-4">
            Real Stories, Real Experiences
          </p>
        </div>

        {/* Right Side - Testimonials */}
        <div className="w-full md:w-[56%] lg:w-[40%]  relative ">


          <div className="bg-[#FFFFFF] rounded-lg shadow-lg p-8 relative w-[85%] lg:w-[90%] xl:w-[90%] z-10 h-[250px]">
            <div className="absolute right-[-23%] md:right-[-82px] lg:right-[-68px] xl:right-[-90px] top-1/2 transform -translate-y-1/2 flex flex-col space-y-4 ">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronUp className="h-5 w-5 text-gray-500" />
              </button>
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full border border-gray-200 hover:bg-gray-100 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronDown className="h-5 w-5 text-gray-500" />
              </button>
            </div>

            <div className="flex items-start mb-6">
              <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
                <Image
                  src={
                    testimonials[currentIndex]?.customer?.user?.avatar ||
                    "/default-avatar.png"
                  }
                  alt={
                    testimonials[currentIndex]?.customer?.user?.name ||
                    "User Avatar"
                  }
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex-1">
                <p className="text-gray-800 mb-6 italic">
                  "
                  {testimonials[currentIndex]?.comment
                    ? testimonials[currentIndex]?.comment
                    : "No comment available"}
                  "
                </p>
                <h3 className="font-bold text-xl">
                  {testimonials[currentIndex]?.customer?.user?.name ||
                    "Name not available"}
                </h3>
                <p className="text-gray-600">
                  {testimonials[currentIndex]?.customer?.location ||
                    "Location not available"}
                </p>
              </div>
            </div>

          </div>

          <div className="bg-[#FFFFFF] mt-8 pl-4 pb-4 pt-4 border-[1px] rounded-2xl border-gray-200 xl:ml-10 h-[230px] md:h-[270px] lg:h-[240px] w-[100%] lg:w-[100%] xl:w-[95%] flex flex-col justify-end absolute top-[70px] z-0">
            <p className="text-gray-500 text-[18px]">Next</p>
            {/* <p className="font-medium"> {testimonials[currentIndex]?.comment || "Name not available" } </p> */}
            <p className="font-medium">
              {testimonials[(currentIndex + 1) % testimonials.length]
                ?.comment || "Name not Comment"}
            </p>
            {/* <p className="font-medium">{testimonials[(currentIndex + 1) % testimonials.length]?.customer?.lastName || "Name not Comment"}</p> location */}
            <p className="font-medium">
              {testimonials[(currentIndex + 1) % testimonials.length]?.customer
                ?.location || "Location not available "}
            </p>

            {/* <p className="text-gray-500 text-sm"> { testimonials[currentIndex]?.customer?.location || "Location not available"} </p> */}
          </div>



        </div>
      </div>
    </section>
  );
}
