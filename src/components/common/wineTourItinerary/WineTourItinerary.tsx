import Link from "next/link"
import { MapPin, Clock, Sun, Wine, Utensils, Building, Mountain, Home } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"




export default function WineTourItinerary() {
  return (
    <div className="px-4 py-8 max-w-4xl">
      <Card className="border-none shadow-sm">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl md:text-3xl font-bold text-slate-800">
            Detailed Itinerary – What to Expect
          </CardTitle>
          <CardDescription className="flex items-center gap-2 text-base pt-4">
            <MapPin className="h-5 w-5 text-blue-500" />
            <span>Meeting point google maps-</span>
            <Link
              href="https://maps.app.goo.gl/DfYzfDTi9igvkp86A"
              className="text-blue-500 hover:underline"
              target="_blank"
            >
              https://maps.app.goo.gl/DfYzfDTi9igvkp86A
            </Link>
          </CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex items-center gap-2 mb-6 mt-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg md:text-xl font-semibold text-slate-800">Hour-by-Hour Breakdown</h2>
          </div>

          <div className="space-y-8">
            {/* 9:00 AM */}
            <div className="relative pl-8 md:pl-10 border-l-2 border-orange-200">
              <div className="absolute -left-3 top-0 bg-orange-400 p-1.5 rounded-full">
                <Sun className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800">9:00 AM – Pickup & Scenic Drive</h3>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                Meet your guide at the designated meeting point. Relax in a luxury van as you drive through breathtaking
                Tuscan landscapes.
              </p>
            </div>

            {/* 10:30 AM */}
            <div className="relative pl-8 md:pl-10 border-l-2 border-orange-200">
              <div className="absolute -left-3 top-0 bg-orange-400 p-1.5 rounded-full">
                <Wine className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800">
                10:30 AM – First Winery Visit & Wine Tasting
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                Explore an award-winning vineyard, learn about the winemaking process, and enjoy a guided 5-wine tasting
                session.
              </p>
            </div>

            {/* 12:30 PM */}
            <div className="relative pl-8 md:pl-10 border-l-2 border-orange-200">
              <div className="absolute -left-3 top-0 bg-orange-400 p-1.5 rounded-full">
                <Utensils className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800">
                12:30 PM – Gourmet Lunch in a Traditional Villa
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                Savor a 3-course meal featuring homemade pasta, truffles, and premium wines.
              </p>
            </div>

            {/* 2:00 PM */}
            <div className="relative pl-8 md:pl-10 border-l-2 border-orange-200">
              <div className="absolute -left-3 top-0 bg-orange-400 p-1.5 rounded-full">
                <Building className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800">
                2:00 PM – Boutique Winery Tour & Hidden Gems
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                Visit a historic family-run winery, taste exclusive wines, and hear untold stories from passionate
                winemakers.
              </p>
            </div>

            {/* 4:30 PM */}
            <div className="relative pl-8 md:pl-10 border-l-2 border-orange-200">
              <div className="absolute -left-3 top-0 bg-orange-400 p-1.5 rounded-full">
                <Mountain className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800">
                4:30 PM – Return Journey with Scenic Views
              </h3>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                Relax on your way back to Florence with a stop at a panoramic viewpoint for final photos.
              </p>
            </div>

            {/* 6:00 PM */}
            <div className="relative pl-8 md:pl-10">
              <div className="absolute -left-3 top-0 bg-orange-400 p-1.5 rounded-full">
                <Home className="h-4 w-4 text-white" />
              </div>
              <h3 className="text-base md:text-lg font-semibold text-slate-800">6:00 PM – Drop-off at Your Hotel</h3>
              <p className="mt-2 text-sm md:text-base text-slate-600">
                Relax on your way back to Florence with a stop at a panoramic viewpoint for final photos.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

