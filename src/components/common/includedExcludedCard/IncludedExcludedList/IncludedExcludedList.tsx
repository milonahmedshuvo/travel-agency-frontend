import { cn } from "@/components/lib/utils"
import { Check, X } from "lucide-react"


export type ListItem = {
  text: string
}

export type IncludedExcludedListProps = {
  title?: string
  includedItems: ListItem[]
  excludedItems: ListItem[]
  className?: string
}

export function IncludedExcludedList({
  title = "What's Included & Excluded?",
  includedItems,
  excludedItems,
  className,
}: IncludedExcludedListProps) {
  return (
    <div className={cn("w-full max-w-3xl space-y-6", className)}>
      <h2 className="text-2xl font-bold tracking-tight">{title}</h2>

      <div className="space-y-6">
        {/* Included Items */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-green-100 text-green-600">
              <Check className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-normal">Whats Included:</h3>
          </div>

          <ul className="space-y-3 pl-8">
            {includedItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="mt-1 text-sky-500">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 4L12 20M12 4L6 10M12 4L18 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span>{item.text}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Excluded Items */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-red-100 text-red-600">
              <X className="h-4 w-4" />
            </div>
            <h3 className="text-lg font-normal">Whats Not Included:</h3>
          </div>

          <ul className="space-y-3 pl-8">
            {excludedItems.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="mt-1 text-sky-500">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 4L12 20M12 4L6 10M12 4L18 10"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <span className="" >{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

