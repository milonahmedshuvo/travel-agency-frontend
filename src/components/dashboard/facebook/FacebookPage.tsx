import RatingsOverview from "./RatingsOverview";
import ReviewStatistics from "./ReviewStatistics";
import TravelerFeedback from "./TravelerFeedback";



export default function FacebookPage () {
  return (
    <main className="px-4 md:px-6 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
          <ReviewStatistics />
        </div>
        <div className="bg-white rounded-lg shadow-sm p-6">
          <RatingsOverview />
        </div>
      </div>
      <div className="mt-6 bg-white rounded-lg shadow-sm p-6">
        <TravelerFeedback />
      </div>
    </main>
  )
}
