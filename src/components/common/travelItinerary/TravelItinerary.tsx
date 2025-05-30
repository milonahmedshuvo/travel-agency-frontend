"use client"

import type React from "react"
import { CheckCircle2 } from "lucide-react"
import { cn } from "@/components/lib/utils"




export interface ItineraryItem {
  title: string
  description: string
}

export interface TravelItineraryProps {
  items: ItineraryItem[]
 
}

export default function TravelItinerary({
  items,
}: TravelItineraryProps) {


 
  

  return (
    <div className={cn(" p-4 md:p-6 lg:p-8 bg-white mt-5 rounded-lg")}>
      <div className="mb-8 space-y-4">
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">Description</h2>
        <p className="text-base text-muted-foreground md:text-lg">Join us on an unforgettable journey through [destination], where you ll experience the perfect blend of adventure, culture, and relaxation.</p>
      </div>

      <div className="space-y-6">
         {
           items.map((item, index) => <div key={index} className="flex items-start gap-3">
                  { <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium md:text-xl">{item.title}</h3>
                    <p className="text-sm text-muted-foreground md:text-base">{item.description}</p>
                  </div>
                </div>  )
         }
      </div>
    </div>
  )
}

