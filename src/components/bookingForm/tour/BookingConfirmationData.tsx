
interface BookingConfirmationProps {
  email: string
  age: string
  phone: string
  specialRequests?: string
  className?: string
}

export function BookingConfirmationData({
  email,
  age,
  phone,
  specialRequests = "N/A",
  className,
}: BookingConfirmationProps) {


  return (
    <div className={`w-full rounded-lg mt-7 ${className}`}>

      <div  className="bg-white ">

        <div className="flex flex-col sm:flex-row sm:items-center gap-2 pb-1">
          <div className="flex items-center gap-2 ">
            <span className="font-medium text-gray-700">Email:</span>
          </div >
          <span className="text-gray-600">{email}</span>
        </div >

        <div className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
          <div  className="flex items-center gap-2 ">
            <span className="font-medium text-gray-700">Adult:</span>
          </div>
          <span className="text-gray-600">{age}</span>
        </div>

        <div  className="flex flex-col sm:flex-row sm:items-center gap-2  pb-1">
          <div className="flex items-center gap-2 ">
            <span className="font-medium text-gray-700">Phone:</span>
          </div>
          <span className="text-gray-600">{phone}</span>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-2">
          <div className="flex items-center gap-2 ">
            <span className="font-medium text-gray-700">Special Requests:</span>
          </div>
          <span className="text-gray-600">{specialRequests}</span>
        </div>

      </div>
    </div>
  )
}

