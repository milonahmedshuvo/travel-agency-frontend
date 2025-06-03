/* eslint-disable @typescript-eslint/no-unused-vars */
import { ArrowRight, Info, Triangle, Flame } from "lucide-react";
// import Link from "next/link";

interface BookingCardProps {
  title: string;
  features: string[];
  paymentMethods: string;
  specialOffer?: string;
  reserveInfo?: string;
  buttonText: string;
  route: string
   handleOrder: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function BookingCard({
  title,
  features,
  paymentMethods,
  specialOffer,
  reserveInfo,
  buttonText,
  route,
  handleOrder
}: BookingCardProps) {







  return (
    <div className="p-6 bg-white rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">{title}</h1>

      <div className="space-y-4 mb-6">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-3">
            <Triangle className="h-5 w-5 text-blue-500 fill-blue-500 flex-shrink-0 mt-1 rotate-180" />
            <p className="text-gray-800">{feature}</p>
          </div>
        ))}
      </div>

      <p className="text-gray-700 mb-6">{paymentMethods}</p>

      {specialOffer && (
        <div className="flex items-start gap-3 mb-4">
          <Flame className="h-5 w-5 text-orange-500 flex-shrink-0 mt-1" />
          <p className="text-gray-800">{specialOffer}</p>
        </div>
      )}

      {reserveInfo && (
        <div className="flex items-start gap-3 mb-6">
          <Info className="h-5 w-5 text-blue-500 flex-shrink-0 mt-1" />
          <p className="text-gray-800">{reserveInfo}</p>
        </div>
      )}

    
      {/* book now button  */}

      {/* <Link href={`${route}`}>  */}
      <button onClick={handleOrder} className="w-full cursor-pointer bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white py-3 rounded-md transition-colors flex justify-center">
        {buttonText}
        <ArrowRight className="ml-2 h-5 w-5" />
      </button>
     
      {/* </Link> */}

      {/* <Link href={`${route}`}> 
      <button className="w-full my-4 cursor-pointer bg-[#333333] text-white py-3 rounded-md transition-colors flex justify-center">
         Package Inquiry
      </button>
      </Link> */}


    </div>
  );
}
