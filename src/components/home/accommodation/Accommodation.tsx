"use client"

import AccommodationCard from "@/components/card/accommodationCard/AccommodationCard";
// import img1 from '../../../assets/card/accommodation/img1.jpg'
// import img2 from '../../../assets/card/accommodation/img2.jpg'
// import img3 from '../../../assets/card/accommodation/img3.jpg'
// import img4 from '../../../assets/card/accommodation/img4.jpg'
// import img5 from '../../../assets/card/accommodation/img5.jpg'
// import img6 from '../../../assets/card/accommodation/img6.jpg'
import { ChevronRight} from "lucide-react";
import Link from "next/link";
import { useGetAllHotelPackagesQuery } from "@/redux/api/hotelPackages/hotelPackegesApi";
import { THotelPackage } from "@/components/lib/types";
import Loading from "@/components/shared/loading/Loading";
//  const products = [
//         {
//           id: '1',
//           imageUrl: img1,
//           title: "Cox's Bazar, Bangladesh",
//           price: "$400",
//           day: "5 Days Trip",
//           ratting: "5.0",
//           address: "Cox Bazar, Bangladesh"
//         },
//         {
//             id: '2',
//             imageUrl: img2,
//             title: "Cox's Bazar, Bangladesh",
//             price: "$400",
//             day: "5 Days Trip",
//             ratting: "5.0",
//             address: "Cox Bazar, Bangladesh"
//           },
//           {
//             id: '3',
//             imageUrl: img3,
//             title: "Cox's Bazar, Bangladesh",
//             price: "$400",
//             day: "5 Days Trip",
//             ratting: "5.0",
//             address: "Cox Bazar, Bangladesh"
//           },
//           {
//             id: '4',
//             imageUrl: img4,
//             title: "Cox's Bazar, Bangladesh",
//             price: "$400",
//             day: "5 Days Trip",
//             ratting: "5.0",
//             address: "Cox Bazar, Bangladesh"
//           },
//           {
//             id: '5',
//             imageUrl: img5,
//             title: "Cox's Bazar, Bangladesh",
//             price: "$400",
//             day: "5 Days Trip",
//             ratting: "5.0",
//             address: "Cox Bazar, Bangladesh"
//           },
//           {
//             id: '6',
//             imageUrl: img6,
//             title: "Cox's Bazar, Bangladesh",
//             price: "$400",
//             day: "5 Days Trip",
//             ratting: "5.0",
//             address: "Cox Bazar, Bangladesh"
//           },
//           {
//             id: '7',
//             imageUrl: img5,
//             title: "Cox's Bazar, Bangladesh",
//             price: "$400",
//             day: "5 Days Trip",
//             ratting: "5.0",
//             address: "Cox Bazar, Bangladesh"
//           },
//           {
//             id: '8',
//             imageUrl: img2,
//             title: "Cox's Bazar, Bangladesh",
//             price: "$400",
//             day: "5 Days Trip",
//             ratting: "5.0",
//             address: "Cox Bazar, Bangladesh"
//           },
          
//       ];


const Accommodation = () => {
    const {data, isLoading } = useGetAllHotelPackagesQuery("")
    console.log("hotel", data?.data)
    
    if(isLoading){
      return <Loading/>
    }

   




  return (
    <div className="custom-container">

        <div className="flex justify-between items-center">
            <div>
            <h1 className="font-semibold text-[40px] md:text-[48px] ">Featured <span className="text-[#FF914D]">Accommodations</span></h1>
            <p className="text-[#333333] text-[16px] font-normal mt-1.5">Hit the open road and explore in style with the perfect bike, scooter, car, boat tour for your needs.</p>
            </div>

            <div className="flex">
            <Link href='/acommodation'><p>See All</p></Link>
            <ChevronRight className="w-[18px]"/>
        </div>

        </div>

     
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
          {
            data?.data?.map((product:THotelPackage, index:number) =><div key={index}>
                <AccommodationCard id={product.id} imageUrl={product.images[1].url} title={product.title} address={"addresss"}  price={product.price} ratting={'5.0'}/>
            </div>)
          }
          </div>

    </div>
  )
}

export default Accommodation