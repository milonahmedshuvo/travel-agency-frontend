import React from 'react'
import img1 from '../../../assets/card/Vehicle/img1.jpg'
import img2 from '../../../assets/card/Vehicle/img2.jpg'
import img3 from '../../../assets/card/Vehicle/img3.jpg'
import img4 from '../../../assets/card/Vehicle/img4.jpg'
import img5 from '../../../assets/card/Vehicle/img5.jpg'
import img6 from '../../../assets/card/Vehicle/img6.jpg'
import VehicleCard from '@/components/card/vehicleCard/VehicleCard'

const Vehicle = () => {
    const products = [
        {
          imageUrl: img1,
          title: "Cox's Bazar, Bangladesh",
          price: "$400",
          time: "2 Hours",
          ratting: "5.0",
        },
        {
          imageUrl:img2,
          title: "Cox's Bazar, Bangladesh",
          price: "$400",
          time: "5 Hours",
          ratting: "5.0",
        },
        {
          imageUrl:img3,
          title: "Cox's Bazar, Bangladesh",
          price: "$400",
          time: "2 Hours",
          ratting: "5.0",
        },
        {
          imageUrl:img4,
          title: "Cox's Bazar, Bangladesh",
          price: "$400",
          time: "2 Hours",
          ratting: "5.0",
        },
        {
          imageUrl:img5,
          title: "Cox's Bazar, Bangladesh",
          price: "$400",
          time: "7 Hours",
          ratting: "5.0",
        },
        {
          imageUrl:img6,
          title: "Cox's Bazar, Bangladesh",
          price: "$400",
          time: "3 Hours",
          ratting: "5.0",
        },
        {
          imageUrl:img2,
          title: "Cox's Bazar, Bangladesh",
          price: "$400",
          time: "4 Hours",
          ratting: "5.0",
        },
        {
          imageUrl:img3,
          title: "Cox's Bazar, Bangladesh",
          price: "$400",
          time: "2 Hours",
          ratting: "5.0",
        },
      ];


  return (
    <div className='custom-container'>
       <h1 className="font-semibold text-[48px] ">
       Featured  <span className="text-[#FF914D]">Vehicle</span>
      </h1>
      <p className="text-[#333333] text-[16px] font-normal mt-1.5">
      Hit the open road and explore in style with the perfect bike, scooter, car, boat tour for your needs.
      </p>


        {/* button group  */}
      <div className="flex flex-col md:flex-row gap-3.5 lg:gap-4 mt-6">
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer hover:text-[#FF914D] hover:border-[#FF914D]">
        Bike Tour
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:text-[#FF914D] hover:border-[#FF914D]">
         Scooter Tour
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:text-[#FF914D] hover:border-[#FF914D]">
         Car Tour
        </button>
        <button className="border border-[#333333] rounded-lg focus:outline-none px-6.5 py-2.5 cursor-pointer  hover:text-[#FF914D] hover:border-[#FF914D]">
         Boat Tour
        </button>
      </div>



      {/* product card use map */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 "> 
      {products.map((product, index) => (
          <div key={index}>
            <VehicleCard
              imageUrl={product.imageUrl}
              title={product.title}
              price={product.price}
              time={product.time}
              ratting={product.ratting}
            ></VehicleCard>
          </div>
        ))}
      </div>  

    </div>
  )
}

export default Vehicle