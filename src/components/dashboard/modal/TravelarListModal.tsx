"use client"

import { TTravelersList } from "@/app/(withDashboard)/dashboard/travelerList/page"
interface TravelarListModalProps {
    selectedTraveler: TTravelersList | null;
    closeModal: () => void;
  }





const TravelarListModal = ({ selectedTraveler, closeModal }:TravelarListModalProps) => {

  console.log('click modal', selectedTraveler)





  return (
    <div>
         <div className="fixed inset-0 flex items-center justify-center bg-black/50  z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 cursor-pointer"
            >
              ✕
            </button>
            <h3 className="text-xl font-semibold mb-4">Create Modal not show data handle delete and cencel</h3>
















          <div className="flex justify-between gap-4 ">
            <button className="text-black bg-gray-200 py-2 w-full rounded cursor-pointer">cencel</button>
            <button className="text-white bg-red-500 py-2 w-full rounded cursor-pointer">cencel</button>
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
  )
}

export default TravelarListModal