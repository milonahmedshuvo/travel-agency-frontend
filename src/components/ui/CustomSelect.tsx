/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "../lib/utils"



interface SelectProps {
  value: string
  onValueChange: (value: string) => void
  placeholder?: string
  className?: string
  children: React.ReactNode
}

export function CustomSelect({ value, onValueChange, placeholder, className, children }: SelectProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <div className={cn("relative", className)} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="flex h-10 w-full items-center justify-between rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-50"
      >
        <span>{value || placeholder || "Select option"}</span>
        <ChevronDown className="h-4 w-4 opacity-50" />
      </button>
      {open && (
        <div className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md border border-gray-300 bg-white py-1 text-sm shadow-lg dark:border-gray-700 dark:bg-gray-900">
          {children}
        </div>
      )}
    </div>
  )
}

interface SelectItemProps {
  value: string
  onClick: (value: string) => void
  children: React.ReactNode
}

export function CustomSelectItem({ value, onClick, children }: SelectItemProps) {
  return (
    <div
      className="relative flex cursor-pointer select-none items-center rounded-sm py-1.5 px-2 text-sm outline-none hover:bg-gray-100 dark:hover:bg-gray-800"
      onClick={() => onClick(value)}
    >
      {children}
    </div>
  )
}
