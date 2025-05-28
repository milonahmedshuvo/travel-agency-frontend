import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowDown, ArrowUp, MoreHorizontal } from "lucide-react"
import type { ReactNode } from "react"

interface StatCardProps {
  title: string
  value: string | number,
  change: string
  trend: "up" | "down"
  icon: ReactNode
}

export function StatCard({ title, value, change, trend, icon }: StatCardProps) {



  return (
    <Card className="overflow-hidden h-full flex flex-col justify-center items-center">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
          {icon}
          {title}
        </CardTitle>
        <button className="h-8 w-8">
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </CardHeader>
      <CardContent>
        <div className="text-[27px] font-bold">{value}</div>
        <div className="mt-2 flex items-center text-xs">
          {trend === "up" ? (
            <ArrowUp className="mr-1 h-3 w-3 text-green-500" />
          ) : (
            <ArrowDown className="mr-1 h-3 w-3 text-red-500" />
          )}
          <span className={trend === "up" ? "text-green-500" : "text-red-500"}>{change}</span>
          <span className="ml-1 text-muted-foreground">from last week</span>
        </div>
      </CardContent>
    </Card>
  )
}
