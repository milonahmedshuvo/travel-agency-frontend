"use client"
import { HotelGrid } from './HotelGrid'


export default function HotelPackagesCardsPage() {


  return (
    <div className="px-4 md:px-6 py-8">
      {/* <Header title="Sea Tour Packages" onAddPackage={handleAddPackage} /> */}
      <HotelGrid />
    </div>
  )
}
