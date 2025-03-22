import { ArrowRight, Info, Triangle, Flame } from "lucide-react"


export default function BookingCard() {
  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-3xl font-bold mb-6">Book Now!</h1>

      <div className="space-y-4 mb-6">
        {/* Feature points with blue triangle icons */}
        <div className="flex items-start gap-3">
          <Triangle className="h-5 w-5 text-blue-500 fill-blue-500 flex-shrink-0 mt-1 rotate-180" />
          <p className="text-gray-800">Indulge in a Once-in-a-Lifetime Wine & Culinary Adventure!</p>
        </div>

        <div className="flex items-start gap-3">
          <Triangle className="h-5 w-5 text-blue-500 fill-blue-500 flex-shrink-0 mt-1 rotate-180" />
          <p className="text-gray-800">Limited Availability – Reserve Your Spot Now!</p>
        </div>

        <div className="flex items-start gap-3">
          <Triangle className="h-5 w-5 text-blue-500 fill-blue-500 flex-shrink-0 mt-1 rotate-180" />
          <p className="text-gray-800">Secure Payment & Instant Confirmation</p>
        </div>
      </div>

      {/* Payment methods */}
      <p className="text-gray-700 mb-6">Accepts PayPal, Strip Payment Method</p>

      {/* Special offer */}
      <div className="flex items-start gap-3 mb-4">
        <Flame className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
        <p className="text-gray-800">Special Offer: Book today & get a free souvenir bottle of wine!</p>
      </div>

      {/* Reserve now info */}
      <div className="flex items-start gap-3 mb-6">
        <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
        <p className="text-gray-800">Reserve now & pay later to book your spot and pay nothing today</p>
      </div>

      {/* Book now button */}
      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition-colors flex justify-center">
        Book Now
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
    </div>
  )
}

