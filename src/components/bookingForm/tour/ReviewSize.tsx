
interface BookingSizeProps {
    date: string
    duration: number
    groupSize: number
    className?: string
  }
  
  
  export function BookingSize({
    date,
    duration,
    groupSize,
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
  
        
        </div>
      </div>
    )
  }
  
  