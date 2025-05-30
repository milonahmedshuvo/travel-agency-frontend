
type ActivityType = {
  // id: string;
  groupSize: number;
  languages: string[];
  // tourPackageId: string;
};

type ActivityCardProps = {
  activity: ActivityType;
};


// Reusable InfoItem Component
function InfoItem({ groupSize, languages }: ActivityType) {
  return (
    <div className="flex items-start">

      <div className="space-y-2.5">

        <div className="flex gap-2.5 !text-[#101010] text-[18px] " >
            <h1>GroupSize : </h1>
           <h3 className=" text-slate-800"> {`Small groups (Max ${groupSize} people)`}  </h3>
        </div>
        
        <div className="flex gap-2.5 !text-[#101010] text-[18px] ">
           <h1>Language : </h1>
           <p className="text-slate-700">{
           languages.map((item, index ) => <span key={index}> {item} </span>)
          }</p>
        </div>
      </div>
    </div>
  );
}

export default function ActivityCard({activity}:ActivityCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6">About this activity</h2>
      <div className="space-y-4">

        <InfoItem groupSize={activity.groupSize} languages={activity.languages}  />

      </div>
    </div>
  );
}