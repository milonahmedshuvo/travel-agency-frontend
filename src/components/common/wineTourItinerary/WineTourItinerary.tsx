import Link from "next/link";
import { MapPin, Clock, Sun, Wine, Utensils, Building, Mountain, Home } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

type ItineraryItemProps = {
  time: string;
  title: string;
  description: string;
  Icon: React.ElementType;
};

const ItineraryItem: React.FC<ItineraryItemProps> = ({ time, title, description, Icon }) => {
  return (
    <div className="relative pl-8 md:pl-10 ">
      <div className="absolute -left-3 top-0 bg-orange-400 p-1.5 rounded-full">
        <Icon className="h-4 w-4 text-white" />
      </div>
      <h3 className="text-base md:text-lg font-medium text-slate-800">{time} – {title}</h3>
      <p className="mt-2 text-sm md:text-base text-slate-600">{description}</p>
    </div>
  );
};


export default function WineTourItinerary() {
  return (
    <div className=" my-5">
      <Card className="border-none ">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl md:text-3xl font-medium text-slate-700">
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
            <ItineraryItem
              time="9:00 AM"
              title="Pickup & Scenic Drive"
              description="Meet your guide at the designated meeting point. Relax in a luxury van as you drive through breathtaking Tuscan landscapes."
              Icon={Sun}
            />
            <ItineraryItem
              time="10:30 AM"
              title="First Winery Visit & Wine Tasting"
              description="Explore an award-winning vineyard, learn about the winemaking process, and enjoy a guided 5-wine tasting session."
              Icon={Wine}
            />
            <ItineraryItem
              time="12:30 PM"
              title="Gourmet Lunch in a Traditional Villa"
              description="Savor a 3-course meal featuring homemade pasta, truffles, and premium wines."
              Icon={Utensils}
            />
            <ItineraryItem
              time="2:00 PM"
              title="Boutique Winery Tour & Hidden Gems"
              description="Visit a historic family-run winery, taste exclusive wines, and hear untold stories from passionate winemakers."
              Icon={Building}
            />
            <ItineraryItem
              time="4:30 PM"
              title="Return Journey with Scenic Views"
              description="Relax on your way back to Florence with a stop at a panoramic viewpoint for final photos."
              Icon={Mountain}
            />
            <ItineraryItem
              time="6:00 PM"
              title="Drop-off at Your Hotel"
              description="Relax on your way back to Florence with a stop at a panoramic viewpoint for final photos."
              Icon={Home}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
