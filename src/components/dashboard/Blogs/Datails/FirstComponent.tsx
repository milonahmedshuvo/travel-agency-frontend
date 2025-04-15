import { Plus } from "lucide-react";

const FirstComponent = () => {
    
  return (
    <div>
      <div className="mt-10 flex items-center justify-between ">
        <div className="space-y-2">
          <h1 className="text-[28px] font-[500] text-[#15202E]">
            The Most Scenic Rural Roads To Take A Road Trip
          </h1>
          <div className="text-[#333] text-[16px] font-[400] flex gap-3">
            <span>Coxs Bazar, Bangladesh</span>
            <span>5 Days Trip</span>
          </div>
        </div>

        <button className="bg-linear-to-t from-[#156CF0]  via-50%  to-[#38B6FF] to-50%  text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors">
          <Plus className="w-5 h-5" />
          <span>Edit Blog</span>
        </button>
      </div>

      <p className="text-[#333] text-[16px] font-[400] mt-7">
        During World War II, the U.S. military built concrete bunkers all over
        the island of Oahu as defensive lookout posts guarding Hawaii, and most
        of them have amazing views of the coastline. These pillboxes have been
        abandoned ever since the war, but theyve turned into beloved hiking
        destinations because of the great scenery and history behind them. Heres
        my guide for all of the pillbox hikes in Oahu, including some hidden
        gems!
      </p>
    </div>
  );
};

export default FirstComponent;
