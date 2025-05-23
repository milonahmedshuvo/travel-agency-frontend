/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload } from "lucide-react";
// import { useCreateVehicleMutation } from "@/redux/api/vehicle/vehicleApi"
import toast from "react-hot-toast";
import { useCreateVehicleMutation } from "@/redux/api/vehicle/vehicleApi";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Vehicle name must be at least 2 characters.",
  }),
  vehicleType: z.string({
    required_error: "Please select a vehicle type.",
  }),
  pricePerHR: z.coerce.number().min(1, {
    message: "Price must be a positive number",
  }),
  img: z.any().optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function AddVehicleForm() {
  const [file, setFile] = useState<File | null>(null);
  const [createVehicle] = useCreateVehicleMutation();


  const {
    register,
    handleSubmit,
    formState: { errors },
    // setValue,
    // reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      vehicleType: "",
      pricePerHR: 0,
    },
  });




  const onSubmit = async (data: FormValues) => {
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name: data?.name,
        vehicleType: data?.vehicleType,
        pricePerHR: data?.pricePerHR,
      })
    );

    if (file) {
      formData.append("img", file);
    }

  
    try {
      const result = await createVehicle(formData).unwrap();
      console.log("Vehicle created successfully:", result);

      toast.success( result.message || "Vehicle created successfully!");
      // reset();
    } catch (err: any) {
      console.error("Failed to create vehicle:", err);
    }
  };



  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFile(e.target.files[0]);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-4 mt-10 mb-10">
      <h1 className="text-3xl font-bold mb-6">Add New Vehicle</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Vehicle Name */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Vehicle Name
          </label>
          <input
            type="text"
            placeholder="Enter the name"
            {...register("name")}
            className="w-full border rounded-md px-3 py-2 focus:outline-none border-[#98A2B3]  "
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Vehicle Type
          </label>
          <select
            {...register("vehicleType")}
            className="w-full border rounded-md px-3 py-2 focus:outline-none border-[#98A2B3]"
          >
            <option value="BOAT">Boat</option>
            <option value="CAR">Car</option>
            <option value="VAN">Van</option>
            <option value="AIRCRAFT">Aircraft</option>
          </select>
          {errors.vehicleType && (
            <p className="text-sm text-red-500 mt-1">
              {errors.vehicleType.message}
            </p>
          )}
        </div>

        {/* Vehicle Price */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Vehicle Price
          </label>
          <input
            type="number"
            {...register("pricePerHR")}
            placeholder="Vehicle Price"
            className="w-full border rounded-md px-3 py-2 focus:outline-none border-[#98A2B3]"
          />
          {errors.pricePerHR && (
            <p className="text-sm text-red-500 mt-1">
              {errors.pricePerHR.message}
            </p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-lg font-medium mb-2">
            Upload Image
          </label>
          <div className="border border-[#98A2B3] rounded-md p-4 text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <Upload className="h-10 w-10 text-gray-400" />
              <p className="text-sm font-medium">Drop file or browse</p>
              <p className="text-xs text-gray-400">
                Format: .jpeg, .png & Max file size: 25 MB
              </p>
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
              {file && (
                <p className="text-sm text-green-600 mt-2">
                  Selected: {file.name}
                </p>
              )}
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
  );
}
