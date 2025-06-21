import { ChevronUp } from "lucide-react"

interface Thighlights {
  title : string
}

interface TThighlightsType {
  highlights: Thighlights[]
  title: string
}



export default function Highlights({highlights, title}: TThighlightsType) {

  

  return (
    <section className="w-full px-4 py-12 md:py-16 bg-white rounded-lg">
      <h2 className="text-3xl md:text-4xl font-medium mb-8 text-gray-900">{title}</h2>
      <div className="space-y-6">        
        {
          highlights?.map((item, index)=> <HighlightItem key={index} title={item.title} /> ) 
        }
      </div>
    </section>
  )
}

function HighlightItem({ title }: Thighlights) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 flex-shrink-0">
        <ChevronUp className="h-5 w-5 text-blue-500 rotate-180 transform" />
      </div>
      <p className="text-lg text-gray-700">{title}</p>
    </div>
  )
}

