"use client"

import Image from "next/image"
import { useState } from "react"


// Sample property data with the saved image
const properties = [
  {
    id: 1,
    title: "Lakeside Resort",
    description: "Luxury waterfront property with stunning views",
    image: "/images/property-grid.png",
    size: "medium",
  },
  {
    id: 2,
    title: "Historic Clock Tower",
    description: "Charming building with unique architecture",
    image: "/images/property-grid.png",
    size: "large",
  },
  {
    id: 3,
    title: "Infinity Pool Villa",
    description: "Breathtaking sunset views from private infinity pool",
    image: "/images/property-grid.png",
    size: "medium",
  },
  {
    id: 4,
    title: "Beachfront Resort",
    description: "Direct beach access with premium amenities",
    image: "/images/property-grid.png",
    size: "large",
  },
  {
    id: 5,
    title: "Modern Apartments",
    description: "Contemporary living with sleek design",
    image: "/images/property-grid.png",
    size: "medium",
  },
  {
    id: 6,
    title: "Heritage Building",
    description: "Classical architecture with modern comforts",
    image: "/images/property-grid.png",
    size: "medium",
  },
  
]



export default function Page  () {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  return (
    <div className="container mx-auto px-4 py-8">


      {/* Responsive masonry-style grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {properties.map((property) => (
          <div
            key={property.id}
            className={`
              overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:shadow-xl hover:-translate-y-1
              ${property.size === "large" ? "sm:col-span-1 sm:row-span-2" : ""}
              relative cursor-pointer
            `}
            onClick={() => setSelectedImage(property.id)}
          >

            <div  className="relative h-full">
              <Image
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                width={600}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>

          </div>
        ))}
      </div>





      {/* Image modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full">
            <button
              className="absolute top-4 right-4 bg-white/20 rounded-full p-2 text-white hover:bg-white/40"
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <Image
              src={properties.find((p) => p.id === selectedImage)?.image || ""}
              alt={properties.find((p) => p.id === selectedImage)?.title || ""}
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
            <div className="bg-white p-4 rounded-b-lg">
              <h2 className="text-xl font-bold">{properties.find((p) => p.id === selectedImage)?.title}</h2>
              <p className="text-gray-600">{properties.find((p) => p.id === selectedImage)?.description}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}

