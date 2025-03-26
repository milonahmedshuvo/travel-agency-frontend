
interface BookingSizeProps {
    date: string
    duration: string
    groupSize: string
    paymentMethod: string
    bookingReference:string
    className?: string
  }
  
  export function ConfirmedSize({
    date,
    duration,
    groupSize,
    paymentMethod,
    bookingReference,
    className,
  }: BookingSizeProps) {
  


  
    return (
      <div className={`w-full rounded-lg mt-7 ${className}`}>
  
        <div  className="bg-white space-y-4">
  
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-1">
            <div className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Date:</span>
            </div >
            <span className="text-gray-600">{date}</span>
          </div >
  
          <div className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
            <div  className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Duration:</span>
            </div>
            <span className="text-gray-600">{duration}</span>
          </div>
  
          <div  className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
            <div className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Group Size:</span>
            </div>
            <span className="text-gray-600">{groupSize}</span>
          </div>

          <div  className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
            <div className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Payment Method:</span>
            </div>
            <span className="text-gray-600">{paymentMethod}</span>
          </div>

          <div  className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
            <div className="flex items-center gap-2 ">
              <span className="font-medium text-gray-700">Booking Reference:</span>
            </div>
            <span className="text-gray-600">{bookingReference}</span>
          </div>
  
        
        </div>
      </div>
    )
  }
  
  