/* eslint-disable react/no-unescaped-entities */
"use client"
import { useState } from "react"
import Image from "next/image"
import { ChevronUp, ChevronDown } from "lucide-react"
import img1 from '../../../assets/logo/img1.jpg'
import img2 from '../../../assets/logo/img2.jpg'
import img3 from '../../../assets/logo/img3.jpg'




// Sample testimonial data
const testimonials = [
  {
    id: 1,
    quote:
      "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
    name: "Mike taylor",
    location: "Cox's Bazar, Bangladesh.",
    image: img1,
  },
  {
    id: 2,
    quote: "Travel opens your mind to new experiences and cultures. The memories you make will last a lifetime.",
    name: "Chris Thomas",
    location: "CEO of Tourist Guide",
    image: img2,
  },
  {
    id: 3,
    quote: "The journey matters more than the destination. Take time to appreciate the small moments along the way.",
    name: "Sarah Johnson",
    location: "Paris, France",
    image: img3,
  },
]

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="bg-[#FAFAFA]" >  
    <div className="custom-container mx-auto px-4 ">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
       
        {/* Left side - Heading */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What
            <span className="text-[#FF8A65] relative">
              Our
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#4FC3F7]"></span>
            </span>
          </h2>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-[#FF8A65] relative">
              Travelers
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#4FC3F7]"></span>
            </span>
            Say
          </h2>
          <p className="text-gray-600 text-lg">Real Stories, Real Experiences</p>
        </div>



        {/* Right side - Testimonial */}
         <div className="relative h-[400px] md:h-[370px]">

      
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

          <div  className="flex items-start mb-6">
            <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
              <Image
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1">
              <p className="text-gray-800 mb-6 italic">"{testimonials[currentIndex].quote}"</p>
              <h3 className="font-bold text-xl">{testimonials[currentIndex].name}</h3>
              <p className="text-gray-600">{testimonials[currentIndex].location}</p>
            </div>
          </div>

          {/* Indicator for next testimonial */}
          {/* {currentIndex < testimonials.length - 1 && (
            <div className="mt-8 pt-4 border-t border-gray-100">
              <p className="text-gray-500 text-sm">Next</p>
              <p className="font-medium">{testimonials[(currentIndex + 1) % testimonials.length].name}</p>
              <p className="text-gray-500 text-sm">{testimonials[(currentIndex + 1) % testimonials.length].location}</p>
            </div>
          )} */}

        </div>

            
        {/* {currentIndex < testimonials.length - 1 && ( */}
            <div className="mt-8 pl-4 pb-4 pt-4 border-[1px] rounded-2xl border-gray-200 xl:ml-10 h-[230px] md:h-[270px] lg:h-[240px] w-[100%] lg:w-[100%] xl:w-[95%] flex flex-col justify-end absolute top-[70px] z-0">
              <p className="text-gray-500 text-sm">Next</p>
              <p className="font-medium">{testimonials[(currentIndex + 1) % testimonials.length].name}</p>
              <p className="text-gray-500 text-sm">{testimonials[(currentIndex + 1) % testimonials.length].location}</p>
            </div>
          {/* )} */}

        </div>


      </div>
    </div>
    </section>
  )
}

