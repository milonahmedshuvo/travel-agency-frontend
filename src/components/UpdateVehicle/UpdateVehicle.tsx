/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import React, { useState, useEffect, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Upload, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import {
  useGetAllVehicleQuery,
  useGetSingleVehicleQuery,
  useUpdateVehicleMutation,
} from "@/redux/api/vehicle/vehicleApi";

const MAX_FILE_SIZE = 1024 * 1024 * 1024; // 25MB
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png"];

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Vehicle name must be at least 2 characters." }),
  vehicleType: z.string().min(1, { message: "Please select a vehicle type." }),
  pricePerHR: z.coerce
    .number({
      invalid_type_error: "Price must be a valid number",
      required_error: "Price is required",
    })
    .nonnegative({ message: "Price must be zero or a positive number" })
    .finite(),
  img: z
    .any()
    .refine(
      (file) => !file || (file instanceof File && file.size <= MAX_FILE_SIZE),
      {
        message: "Max image size is 25MB.",
      }
    )
    .refine(
      (file) =>
        !file ||
        (file instanceof File && ACCEPTED_IMAGE_TYPES.includes(file.type)),
      {
        message: "Only .jpg, .jpeg, and .png formats are supported.",
      }
    )
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

export default function UpdateVehicle({ id }: { id: string }) {
  const router = useRouter();
  const { data: singleVehicle, isLoading: isFetching } =
    useGetSingleVehicleQuery(id);
  const [updateVehicle, { isLoading: isUpdating }] = useUpdateVehicleMutation();
  const { refetch } = useGetAllVehicleQuery([]);
  const [file, setFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
    clearErrors,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      vehicleType: "",
      pricePerHR: 0,
    },
  });

  // Preload form values when data arrives
  useEffect(() => {
    if (singleVehicle?.data) {
      const { name, vehicleType, pricePerHR, img } = singleVehicle.data;
      reset({ name, vehicleType, pricePerHR });
      setImagePreview(img || null);
    }
  }, [singleVehicle, reset]);

  const onSubmit = async (data: FormValues) => {
    setIsUploading(true);

    try {
      const formData = new FormData();

      formData.append(
        "data",
        JSON.stringify({
          name: data.name,
          vehicleType: data.vehicleType,
          pricePerHR: data.pricePerHR,
        })
      );

      if (file) {
        formData.append("img", file);
      } else if (!imagePreview) {
        formData.append("img", "null");
      }

      const result = await updateVehicle({
        id,
        data: formData,
      }).unwrap();

      toast.success(result.message || "Vehicle updated successfully!");
      refetch();
      router.push("/dashboard/vehiclelist");
    } catch (err: any) {
      console.error("Update error:", err);

      if (err.status === 413) {
        toast.error("File size too large (max 25MB)");
      } else if (err.status === 415) {
        toast.error("Unsupported file type (only .jpg, .jpeg, .png allowed)");
      } else {
        toast.error(err?.data?.message || "Failed to update vehicle");
      }
    } finally {
      setIsUploading(false);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    clearErrors("img");

    if (e.target.files?.[0]) {
      const selectedFile = e.target.files[0];

      if (selectedFile.size > MAX_FILE_SIZE) {
        setError("img", {
          type: "manual",
          message: "Max image size is 25MB.",
        });
        return;
      }

      if (!ACCEPTED_IMAGE_TYPES.includes(selectedFile.type)) {
        setError("img", {
          type: "manual",
          message: "Only .jpg, .jpeg, and .png formats are supported.",
        });
        return;
      }

      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile));
      setValue("img", selectedFile);
    }
  };

  const handleDeleteImage = () => {
    setFile(null);
    setImagePreview(null);
    setValue("img", null);
  };

  const filePreviewURL = useMemo(
    () => (file ? URL.createObjectURL(file) : imagePreview),
    [file, imagePreview]
  );

  if (isFetching) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  return (
    <div className="w-full max-w-5xl mx-auto mt-10 mb-10 bg-white p-10 rounded shadow">
      <h1 className="text-4xl font-semibold mb-6">Update Vehicle</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Vehicle Name */}
        <div>
          <label className="block text-lg font-medium mb-1">Vehicle Name</label>
          <input
            type="text"
            {...register("name")}
            className="w-full border rounded-md px-3 py-3.5 focus:outline-none border-[#98A2B3]"
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Vehicle Type */}
        <div>
          <label className="block text-lg font-medium mb-1">Vehicle Type</label>
          <select
            {...register("vehicleType")}
            className="w-full border rounded-md px-3 py-3.5 focus:outline-none border-[#98A2B3]"
          >
            <option value="">Select Type</option>
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

        {/* Price Per Hour */}
        <div>
          <label className="block text-lg font-medium mb-1">
            Price Per Hour ($)
          </label>
          <input
            type="number"
            step="0.01"
            min="0"
            {...register("pricePerHR", { valueAsNumber: true })}
            className="w-full border rounded-md px-3 py-3.5 focus:outline-none border-[#98A2B3]"
          />
          {errors.pricePerHR && (
            <p className="text-sm text-red-500 mt-1">
              {errors.pricePerHR.message?.toString()}
            </p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-lg font-medium mb-2">
            Vehicle Image
          </label>
          <div className="border border-[#98A2B3] rounded-md p-4 text-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <Upload className="h-10 w-10 text-gray-400" />
              <p className="text-sm font-medium">Drop file or browse</p>
              <p className="text-xs text-gray-400">
                Format: .jpeg, .png
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
              {errors.img && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.img.message as string}
                </p>
              )}
              {filePreviewURL && (
                <div className="relative w-24 h-24 mt-4 rounded overflow-hidden border">
                  <img
                    src={filePreviewURL}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={handleDeleteImage}
                    className="absolute cursor-pointer top-0 right-0 bg-red-500 text-white text-xs px-1 rounded-bl hover:bg-red-600"
                  >
                    ✖
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full cursor-pointer py-3 rounded-md bg-gradient-to-t from-[#156CF0] to-[#38B6FF] text-white font-semibold flex justify-center items-center gap-2"
          disabled={isUpdating || isUploading}
        >
          {isUpdating || isUploading ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" />
              Updating vehicle...
            </>
          ) : (
            "Update Vehicle"
          )}
        </button>
      </form>
    </div>
  );
}
