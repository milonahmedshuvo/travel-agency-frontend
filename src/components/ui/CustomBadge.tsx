import type React from "react"
import { cn } from "../lib/utils"


interface BadgeProps {
  variant?: "default" | "outline"
  className?: string
  children: React.ReactNode
}

export function CustomBadge({ variant = "default", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors",
        {
          "bg-blue-500 text-white hover:bg-blue-600": variant === "default",
          "border border-blue-500 text-blue-500 hover:bg-blue-100": variant === "outline",
        },
        className,
      )}
    >
      {children}
    </span>
  )
}
