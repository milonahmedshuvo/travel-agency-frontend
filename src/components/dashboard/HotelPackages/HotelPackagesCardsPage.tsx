"use client"
import HotelImg from '../../../assets/avatars/hotel.jpg'
import { Header } from "../TourPackages/TourHeader"
import { HotelGrid } from './HotelGrid'





// Sample data for tour packages
const tourPackages = Array.from({ length: 12 }, (_, i) => ({
  id: `tour-${i + 1}`,
  imageUrl: HotelImg,
  location: "Cox's Bazar, Bangladesh",
  price: 400,
  duration: 5,
  rating: 5.0,
}))



export default function HotelPackagesCardsPage() {
  const handleAddPackage = () => {
    console.log("Add package clicked")
    // Implement your add package functionality here
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Header title="Sea Tour Packages" onAddPackage={handleAddPackage} />
      <HotelGrid packages={tourPackages} />
    </div>
  )
}
