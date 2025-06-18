import React, { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { CustomDropdown } from "../TravelOverview/TravelOverview";
import { useTopDestinationsQuery } from "@/redux/api/analytise/analytiseApi";
import { TourStats } from "@/components/lib/types";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#A28CF6",
  "#FF6699",
  "#33CC99",
];

// Map display labels to API parameters
const timeframeMap = {
  "This Week": "week",
  "This Month": "month",
  "This Year": "year",
};

const TopDestinations = () => {
  const [destinationsTimeframe, setDestinationsTimeframe] =
    useState("This Month");

  // Convert display timeframe to API parameter
  const apiTimeframe =
    timeframeMap[destinationsTimeframe as keyof typeof timeframeMap];

  // Fetch data with timeframe parameter
  const { data, isLoading, isError } = useTopDestinationsQuery(
    { timeframe: apiTimeframe },
    { skip: !apiTimeframe }
  );

  // Process destination data with colors
  const topDestinations = (data?.topDestinations || []).map(
    (item: TourStats, idx: number) => ({
      ...item,
      color: COLORS[idx % COLORS.length],
    })
  );

  if (isError) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm h-full">
        <p className="text-red-500">Failed to load top destinations data</p>
      </div>
    );
  }

  return (
    <>
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm lg:col-span-1">
        <div className="flex flex-row items-center justify-between p-4">
          <h3 className="text-lg font-semibold">Top Destinations</h3>
          <CustomDropdown
            options={["This Week", "This Month", "This Year"]}
            value={destinationsTimeframe}
            onChange={(value) => setDestinationsTimeframe(value)}
          />
        </div>
        <div className="p-6">
          {isLoading ? (
            <div className="flex h-64 items-center justify-center">
              {/* <LoadingSpinner /> */} loading...
            </div>
          ) : (
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="h-[200px] w-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={topDestinations}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      paddingAngle={0}
                      dataKey="totalPercentage"
                      startAngle={0}
                      endAngle={360}
                    >
                      {topDestinations.map((entry) => (
                        <Cell
                          key={`cell-${entry.name}`}
                          fill={entry.color}
                          className="hover:opacity-80 transition-opacity"
                        />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-4 md:mt-0">
                <ul className="space-y-2">
                  {topDestinations.map((item) => (
                    <li key={item.name} className="flex items-center">
                      <span
                        className="mr-2 h-6 w-6 rounded-full"
                        style={{ backgroundColor: item.color }}
                        aria-label={`Color indicator for ${item.name}`}
                      />
                      <div>
                        <p className="text-sm font-medium">
                          {item.name} ({item.totalPercentage}%)
                        </p>
                        <p className="text-xs text-gray-500">
                          {item.totalParticipants} participants
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TopDestinations;
