"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Upload } from "lucide-react"

const formSchema = z.object({
  vehicleName: z.string().min(2, {
    message: "Vehicle name must be at least 2 characters.",
  }),
  vehicleType: z.string({
    required_error: "Please select a vehicle type.",
  }),
  vehiclePrice: z.string().min(1, {
    message: "Please enter a price.",
  }),
  image: z.any().optional(),
})

type FormValues = z.infer<typeof formSchema>

export default function AddVehicleForm() {
  const [file, setFile] = useState<File | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      vehicleName: "",
      vehicleType: "Boat",
      vehiclePrice: "$56/per hour",
    },
  })

  const onSubmit = (data: FormValues) => {
    const formData = new FormData()
    formData.append("vehicleName", data.vehicleName)
    formData.append("vehicleType", data.vehicleType)
    formData.append("vehiclePrice", data.vehiclePrice)
    if (file) {
      formData.append("image", file)
    }
    console.log("Form submitted:", Object.fromEntries(formData))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0])
    }
  }

  return (
    <div className="w-full max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Add New Vehicle</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Vehicle Name */}
        <div>
          <label className="block text-base font-medium mb-1">Vehicle Name</label>
          <input
            type="text"
            placeholder="Enter the name"
            {...register("vehicleName")}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.vehicleName && (
            <p className="text-sm text-red-500 mt-1">{errors.vehicleName.message}</p>
          )}
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="block text-base font-medium mb-1">Vehicle Type</label>
          <select
            {...register("vehicleType")}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="Boat">Boat</option>
            <option value="Car">Car</option>
            <option value="Motorcycle">Motorcycle</option>
            <option value="RV">RV</option>
            <option value="Jet Ski">Jet Ski</option>
          </select>
          {errors.vehicleType && (
            <p className="text-sm text-red-500 mt-1">{errors.vehicleType.message}</p>
          )}
        </div>

        {/* Vehicle Price */}
        <div>
          <label className="block text-base font-medium mb-1">Vehicle Price</label>
          <input
            type="text"
            {...register("vehiclePrice")}
            className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {errors.vehiclePrice && (
            <p className="text-sm text-red-500 mt-1">{errors.vehiclePrice.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-base font-medium mb-2">Upload Image</label>
          <div className="border rounded-md p-4 text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <Upload className="h-10 w-10 text-gray-400" />
              <p className="text-sm font-medium">Drop file or browse</p>
              <p className="text-xs text-gray-400">Format: .jpeg, .png & Max file size: 25 MB</p>
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept=".jpeg,.jpg,.png"
                onChange={handleFileChange}
              />
              <button
                type="button"
                onClick={() => document.getElementById("file-upload")?.click()}
                className="px-4 py-1 text-sm rounded-md bg-gray-200 hover:bg-gray-300"
              >
                Browse Files
              </button>
              {file && <p className="text-sm text-green-600 mt-2">Selected: {file.name}</p>}
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-semibold"
        >
          Add Vehicle
        </button>
      </form>
    </div>
  )
}
