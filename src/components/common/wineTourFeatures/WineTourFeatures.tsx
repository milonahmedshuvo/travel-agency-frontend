import { ChevronUp } from "lucide-react"



export default function WineTourFeatures() {
  return (
    <div className="px-4 py-8 md:py-12">
      <h2 className="text-3xl font-bold mb-8 text-gray-900">Why Youll Love This Tour</h2>

      <div className="space-y-6">
        <FeatureItem
          title="Exclusive Vineyard Access"
          description="Visit family-owned wineries & meet expert winemakers"
        />

        <FeatureItem
          title="Premium Wine Tasting"
          description="Sample 5+ award-winning wines paired with local delicacies"
        />

        <FeatureItem
          title="Authentic Culinary Experience"
          description="Savor a gourmet Tuscan meal with wine pairings"
        />

        <FeatureItem
          title="Instagram-Worthy Views"
          description="Capture stunning landscapes & unforgettable memories"
        />

        <FeatureItem title="Local History & Culture" description="Discover hidden gems & historic estates" />
      </div>
    </div>
  )
}

function FeatureItem({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-blue-500 flex-shrink-0">
        <ChevronUp className="w-5 h-5 rotate-90" />
      </div>
      <div>
        <h3 className="text-xl font-medium text-gray-800">{title} –</h3>
        <p className="mt-1 text-gray-600">{description}</p>
      </div>
    </div>
  )
}

