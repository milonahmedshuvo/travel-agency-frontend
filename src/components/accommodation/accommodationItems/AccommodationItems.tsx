import React from "react";
import Pagination from "@/components/others/pagination/Pagination";
import img1 from '../../../assets/card/accommodation/img1.jpg'
import img2 from '../../../assets/card/accommodation/img2.jpg'
import img3 from '../../../assets/card/accommodation/img3.jpg'
import img4 from '../../../assets/card/accommodation/img4.jpg'
import img5 from '../../../assets/card/accommodation/img5.jpg'
import img6 from '../../../assets/card/accommodation/img6.jpg'
import AccommodationSecoundCard from "@/components/card/accommodationCard/AccommoSecoundCard";



const AccommodationItems = () => {
  
  const products = [
    {
      id: '1',
      imageUrl: img1,
      title: "Cox's Bazar, Bangladesh",
      price: "$400",
      day: "5 Days Trip",
      ratting: "5.0",
      address: "Cox Bazar, Bangladesh",
      kitchenValue: "2",
      bedRoomValue: "5",
      bathroom:"3",
      livingRoom: '8'
    ,
    },
    {
        id: '2',
        imageUrl: img2,
        title: "Cox's Bazar, Bangladesh",
        price: "$400",
        day: "5 Days Trip",
        ratting: "5.0",
        address: "Cox Bazar, Bangladesh",
        kitchenValue: "2",
        bedRoomValue: "5",
        bathroom:"3",
        livingRoom: '8'

      },
      {
        id: '3',
        imageUrl: img3,
        title: "Cox's Bazar, Bangladesh",
        price: "$400",
        day: "5 Days Trip",
        ratting: "5.0",
        address: "Cox Bazar, Bangladesh",
        kitchenValue: "2",
        bedRoomValue: "5",
        bathroom:"3",
        livingRoom: '8'

      },
      {
        id: '4',
        imageUrl: img4,
        title: "Cox's Bazar, Bangladesh",
        price: "$400",
        day: "5 Days Trip",
        ratting: "5.0",
        address: "Cox Bazar, Bangladesh",
        kitchenValue: "2",
        bedRoomValue: "5",
        bathroom:"3",
        livingRoom: '8'

      },
      {
        id: '5',
        imageUrl: img5,
        title: "Cox's Bazar, Bangladesh",
        price: "$400",
        day: "5 Days Trip",
        ratting: "5.0",
        address: "Cox Bazar, Bangladesh",
        kitchenValue: "2",
        bedRoomValue: "5",
        bathroom:"3",
        livingRoom: '8'

      },
      {
        id: '6',
        imageUrl: img6,
        title: "Cox's Bazar, Bangladesh",
        price: "$400",
        day: "5 Days Trip",
        ratting: "5.0",
        address: "Cox Bazar, Bangladesh",
        kitchenValue: "2",
        bedRoomValue: "5",
        bathroom:"3",
        livingRoom: '8'

      },
      {
        id: '7',
        imageUrl: img5,
        title: "Cox's Bazar, Bangladesh",
        price: "$400",
        day: "5 Days Trip",
        ratting: "5.0",
        address: "Cox Bazar, Bangladesh",
        kitchenValue: "2",
        bedRoomValue: "5",
        bathroom:"3",
        livingRoom: '8'

      },
      {
        id: '8',
        imageUrl: img2,
        title: "Cox's Bazar, Bangladesh",
        price: "$400",
        day: "5 Days Trip",
        ratting: "5.0",
        address: "Cox Bazar, Bangladesh",
        kitchenValue: "2",
        bedRoomValue: "5",
        bathroom:"3",
        livingRoom: '8'

      },
      
  ];



  return (
    <section className="custom-container">
      <h1 className="font-semibold text-[48px] text-center">
      Top Picks for <span className="text-[#FF914D]">Your Stay</span>
      </h1>
      <p className="text-[#333333] text-[16px] text-center font-normal mt-1.5">
        Hit the open road and explore in style with the perfect bike, scooter,
        car, boat tour for your needs.
      </p>

      

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
          {
            products.map((product, index) =><div key={index}>
                <AccommodationSecoundCard 
                id={product.id} 
                imageUrl={product.imageUrl} 
                title={product.title} 
                address={product.address} 
                price={product.price} 
                ratting={product.ratting}
                kitchenValue={product.kitchenValue}
                bedRoomValue={product.bedRoomValue}
                bathroomValue={product.bathroom}
                livingRoomValue={product.livingRoom}
                 ></AccommodationSecoundCard>
            </div>)
          }
          </div>



      {/* Handle Pagination here  */}
      {/* total means all product  */}
      <Pagination total={50} defaultCurrent={1} className="mt-10" />
    </section>
  );
};

export default AccommodationItems;
