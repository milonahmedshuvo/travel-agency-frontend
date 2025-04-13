"use client"

import { TourGrid } from "./TourGrid"
import { Header } from "./TourHeader"
import TourImg from '../../../assets/blog/blog.png'



// Sample data for tour packages
const tourPackages = Array.from({ length: 12 }, (_, i) => ({
  id: `tour-${i + 1}`,
  imageUrl:TourImg,
  location: "Cox's Bazar, Bangladesh",
  price: 400,
  duration: 5,
  rating: 5.0,
}))



export default function TourPackagesCardsPage() {
  const handleAddPackage = () => {
    console.log("Add package clicked")
    // Implement your add package functionality here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Header title="Sea Tour Packages" onAddPackage={handleAddPackage} />
      <TourGrid packages={tourPackages} />
    </div>
  )
}
