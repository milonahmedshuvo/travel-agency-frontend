import TourExperienceCard from "@/components/card/tourExCard/TourExCard"
// import img1 from '../../../assets/card/tourexperience/img1.jpg'
// import img2 from '../../../assets/card/tourexperience/img2.jpg'
// import img3 from '../../../assets/card/tourexperience/img3.jpg'
// import img4 from '../../../assets/card/tourexperience/img4.jpg'
// import img5 from '../../../assets/card/tourexperience/img5.jpg'
// import img6 from '../../../assets/card/tourexperience/img6.jpg'


import { useGetSeaTourQuery } from "@/redux/api/tourPackages/tourPackagesApi"
import Loading from "@/components/shared/loading/Loading"
import { TTourPackage } from "@/components/lib/types"


// const products = [
//     {
//       id: '1',
//       imageUrl: img1,
//       title: "Cox's Bazar, Bangladesh",
//       price: "$400",
//       day: "5 Days Trip",
//       ratting: "5.0",
//     },
//     {
//       id: '2',
//       imageUrl:img2,
//       title: "Cox's Bazar, Bangladesh",
//       price: "$400",
//       day: "5 Days Trip",
//       ratting: "5.0",
//     },
//     {
//       id: '3',
//       imageUrl:img3,
//       title: "Cox's Bazar, Bangladesh",
//       price: "$400",
//       day: "5 Days Trip",
//       ratting: "5.0",
//     },
//     {
//       id: '4',
//       imageUrl:img4,
//       title: "Cox's Bazar, Bangladesh",
//       price: "$400",
//       day: "5 Days Trip",
//       ratting: "5.0",
//     },
//     {
//       id: '5',
//       imageUrl:img5,
//       title: "Cox's Bazar, Bangladesh",
//       price: "$400",
//       day: "5 Days Trip",
//       ratting: "5.0",
//     },
//     {
//       id: '6',
//       imageUrl:img6,
//       title: "Cox's Bazar, Bangladesh",
//       price: "$400",
//       day: "5 Days Trip",
//       ratting: "5.0",
//     },
//     {
//       id: '7',
//       imageUrl:img2,
//       title: "Cox's Bazar, Bangladesh",
//       price: "$400",
//       day: "5 Days Trip",
//       ratting: "5.0",
//     },
//     {
//       id: '8',
//       imageUrl:img3,
//       title: "Cox's Bazar, Bangladesh",
//       price: "$400",
//       day: "5 Days Trip",
//       ratting: "5.0",
//     },
//   ];




const TabSeaTourCards = () => {
      const {data, isLoading } = useGetSeaTourQuery("")
      console.log(data?.data)

    if(isLoading){
    return <Loading/>
  }






    

  return (
    
    <div>
        {/* tour card  */}
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
        {data?.data?.slice(0, 8)?.map((product:TTourPackage, index:number) => (
          <div key={index}>
            <TourExperienceCard
               id={product.id}
              imageUrl={product.images?.[1]?.url  }
              title={product.title}
              price={`$${product.price}`}
              day={`${product.duration} Days Trip`}
              ratting={'5.0'}
            ></TourExperienceCard>
          </div>
        ))}
        
      </div>
    </div>
  )
}

export default TabSeaTourCards;