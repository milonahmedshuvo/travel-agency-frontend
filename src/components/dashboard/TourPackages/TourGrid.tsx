import { StaticImageData } from "next/image"
import { TourCard } from "./TourCard"



interface TourPackage {
  id: string
  imageUrl: string | StaticImageData
  location: string
  price: number
  duration: number
  rating: number
}


interface TourGridProps {
  packages: TourPackage[]
}


export function TourGrid({ packages }: TourGridProps) {


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {packages.map((pkg) => (
        <TourCard
          key={pkg.id}
          imageUrl={pkg.imageUrl} 
          location={pkg.location}
          price={pkg.price}
          duration={pkg.duration}
          rating={pkg.rating}
        />
      ))}
    </div>
  )
}
