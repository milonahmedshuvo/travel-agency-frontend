/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"
import testimonial from '../../../assets/header/testimonial.jpg'
import profile from '../../../assets/logo/tes.png'
import img1 from '../../../assets/logo/img1.jpg'
import img2 from '../../../assets/logo/img2.jpg'




// Sample testimonial data
const testimonials = [
  {
    id: 1,
    name: "Mike Taylor",
    location: "Cox's Bazar, Bangladesh.",
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    role: "",
    avatar: profile,
  },
  {
    id: 2,
    name: "Chris Thomas",
    location: "",
    quote: "Travel opens your mind to new experiences and cultures. The underwater world is truly magical.",
    role: "CEO of Tourist Guide",
    avatar: img1,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    location: "Maldives",
    quote: "The coral reefs were breathtaking. I've never seen such vibrant colors and marine life before.",
    role: "Travel Blogger",
    avatar: img2,
  },
]

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <section className="relative w-full  overflow-hidden flex justify-between !bg-white max-w-[2000px] mx-auto">

      <div className="block lg:hidden">
      <div className="w-1/2 inset-0  z-0 ">
        <Image src={testimonial} alt="Underwater coral reef" fill className="object-cover" priority />
      </div>
    
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

   

     




      {/* Content Container */}
      <div className="relative z-20 w-full px-4 lg:px-0 py-16 lg:py-0 flex flex-col md:flex-row items-center lg:gap-10 ">

  
       {/* lg and destop divise  */}
       
        <div
          style={{ backgroundImage: `url('${testimonial.src}')` }}
          className="w-full lg:w-1/2 mb-10 md:mb-0  bg-no-repeat bg-cover bg-center h-[516px] hidden lg:block relative ">


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
          <p className="text-white text-xl mt-4">Real Stories, Real Experiences</p>
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
          <p className="text-white text-xl mt-4">Real Stories, Real Experiences</p>
        </div>

     




        {/* Right Side - Testimonials */}
        <div className="w-full md:w-[56%] lg:w-[40%]  relative ">
          <div className="bg-white rounded-lg px-10 py-16 shadow-sm">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src={testimonials[activeIndex].avatar || "/placeholder.svg"}
                  alt={testimonials[activeIndex].name}
                  width={64}
                  height={64}
                  className="object-cover w-full h-full"
                />
              </div>
              <div>
                <blockquote className="text-gray-800 text-lg mb-4">"{testimonials[activeIndex].quote}"</blockquote>
                <div className="mt-4">
                  <h4 className="font-medium text-xl">{testimonials[activeIndex].name}</h4>
                  <div className="text-gray-600">
                    {testimonials[activeIndex].location && <p>{testimonials[activeIndex].location}</p>}
                    {testimonials[activeIndex].role && <p>{testimonials[activeIndex].role}</p>}
                  </div>
                </div>
              </div>
            </div>
          </div>



          {/* Navigation Buttons */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex flex-col gap-12">
            <button
              onClick={prevTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronUp className="w-6 h-6" />
            </button>
            <button
              onClick={nextTestimonial}
              className="bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronDown className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>





    </section>
  )
}

