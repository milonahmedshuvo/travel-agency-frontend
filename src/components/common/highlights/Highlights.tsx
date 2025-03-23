import { ChevronUp } from "lucide-react"


export default function Highlights() {
  return (
    <section className="w-full px-4 py-12 md:py-16 bg-white mt-5 rounded-lg">
      <h2 className="text-3xl md:text-4xl font-medium mb-8 text-gray-900">Highlights</h2>

      <div className="space-y-6">
        <HighlightItem text="Experience the breathtaking beauty of Santorini from a unique perspective." />
        <HighlightItem text="Enjoy a sunset sailing tour with expert guides and local wine tasting." />
        <HighlightItem text="Discover hidden gems and scenic spots off the beaten path." />
        <HighlightItem text="Indulge in local cuisine and traditional flavors." />
        <HighlightItem text="Capture stunning photos at the most Instagrammable spots." />
      </div>
    </section>
  )
}

function HighlightItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex-shrink-0">
        <ChevronUp className="h-5 w-5 text-blue-500 rotate-180 transform" />
      </div>
      <p className="text-lg text-gray-700">{text}</p>
    </div>
  )
}

