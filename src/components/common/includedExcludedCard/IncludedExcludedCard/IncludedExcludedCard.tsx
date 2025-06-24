import { Card, CardContent } from "@/components/ui/card"
import { IncludedExcludedList, ListItem } from "../IncludedExcludedList/IncludedExcludedList"


export interface IncludedExcludedCardProps {
  includedItems: ListItem[]
  excludedItems: ListItem[]
  
}



export function IncludedExcludedCard({
  includedItems,
  excludedItems,
}: IncludedExcludedCardProps) {
  return (
    <Card >
        <h1 className="text-[28px] ml-6 mb-10 pt-4 rounded-lg font-semibold ">Whats Included & Excluded?</h1>
      <CardContent>
        <IncludedExcludedList includedItems={includedItems} excludedItems={excludedItems} />
      </CardContent>
    </Card>
  )
}

