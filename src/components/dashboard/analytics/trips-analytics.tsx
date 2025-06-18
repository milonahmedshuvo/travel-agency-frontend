import { useTripsAnalyticsQuery } from "@/redux/api/analytise/analytiseApi";
import { Plane } from "lucide-react";
import React from "react";

const TripsAnalytics = () => {
  const { data, isLoading } = useTripsAnalyticsQuery({});

  const tripsAnalytics = data?.tripsAnalytics || {
    totalTrips: 0,
    totalCompleted: 0,
  };

  return (
    <>
      {isLoading ? (
        "loading..."
      ) : (
        <div className="rounded-lg border border-gray-200 bg-white shadow-xs">
          <div className="p-6">
            <div className="flex flex-col space-y-4 md:flex-row sm:items-center sm:justify-between sm:space-y-0">
              <div className="flex items-center space-x-4 w-[200px]">
                <div className="rounded-full bg-blue-50 p-3">
                  <Plane className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-500">
                    Total Trips
                  </p>
                  <h3 className="text-2xl font-bold">
                    {tripsAnalytics?.totalTrips}
                  </h3>
                </div>
              </div>

              <div className="w-full">
                <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-gray-200">
                  <div
                    className="h-full bg-orange-500"
                    style={{ width: "51.67%" }}
                  ></div>
                  <div
                    className="h-full -mt-2 bg-blue-500"
                    style={{ width: "38.75%", marginLeft: "51.67%" }}
                  ></div>
                </div>

                <div className="flex items-center space-x-4 mt-3">
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-orange-500"></span>
                    <span className="text-sm">
                      Done {tripsAnalytics?.totalCompleted}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="h-3 w-3 rounded-full bg-blue-500"></span>
                    <span className="text-sm">
                      Booked {tripsAnalytics?.totalTrips}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TripsAnalytics;
