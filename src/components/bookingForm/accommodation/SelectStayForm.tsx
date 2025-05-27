"use client";

import { useForm } from "react-hook-form";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/redux/hook";
import { setAcommodationStayBooking } from "@/redux/slice/accommodationBooking/accommodationBooking";

type FormData = {
  checkInDate: string;
  checkOutDate: string;
  guests: number;
  roomType: string;
  dataConsent: boolean;
  termsConsent: boolean;
};

export default function SelectStayForm() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    // watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      roomType: "",
      guests: 1,
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form Submitted:", data);

    const stayData = {
      checkInDate: data.checkInDate,
      checkOutDate: data.checkOutDate,
      numberOfGuests: data.guests,
      roomType: data.roomType,
    };

    dispatch(setAcommodationStayBooking(stayData));

    // Example: Redirect to next page with router
    router.push('/booking/accommodation/guestFormOne')
    // /booking/accommodation/guestFormTwo
    // /booking/accommodation/guestFormThree
    // /booking/accommodation/accommodationReview
    // /booking/accommodation/paymentCard
  };



  return (
    <section className="max-w-[780px] mx-auto p-4 md:p-12 shadow bg-[#ffffff]">
      <div className="mb-8">
        <p className="text-lg font-medium text-gray-600">Stay</p>
        <h1 className="text-4xl md:text-5xl font-bold mt-2">
          Select <span className="text-orange-400">Your Stay</span>
        </h1>
        <p className="text-gray-600 mt-2">
          Choose your check-in & check-out dates
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label
              htmlFor="check-in"
              className="text-lg font-medium text-gray-700"
            >
              Check-in:
            </label>
            <div className="relative">
              <input
                type="date"
                {...register("checkInDate", {
                  required: "Check-in date is required",
                })}
                className="pl-4 pr-10 py-3 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200"
              />
            </div>
            {errors.checkInDate && (
              <p className="text-red-500 text-sm">
                {errors.checkInDate.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <label
              htmlFor="check-out"
              className="text-lg font-medium text-gray-700"
            >
              Check-out:
            </label>
            <div className="relative">
              <input
                type="date"
                {...register("checkOutDate", {
                  required: "Check-out date is required",
                })}
                className="pl-4 pr-10 py-3 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200"
              />
            </div>
            {errors.checkOutDate && (
              <p className="text-red-500 text-sm">
                {errors.checkOutDate.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="guests" className="text-lg font-medium text-gray-700">
            Number of Guests:
          </label>
          <input
            type="number"
            {...register("guests", {
              required: true,
              min: 1,
              valueAsNumber: true,
            })}
            className="pl-4 pr-10 py-3 w-full border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200"
          />
          {errors.guests && (
            <p className="text-red-500 text-sm">
              Please enter at least 1 guest.
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label
            htmlFor="room-type"
            className="text-lg font-medium text-gray-700"
          >
            Select Room Type:
          </label>
          <select
            {...register("roomType", { required: true })}
            defaultValue="-- Select a Room Type --"
            className="appearance-none w-full pl-4 pr-10 py-3 border rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-blue-200 focus:border-blue-200"
          >
            <option value="" disabled>
              -- Select a Room Type --
            </option>

            <option value="SINGLE">SINGLE</option>
            <option value="DOUBLE">DOUBLE</option>
            <option value="TWIN">TWIN</option>
            <option value="TRIPLE">TRIPLE</option>
            <option value="SUITE">SUITE</option>
            <option value="DELUXE">DELUXE</option>
            <option value="FAMILY">FAMILY</option>
            <option value="EXECUTIVE">EXECUTIVE</option>
            <option value="PRESIDENTIAL">PRESIDENTIAL</option>
            <option value="STUDIO">PRESIDENTIAL</option>
            <option value="APARTMENT">APARTMENT</option>
          </select>
        </div>

        <div className="space-y-4 pt-2">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              {...register("dataConsent", {
                required: "You must consent to data handling.",
              })}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-200"
            />
            <label htmlFor="data-consent" className="text-gray-600">
              By using this form, you agree with the storage and handling of
              your data by this website.
            </label>
          </div>
          {errors.dataConsent && (
            <p className="text-red-500 text-sm">{errors.dataConsent.message}</p>
          )}

          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              {...register("termsConsent", {
                required: "You must accept the terms and conditions.",
              })}
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-200"
            />
            <label htmlFor="terms-consent" className="text-gray-600">
              By using this form you agree to our{" "}
              <Link href="#" className="text-gray-800 font-medium underline">
                Terms and Conditions
              </Link>
            </label>
          </div>
          {errors.termsConsent && (
            <p className="text-red-500 text-sm">
              {errors.termsConsent.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 px-4 mt-4 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white font-medium rounded-md flex items-center justify-center transition-colors duration-200 cursor-pointer"
        >
          Enter Guest Details <ChevronRight className="ml-2" size={18} />
        </button>
      </form>
    </section>
  );
}
