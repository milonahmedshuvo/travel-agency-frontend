"use client"

import { useState } from "react"
import { PlusCircle, X, Save } from "lucide-react"

interface TourVehicle {
  vehicleType: string
  vehicleName: string
}

export default function TourVehicleNameTypeForm() {
  const [vehicles, setVehicles] = useState<TourVehicle[]>([
    { vehicleType: "", vehicleName: "" }
  ])

  const [isSaving, setIsSaving] = useState(false)

  const handleChange = (index: number, field: keyof TourVehicle, value: string) => {
    const updated = [...vehicles]
    updated[index][field] = value
    setVehicles(updated)
  }

  const addVehicle = () => {
    setVehicles([...vehicles, { vehicleType: "", vehicleName: "" }])
  }

  const removeVehicle = (index: number) => {
    const updated = [...vehicles]
    updated.splice(index, 1)
    setVehicles(updated)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    await new Promise((resolve) => setTimeout(resolve, 1000))

    console.log("Submitted vehicles:", vehicles)
    setIsSaving(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Tour Vehicle Selection</h2>

      {vehicles.map((item, index) => (
        <div key={index} className="relative">
          {index > 0 && (
            <button
              type="button"
              className="absolute top-2 right-2"
              onClick={() => removeVehicle(index)}
            >
              <X className="h-4 w-4" />
            </button>
          )}

          <div className="space-y-3 px-4">
            <div>
              <label className="text-[#101010] text-[17px]">Vehicle Type</label>
              <select
                value={item.vehicleType}
                onChange={(e) => handleChange(index, "vehicleType", e.target.value)}
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none"
              >
                <option value="">Select vehicle type</option>
                <option value="Car">Car</option>
                <option value="Bus">Bus</option>
                <option value="Van">Van</option>
                <option value="Bike">Bike</option>
              </select>
            </div>

            <div>
              <label className="text-[#101010] text-[17px]">Vehicle Name</label>
              <select
                value={item.vehicleName}
                onChange={(e) => handleChange(index, "vehicleName", e.target.value)}
                className="py-2.5 px-2 border border-[#98A2B3] w-full rounded focus:outline-none"
              >
                <option value="">Select vehicle name</option>
                <option value="Toyota HiAce">Toyota HiAce</option>
                <option value="Nissan X-Trail">Nissan X-Trail</option>
                <option value="Yamaha FZ">Yamaha FZ</option>
                <option value="Hino AC Bus">Hino AC Bus</option>
              </select>
            </div>
          </div>
        </div>
      ))}

      <div className="flex flex-col sm:flex-row gap-3">
        <button type="button" onClick={addVehicle} className="flex items-center gap-2">
          <PlusCircle className="h-4 w-4" />
          Add Vehicle
        </button>

        <button type="submit" disabled={isSaving} className="flex items-center gap-2">
          {isSaving ? (
            <div className="h-4 w-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          ) : (
            <Save className="h-4 w-4" />
          )}
          Save Vehicles
        </button>
      </div>
    </form>
  )
}
