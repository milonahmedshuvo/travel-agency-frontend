"use client";

import { useGetSingleCustomersQuery } from "@/redux/api/customer/customerApi";
import { TTourBooking } from "@/redux/api/travellist/travellist";
import Image from "next/image";
import man from "@/assets/logo/img1.jpg";
import Loading from "@/components/shared/loading/Loading";

interface TravelarListModalProps {
  selectedTraveler: TTourBooking | null;
  closeModal: () => void;
}

const TravelarListModal = ({
  selectedTraveler,
  closeModal,
}: TravelarListModalProps) => {
  console.log("click modal", selectedTraveler);
  const customerId = selectedTraveler?.customer?.id || "";
  const { data: customerData, isLoading} = useGetSingleCustomersQuery(customerId);

//   console.log("customerData", customerData?.data);
  const avatarSrc = customerData?.data?.avatar || man;


  if(isLoading) {
    return <Loading/>
  }

  return (
    <div>
      <div className="fixed inset-0 flex items-center justify-center bg-black/50  z-50 ">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-5xl relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-3 text-gray-500 hover:text-red-500 cursor-pointer text-2xl"
          >
            ✕
          </button>

          <div className="h-50 w-50 bg-sky-100 flex-shrink-0 rounded-full overflow-hidden">
            <Image
              width={400}
              height={400}
              src={avatarSrc || man}
              alt={customerData?.data?.name || "Traveler Avatar"}
              className="h-full w-full object-cover"
            />
          </div>

          <h1 className="text-[36px] font-[500] mt-5 mb-1.5 text-[#181818]">
            {customerData?.data?.customer?.firstName}
          </h1>
          <h1 className="text-lg text-[#181818] ">Travelar</h1>

          <div className="mb-24">
            <h1 className="text-3xl text-[36px] font-[500] mt-10 mb-4 text-[#181818]">
              User Information
            </h1>

            <p className="my-3 text-[20px] text-[#181818]">
              Email:{" "}
              <span className="text-[#626262]">
                {customerData?.data?.email}
              </span>
            </p>
            <p className="my-3 text-[20px] text-[#181818]">
              Phone:{" "}
              <span className="text-[#626262]">
                {customerData?.data?.contactNo}
              </span>
            </p>
            <p className="my-3 text-[20px] text-[#181818]">
              Address:{" "}
              <span className="text-[#626262]">
                {customerData?.data?.customer?.location || "N/A"}
              </span>{" "}
            </p>

            <p className="my-3 text-[20px] text-[#181818]">
              email:{" "}
              <span className="text-[#626262]">
                {customerData?.data?.email}
              </span>{" "}
            </p>
          </div>

          <div className="flex justify-between gap-4 ">
            <button
              onClick={closeModal}
              className="text-black bg-gray-200 py-2 w-full rounded cursor-pointer"
            >
              cencel
            </button>
            <button
              className="text-white bg-red-500 py-2 w-full rounded cursor-not-allowed opacity-50"
              disabled
            >
              Delete Traveler
            </button>
          </div>

          {/* <form className="space-y-4">
              <div>
                <label className="block mb-1">Product Name</label>
                <input
                  defaultValue={selectedTraveler?.name}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Price</label>
                <input
                  type="number"
                  defaultValue={selectedTraveler?.address}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <div>
                <label className="block mb-1">Category</label>
                <input
                  defaultValue={selectedTraveler?.address}
                  className="w-full border px-3 py-2 rounded"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
              >
                Save
              </button>
            </form> */}
        </div>
      </div>
    </div>
  );
};

export default TravelarListModal;
