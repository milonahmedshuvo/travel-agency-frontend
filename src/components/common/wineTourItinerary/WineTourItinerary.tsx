
import { Clock, Sun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type TItinary = {
    //  id: string;
    title: string;
    description: string;
    // tourPackageId: string;
    // createdAt: string;
    // updatedAt: string;
    // Icon? : React.ElementType;
}


type ItineraryItemProps = {
  detailedItineraries: TItinary[];
};



const ItineraryItem: React.FC<TItinary> = ({  title, description}) => {
  return (
    <div className="relative pl-8 md:pl-10 ">
      <div className="absolute -left-3 top-0 bg-orange-400 p-1.5 rounded-full">
        <Sun/>
      </div>
      <h3 className="text-base md:text-lg font-medium text-slate-800"> – {title}</h3>
      <p className="mt-2 text-sm md:text-base text-slate-600">{description}</p>
    </div>
  );
};


export default function WineTourItinerary({ detailedItineraries }: ItineraryItemProps) {
  return (
    <div className=" my-5">
      <Card className="border-none ">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl md:text-3xl font-medium text-slate-700">
            Detailed Itinerary – What to Expect
          </CardTitle>
          {/*  */}
        </CardHeader>

        <CardContent>
          <div className="flex items-center gap-2 mb-6 mt-2">
            <Clock className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg md:text-xl font-semibold text-slate-800">Hour-by-Hour Breakdown</h2>
          </div>

          <div className="space-y-8">

           
           {
             detailedItineraries.map((item:TItinary, index:number) => <ItineraryItem key={index}
              title={item.title}
              description={item.description}
            />)
           }


          </div>
        </CardContent>
      </Card>
    </div>
  );
}
