import { Star } from "lucide-react"
import Link from "next/link"

type TravelCardProps = {
  title: string
  location: string
  duration: string
  rating: number
  reviewCount: number
  href: string
  className?: string
}

export function TravelCard({
  title,
  location,
  duration,
  rating,
  reviewCount,
  href,
  className = "",
}: TravelCardProps) {
  return (
    <Link
      href={href}
      className={`group block overflow-hidden rounded-lg bg-white transition-all ${className}`}
    >
      <div className="p-4 sm:p-5">
        <h3 className="text-xl font-medium !text-gray-800 dark:text-white sm:text-2xl">{title}</h3>
        <div className="mt-1 flex items-center text-sm !text-[#333333]">
          <span>{location}</span>
          <span className="mx-2">•</span>
          <span>{duration}</span>
        </div>


        <div className="mt-3 flex items-center gap-1 !text-[#333333]">
          <Star className="h-6 w-6 fill-amber-400 text-amber-400 " />
          <span className="font-medium !text-[#333333] ">{rating}/5</span>
          <span className="text-sm !text-[#333333] ">
            (Based on {reviewCount.toLocaleString()}+ Traveler Reviews)
          </span>
        </div>
      </div>
    </Link>
  )
}

