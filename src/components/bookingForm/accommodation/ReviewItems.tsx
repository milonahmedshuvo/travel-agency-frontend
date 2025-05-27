
interface BookingSizeProps {
    checkIn: string
    checkOut: string
    numberGuests: number
    className?: string
  }
  
  export function ReviewItems({
    checkIn,
    checkOut,
    numberGuests,
    className,
  }: BookingSizeProps) {
  


  
    return (
      <div className={`w-full rounded-lg mt-7 ${className}`}>
  
        <div  className="bg-white space-y-4">
  
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-1">
            <div className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Check-in:</span>
            </div >
            <span className="text-gray-600">{checkIn}</span>
          </div >
  
          <div className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
            <div  className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Check-out:</span>
            </div>
            <span className="text-gray-600">{checkOut}</span>
          </div>
  
          <div  className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
            <div className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Number of Guests:</span>
            </div>
            <span className="text-gray-600">{numberGuests}</span>
          </div>
        </div>
      </div>
    )
  }
  
  