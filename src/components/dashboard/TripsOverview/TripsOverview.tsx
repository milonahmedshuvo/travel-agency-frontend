/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"
import { LineChart } from "../LineChart/LineChart"



interface TripsOverviewProps {
  timeRange: string
  setTimeRange: (value: string) => void
}

export function TripsOverview({ timeRange, setTimeRange }: TripsOverviewProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-full">
        <CardTitle className="text-[23px] font-[500]">Trips Overview</CardTitle>
        <button  className="h-8 px-3 text-xs md:text-sm">
          Last {timeRange} Months <ChevronDown className="ml-1 h-3 w-3" />
        </button>
      </CardHeader>
      <CardContent className="pt-4">
        <div className="h-[350px] w-full">
          <LineChart />
        </div>
      </CardContent>
    </Card>
  )
}
