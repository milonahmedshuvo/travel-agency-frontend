/* eslint-disable @typescript-eslint/no-empty-object-type */
import type React from "react"
import { forwardRef } from "react"
import { cn } from "../lib/utils"


interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const CustomInput = forwardRef<HTMLInputElement, InputProps>(({ className, ...props }, ref) => {
  return (
    <input
      className={cn(
        "flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-50 dark:placeholder-gray-400",
        className,
      )}
      ref={ref}
      {...props}
    />
  )
})
CustomInput.displayName = "CustomInput"

export { CustomInput }
