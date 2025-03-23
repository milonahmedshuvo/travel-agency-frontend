import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { IncludedExcludedList, ListItem } from "../IncludedExcludedList/IncludedExcludedList"


export interface IncludedExcludedCardProps {
  title?: string
  includedItems: ListItem[]
  excludedItems: ListItem[]
  className?: string
}

export function IncludedExcludedCard({
  title = "What's Included & Excluded?",
  includedItems,
  excludedItems,
  className,
}: IncludedExcludedCardProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <IncludedExcludedList title="" includedItems={includedItems} excludedItems={excludedItems} />
      </CardContent>
    </Card>
  )
}

