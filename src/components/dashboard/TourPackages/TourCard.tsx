import Image, { StaticImageData } from "next/image"
import { Star } from "lucide-react"
import tourImg from "../../../assets/blog/blog.png"

interface TourCardProps {
  imageUrl: string | StaticImageData
  location: string
  price: number
  duration: number
  rating: number
}

export function TourCard({ imageUrl, location, price, duration, rating }: TourCardProps) {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 w-full">
        <Image
          src={imageUrl || tourImg}
          alt={location}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900 mb-2">{location}</h3>
        <p className="text-2xl font-bold text-orange-400 mb-2">${price}</p>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">{duration} Days Trip</p>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-gray-700">{rating.toFixed(1)}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
