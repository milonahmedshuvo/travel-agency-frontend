import { Mountain } from "lucide-react"

export default function MissionValues() {
  return (
    <div className="custom-container px-4 py-12 md:py-16 lg:py-24">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
        {/* Left Column */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-semibold">
            <span className="text-[#FF914D]">Our Mission</span>{" "}
            <span className="relative inline-block">
              &
            </span>
            <br />
            <span className="text-[#15202E] mt-2.5 ">Values</span>
          </h2>

          <div className="mt-8">
            <h3 className="text-2xl font-medium text-slate-700 mb-4">Our Mission:</h3>
            <div className="flex gap-3 items-start">
              <Mountain className="text-blue-400 h-6 w-6 flex-shrink-0 mt-1" />
              <p className="text-slate-700 text-lg">
                To inspire and connect travelers with authentic, life-changing experiences, while supporting local
                communities and promoting responsible tourism.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-end">
        <div className="space-y-6">
          <h3 className="text-2xl md:text-3xl font-semibold text-slate-800 mb-6">Our Mission:</h3>

          <div className="space-y-9">
            <div className="flex gap-3 items-start">
              <Mountain className="text-blue-400 h-6 w-6 flex-shrink-0 mt-1" />
              <div >
                <span className="text-xl font-medium text-slate-800 mx-2">
                  Authenticity  — 
                </span>
                <span className="text-slate-700">Real local experiences, not tourist traps</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Mountain className="text-blue-400 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <span  className="text-xl font-medium text-slate-800 mx-2">
                  Passion for Travel —
                </span>
                <span className="text-slate-700">We love what we do & it shows!</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Mountain className="text-blue-400 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <span className="text-xl font-medium text-slate-800 mx-2">
                  Trust & Safety —
                </span>
                <span className="text-slate-700">Secure booking, experienced guides, & reliable support</span>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <Mountain className="text-blue-400 h-6 w-6 flex-shrink-0 mt-1" />
              <div>
                <span className="text-xl font-medium text-slate-800 mx-2">
                  Sustainability —
                </span>
                <span className="text-slate-700">Eco-friendly tours that support local communities</span>
              </div>
            </div>
          </div>
        </div>
        </div>




      </div>
    </div>
  )
}

