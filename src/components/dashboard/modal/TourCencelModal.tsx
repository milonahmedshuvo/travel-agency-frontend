/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCancelTourBookingMutation } from "@/redux/api/tourPackages/tourPackagesApi";
import { useParams } from "next/navigation";
import toast from "react-hot-toast";

interface TravelarListModalProps {
  closeModal: () => void;
}

const TourCencelModal = ({
  closeModal,
}: TravelarListModalProps) => {
const params = useParams()
const id = params.id     
const [confirmCencelTourBooking] = useCancelTourBookingMutation()

  
console.log({id})

 const ConfirmTourBookingCencel = async () => {
     try {
         const response = await confirmCencelTourBooking({id: id,  reason: ""}).unwrap()
         console.log('Cancelled successfully:', response);

        if(response?.success){
          toast.success( response?.message || "Cancelled successfully")
        } 
     }catch(err: any){
        console.log("error", err)
        toast.error(err?.data?.message)
     }
 }   



  
  return (
    <div className="w-full ">
      <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 ">
        <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md relative">
          <button
            onClick={closeModal}
            className="absolute top-2 right-3 text-gray-500 hover:text-red-500 cursor-pointer text-2xl"
          >
            ✕
          </button>

         <h1 className="text-3xl mb-10 " >Are you sure cencel?</h1>
          <div className="flex justify-between gap-4 ">
            <button
              onClick={closeModal}
              className="text-black bg-gray-200 py-2 w-full rounded cursor-pointer"
            >
              cencel
            </button>
            <button
              className="text-white bg-red-500 py-2 w-full rounded opacity-85 cursor-pointer " 
              onClick={ConfirmTourBookingCencel}
            >
              Confirm Cencel
            </button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default TourCencelModal;
