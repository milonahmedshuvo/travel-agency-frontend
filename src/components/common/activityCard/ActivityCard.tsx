import { Clock, DollarSign, Users, Globe } from "lucide-react"

export default function ActivityCard() {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6">About this activity</h2>

      <div className="space-y-4">
        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <Clock className="h-5 w-5 text-slate-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Duration:</h3>
            <p className="text-slate-700">8 Hours (Full-day tour)</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <DollarSign className="h-5 w-5 text-slate-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Price:</h3>
            <p className="text-slate-700">$129 per person</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <Users className="h-5 w-5 text-slate-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Group Size:</h3>
            <p className="text-slate-700">Small groups (Max 12 people)</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="mt-1 mr-3">
            <Globe className="h-5 w-5 text-slate-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-800">Languages:</h3>
            <p className="text-slate-700">English, German, Bengali</p>
          </div>
        </div>
      </div>
    </div>
  )
}

