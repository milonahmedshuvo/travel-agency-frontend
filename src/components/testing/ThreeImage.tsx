"use client"

import EnhancedImageGallery from "./EnhancedImageGallery"
import img1 from "../../assets/landTour/img1.jpg"
import img2 from "../../assets/landTour/img2.jpg"

export default function ThreeImage() {
 

  const images = [
    {
      src: img1,
      alt: "Person in a boat looking at ocean cliffs",
      caption: "Explore hidden coves and majestic cliffs from our traditional longboats.",
    },
    {
      src: img2,
      alt: "Split view of boat and underwater scene with fish",
      caption: "Discover the vibrant underwater world with our guided snorkeling tours.",
    },
    {
      src: img1,
      alt: "Aerial view of boat with yellow sail in turquoise waters",
      caption: "Experience the breathtaking beauty of our crystal clear waters from above.",
    },
  ]




  

  return (
    <main>
      <div className="container mx-auto "> 
        {/* Custom view toggle */}
        <EnhancedImageGallery images={images} />

      </div>
    </main>
  )
}
