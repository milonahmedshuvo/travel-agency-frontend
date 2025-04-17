"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "../lib/utils"
import EnhancedImageGallery from "./EnhancedImageGallery"
import img1 from "../../assets/landTour/img1.jpg"

export default function HomeThreeImage() {
  const [theme, setTheme] = useState<"light" | "dark" | "ocean">("ocean")
  const [activeView, setActiveView] = useState<"gallery" | "grid">("gallery")

  const images = [
    {
      src: img1,
      alt: "Person in a boat looking at ocean cliffs",
      caption: "Explore hidden coves and majestic cliffs from our traditional longboats.",
    },
    {
      src: img1,
      alt: "Split view of boat and underwater scene with fish",
      caption: "Discover the vibrant underwater world with our guided snorkeling tours.",
    },
    {
      src: img1,
      alt: "Aerial view of boat with yellow sail in turquoise waters",
      caption: "Experience the breathtaking beauty of our crystal clear waters from above.",
    },
  ]

  const getThemeClasses = () => {
    switch (theme) {
      case "dark":
        return "bg-gradient-to-b from-gray-900 to-gray-800 text-white"
      case "ocean":
        return "bg-gradient-to-b from-cyan-50 to-cyan-200 text-cyan-900"
      default:
        return "bg-gradient-to-b from-white to-gray-100 text-gray-900"
    }
  }

  return (
    <main className={`min-h-screen transition-colors duration-500 ${getThemeClasses()}`}>
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-blue-600">
              Ocean Escapes
            </span>
          </h1>

          <div className="flex space-x-2">
            {/* Custom theme toggle buttons */}
            <button
              onClick={() => setTheme("light")}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                theme === "light"
                  ? "bg-gray-900 text-white"
                  : "bg-white/20 text-gray-800 dark:text-white hover:bg-white/30",
              )}
            >
              Light
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                theme === "dark"
                  ? "bg-gray-900 text-white"
                  : "bg-white/20 text-gray-800 dark:text-white hover:bg-white/30",
              )}
            >
              Dark
            </button>
            <button
              onClick={() => setTheme("ocean")}
              className={cn(
                "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                theme === "ocean"
                  ? "bg-cyan-600 text-white"
                  : "bg-white/20 text-gray-800 dark:text-white hover:bg-white/30",
              )}
            >
              Ocean
            </button>
          </div>
        </div>

        <p className="text-lg text-center max-w-2xl mx-auto mb-12">
          Discover unforgettable maritime experiences in the worlds most beautiful destinations.
        </p>

        {/* Custom view toggle */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={() => setActiveView("gallery")}
              className={cn(
                "px-5 py-2.5 text-sm font-medium rounded-l-lg",
                activeView === "gallery" ? "bg-cyan-600 text-white" : "bg-white text-gray-900 hover:bg-gray-100",
              )}
            >
              Gallery View
            </button>
            <button
              type="button"
              onClick={() => setActiveView("grid")}
              className={cn(
                "px-5 py-2.5 text-sm font-medium rounded-r-lg",
                activeView === "grid" ? "bg-cyan-600 text-white" : "bg-white text-gray-900 hover:bg-gray-100",
              )}
            >
              Grid View
            </button>
          </div>
        </div>

        {/* Content based on active view */}
        <div className="mb-12">
          {activeView === "gallery" ? (
            <EnhancedImageGallery images={images} />
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {images.map((image, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-gray-800/80 rounded-xl p-4 shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                    <Image
                      src={image.src || "/placeholder.svg"}
                      alt={image.alt}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{`Destination ${index + 1}`}</h3>
                  <p className="text-sm">{image.caption}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          {/* Custom CTA button */}
          <button
            className="px-8 py-4 text-white font-semibold rounded-full 
                      bg-gradient-to-r from-cyan-500 to-blue-500 
                      hover:from-cyan-600 hover:to-blue-600 
                      shadow-lg hover:shadow-xl 
                      transform transition-all duration-300 hover:-translate-y-1"
          >
            Book Your Adventure
          </button>
        </div>
      </div>
    </main>
  )
}
