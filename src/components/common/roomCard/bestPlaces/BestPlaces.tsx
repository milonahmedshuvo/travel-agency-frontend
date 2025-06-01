
import { Clock } from "lucide-react";
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
  title: string
};



const ItineraryItem: React.FC<TItinary> = ({  title, description}) => {
  return (
    <div className="relative pl-8 md:pl-10 ">
      <div className="absolute -left-3 top-0 p-1.5 rounded-full">
        <Clock/>
      </div>
      <h3 className="text-base md:text-lg font-medium text-slate-800"> – {title}</h3>
      <p className="mt-2 text-sm md:text-base text-slate-600">{description}</p>
    </div>
  );
};


export default function BestPlaces ({ detailedItineraries, title }: ItineraryItemProps) {
  return (
    <div className=" my-5">
      <Card className="border-none ">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl md:text-3xl font-medium text-slate-700">
            {title}
          </CardTitle>
          {/*  */}
        </CardHeader>

        <CardContent>
         
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
