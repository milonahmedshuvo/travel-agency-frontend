"use client"
interface TImportantInfo {
    id: string;
    meetingPointGoogleMap: string;
    mobileTicket: string;
    transportation: string;
    dressCode: string;
    ageRequirement: string;
    tourPackageId: string;
    createdAt: string;
    updatedAt: string;
}

interface TImportantInfoType {
   importantInfo : TImportantInfo
}










export default function ImportantInfo( {importantInfo}:TImportantInfoType ) {


  return (
    <div className="bg-white rounded-lg  p-6 md:p-8 mt-5">
      <h2 className="text-2xl md:text-3xl font-medium text-slate-800 mb-6">
        Important information:
      </h2>
      <div className="space-y-4">

      <div className="flex items-start">
      <h3 className="font-semibold text-slate-800 mr-2">Meeting Point:</h3>
      <p className="text-blue-400">{importantInfo.meetingPointGoogleMap}</p>
    </div>

    <div className="flex items-start">
      <h3 className="font-semibold text-slate-800 mr-2">Transportation:</h3>
      <p className="text-slate-700">{importantInfo.transportation}</p>
    </div>
    <div className="flex items-start">
      <h3 className="font-semibold text-slate-800 mr-2">Dress Code:</h3>
      <p className="text-slate-700">{importantInfo.dressCode}</p>
    </div>

    <div className="flex items-start">
      <h3 className="font-semibold text-slate-800 mr-2">Mobile Ticket:</h3>
      <p className="text-slate-700">{importantInfo.mobileTicket}</p>
    </div>

    <div className="flex items-start">
      <h3 className="font-semibold text-slate-800 mr-2">Age Requirement:</h3>
      <p className="text-slate-700">{importantInfo.ageRequirement}</p>
    </div>

      </div>
    </div>
  );
}
