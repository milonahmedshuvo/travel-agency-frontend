import React from 'react'
import img1 from "../../../assets/card/tourexperience/img1.jpg";
import img2 from "../../../assets/card/tourexperience/img2.jpg";
import img3 from "../../../assets/card/tourexperience/img3.jpg";
import img4 from "../../../assets/card/tourexperience/img4.jpg";
import TourExperienceCard from '@/components/card/tourExCard/TourExCard';




const RelatedTour = () => {

    const products = [
        {
            id: "1",
            imageUrl: img1,
            title: "Cox's Bazar, Bangladesh",
            price: "$400",
            day: "5 Days Trip",
            ratting: "5.0",
          },
          {
            id: "2",
            imageUrl: img2,
            title: "Cox's Bazar, Bangladesh",
            price: "$400",
            day: "5 Days Trip",
            ratting: "5.0",
          },
          {
            id: "3",
            imageUrl: img3,
            title: "Cox's Bazar, Bangladesh",
            price: "$400",
            day: "5 Days Trip",
            ratting: "5.0",
          },
          {
            id: "4",
            imageUrl: img4,
            title: "Cox's Bazar, Bangladesh",
            price: "$400",
            day: "5 Days Trip",
            ratting: "5.0",
          },
    ]




  return (
    <section className='custom-container '>


     <h1 className="font-semibold text-[48px]">
        Related<span className="text-[#FF914D] mx-4.5 ">Tour</span >
      </h1>
      <p className="text-[#333333] text-[16px]  font-normal mt-1.5 lg:max-w-lg">
         Get expert travel tips, destination guides, and exclusive insights to make your next adventure unforgettable.
      </p>



    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 mb-10">
        {products.map((product, index) => (
          <div key={index}>
            <TourExperienceCard
              id={product.id}
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              day={product.day}
              ratting={product.ratting}
            ></TourExperienceCard>
          </div>
        ))}
      </div>
    </section>
  )
}

export default RelatedTour