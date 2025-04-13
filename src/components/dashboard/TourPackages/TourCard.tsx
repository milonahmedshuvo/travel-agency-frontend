import { MapPin, Star } from "lucide-react"
import { Card, CardContent,  CardHeader } from "@/components/ui/card"
import Image from "next/image"

export interface TourCardProps {
  title: string
  location: string
  subLocation?: string
  price: number
  rating?: number
  image: string
  duration?: string
  features?: string[]
  description?: string
  isDetailed?: boolean
}

export function TourCard({
  title,
  location,
  subLocation,
  price,
  rating,
  image,
  duration,
  features,
  description,
  isDetailed = false,
}: TourCardProps) {
  if (isDetailed) {
    return (
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col md:col-span-1">
            <div className="grid grid-cols-3 gap-1 h-full">
              <div className="col-span-3 h-40 md:h-full relative">
                <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-tl-md" />
              </div>
              <div className="col-span-1 h-24 relative">
                <Image src="/placeholder.svg?height=100&width=100" alt="Tour detail" fill className="object-cover" />
              </div>
              <div className="col-span-1 h-24 relative">
                <Image src="/placeholder.svg?height=100&width=100" alt="Tour detail" fill className="object-cover" />
              </div>
              <div className="col-span-1 h-24 relative">
                <Image src="/placeholder.svg?height=100&width=100" alt="Tour detail" fill className="object-cover" />
              </div>
            </div>
          </div>
          <div className="p-4 md:col-span-2">
            <div className="flex flex-col h-full">
              <div className="flex items-center text-gray-500 mb-1">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{location}</span>
              </div>
              <h3 className="text-2xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-600 mb-4">{description}</p>

              <div className="space-y-3 flex-grow">
                {features &&
                  features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-sky-100 p-2 rounded-full mr-3">
                        <span className="text-sky-600 text-xs">Icon</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-sm">{feature.split(":")[0]}</h4>
                        <p className="text-xs text-gray-500">{feature.split(":")[1]}</p>
                      </div>
                    </div>
                  ))}
              </div>

              <div className="flex justify-between items-end mt-4">
                <div>
                  <div className="text-gray-500 text-sm">Price</div>
                  <div className="text-xl font-bold text-orange-500">${price.toLocaleString()}</div>
                  <div className="text-xs text-gray-500">per person</div>
                </div>
                <div>
                  <div className="text-gray-500 text-sm">Duration</div>
                  <div className="text-sm">{duration}</div>
                </div>
              </div>

              <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors">
                Edit Detail
              </button>
            </div>
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card className="overflow-hidden h-full">
      <div className="relative h-36">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <CardHeader className="p-4 pb-2">
        <h3 className="font-semibold">{title}</h3>
        <div className="flex items-center text-gray-500 text-xs">
          <MapPin className="h-3 w-3 mr-1" />
          <span>{location}</span>
          {subLocation && <span>, {subLocation}</span>}
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0 pb-2">
        <div className="text-lg font-bold text-orange-500">${price.toLocaleString()}</div>
      </CardContent>
      <div className="p-4 pt-0 flex justify-end">
        {rating && (
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm">{rating}</span>
          </div>
        )}
      </div>
    </Card>
  )
}
