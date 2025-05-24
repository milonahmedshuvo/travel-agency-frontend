import TourExperienceCard from "@/components/card/tourExCard/TourExCard"
// import img1 from '../../../assets/landTour/img1.jpg'
// import img2 from '../../../assets/landTour/img2.jpg'
// import img3 from '../../../assets/landTour/img3.jpg'
// import img4 from '../../../assets/landTour/img4.jpg'
// import img5 from '../../../assets/landTour/img5.jpg'
// import img6 from '../../../assets/landTour/img6.jpg'
import { useGetLandTourQuery } from "@/redux/api/tourPackages/tourPackagesApi"
import { TTourPackage } from "@/components/lib/types"
import Loading from "@/components/shared/loading/Loading"

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



  const TabLandTourCards = () => {
  const {data, isLoading } = useGetLandTourQuery(undefined)

  if(isLoading){
    return <Loading/>
  }

    

  return (

    <div>

        {/* tour card  */}

      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 xl:gap-6 ">
        {data?.data?.map((product:TTourPackage, index:number) => (
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

export default TabLandTourCards;