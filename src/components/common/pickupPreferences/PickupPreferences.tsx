import { BirdIcon as Helicopter } from "lucide-react"


export default function PickupPreferences() {
  return (
    <div className=" p-6 rounded-lg bg-[#ffffff] mt-5">
      <div className="flex items-center justify-start mb-4">
        <div className="bg-orange-100 p-2 rounded-full">
          <Helicopter className="h-6 w-6 text-orange-500" />
        </div>
      </div>

      <h2 className="text-2xl font-medium text-gray-800 mb-4">Pick-Up & Return Preferences</h2>

      <p className="text-gray-700 mb-6">
        If you plan to drink during your excursion, please provide your pick-up and return details so we can arrange
        safe transportation for you.
      </p>

      <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md transition-colors">
        Fill Out Transportation Details
      </button>
    </div>
  )
}

