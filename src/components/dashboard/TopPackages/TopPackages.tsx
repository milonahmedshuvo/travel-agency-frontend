import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MoreHorizontal } from "lucide-react"


export function TopPackages() {

  
  return (
    <Card className="overflow-hidden h-full">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-[20px] font-[500]">Top Packages</CardTitle>
        <button className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </CardHeader>



      <CardContent className="p-0 pt-2 flex flex-row  xl:flex-col justify-between">

        <div className="relative mx-auto  max-w-[180px]  xl:max-w-[240px] pt-4 ">


          <div className="relative aspect-square">
            <svg viewBox="0 0 100 100" className="w-full h-full">
              {/* Background circle */}
              <circle cx="50" cy="50" r="40" fill="none" stroke="#E5E7EB" strokeWidth="12" />
              {/* Sea Tour - 35% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="12"
                strokeDasharray="251.2"
                strokeDashoffset="0"
                transform="rotate(-90 50 50)"
              />
              {/* Land Tour - 28% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#38BDF8"
                strokeWidth="12"
                strokeDasharray="251.2"
                strokeDashoffset="251.2"
                transform="rotate(-90 50 50)"
              />
              {/* Cultural Tours - 22% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#93C5FD"
                strokeWidth="12"
                strokeDasharray="251.2"
                strokeDashoffset="163.3"
                transform="rotate(-90 50 50)"
              />
              {/* Culinary & Wine - 15% */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#DBEAFE"
                strokeWidth="12"
                strokeDasharray="251.2"
                strokeDashoffset="201.0"
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-sm text-muted-foreground">This Week</div>
              <div className="text-[27px] font-bold">1,856</div>
              <div className="text-xs text-muted-foreground">Total Participants</div>
            </div>
          </div>
        </div>

        <div  className="mt-4 space-y-5 px-6 pb-6">
          <div className="flex items-center">
            <div className="h-10 w-10 rounded bg-blue-500 mr-2 flex justify-center items-center text-white text-sm">35%</div>

            <div className="flex flex-col">
              <span className="text-sm font-medium">Sea Tour</span>
              <span className="text-sm text-muted-foreground text-[#757D83] text-[14px]">650 Participants</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="h-10 w-10 rounded bg-blue-400 mr-2 flex justify-center items-center text-white text-sm">28%</div>

            <div className="flex flex-col">
              <span className="text-sm font-medium">Land Tour</span>
              <span className="text-sm text-muted-foreground text-[#757D83] text-[14px]">520 Participants</span>
            </div>
          </div>

          <div className="flex items-center">
            <div className="h-10 w-10 rounded bg-[#B9E0FF] mr-2 flex justify-center items-center text-black text-sm">18%</div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Cultural Tours</span>
              <span className="text-sm text-muted-foreground text-[#757D83] text-[14px]">408 Participants</span>
            </div>
           
          </div>

          <div className="flex items-center">
            <div className="h-10 w-10 rounded bg-[#E8F5FF] mr-2 flex justify-center items-center text-black text-sm">15%</div>
            <div className="flex flex-col">
              <span className="text-sm font-medium">Culinary & Wine</span>
              <span className="text-sm text-muted-foreground text-[#757D83] text-[14px]">278 Participants</span>
            </div>
           
          </div>
        </div>
      </CardContent>



    </Card>
  )
}
