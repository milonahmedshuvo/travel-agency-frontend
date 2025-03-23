"use client"

import type React from "react"

import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@/components/lib/utils"


export interface ItineraryItem {
  title: string
  description: string
  icon?: React.ReactNode
}

export interface TravelItineraryProps {
  title?: string
  introduction?: string
  destinationName?: string
  items: ItineraryItem[]
  ctaButton?: {
    text: string
    onClick?: () => void
  }
  className?: string
  animate?: boolean
  expandable?: boolean
}

export default function TravelItinerary({
  title = "Description",
  introduction = "Join us on an unforgettable journey through [destination], where you'll experience the perfect blend of adventure, culture, and relaxation.",
  destinationName = "",
  items,
  className,
  animate = true,
  expandable = true,
}: TravelItineraryProps) {
  const [activeSection, setActiveSection] = useState<number | null>(null)

  // Replace [destination] placeholder with actual destination if provided
  const formattedIntroduction = destinationName ? introduction.replace("[destination]", destinationName) : introduction

  return (
    <div className={cn(" p-4 md:p-6 lg:p-8 bg-white mt-5 rounded-lg", className)}>
      <div className="mb-8 space-y-4">
        <h2 className="text-3xl font-medium tracking-tight md:text-4xl">{title}</h2>
        <p className="text-base text-muted-foreground md:text-lg">{formattedIntroduction}</p>
      </div>

      <div className="space-y-6">
        {items.map((item, index) => {
          const ItemWrapper = animate ? motion.div : "div"

          return (
            <ItemWrapper
              key={index}
              {...(animate
                ? {
                    initial: { opacity: 0, y: 20 },
                    animate: { opacity: 1, y: 0 },
                    transition: { delay: index * 0.1 },
                  }
                : {})}
              className="group"
              onClick={expandable ? () => setActiveSection(activeSection === index ? null : index) : undefined}
            >
              <div
                className={cn(
                  "rounded-lg  bg-background p-4 transition-all duration-200 md:p-6",
                  expandable && "hover:border-primary/50 hover:shadow-md",
                  activeSection === index && "border-primary/50 shadow-md",
                  expandable && "cursor-pointer",
                )}
              >
                <div className="flex items-start gap-3">
                  {item.icon || <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-emerald-500" />}
                  <div className="space-y-2">
                    <h3 className="text-lg font-medium md:text-xl">{item.title}</h3>
                    <p className="text-sm text-muted-foreground md:text-base">{item.description}</p>
                  </div>
                </div>
              </div>
            </ItemWrapper>
          )
        })}
      </div>

     


    </div>
  )
}

