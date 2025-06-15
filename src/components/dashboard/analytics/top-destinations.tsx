import React, { useState } from "react";
import { Cell, Pie, PieChart, ResponsiveContainer } from "recharts";
import { CustomDropdown } from "../TravelOverview/TravelOverview";
import { useTopDestinationsQuery } from "@/redux/api/analytise/analytiseApi";
import { TourStats } from "@/components/lib/types";

const COLORS = [
  "#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A28CF6", "#FF6699", "#33CC99"
];

const TopDestinations = () => {
  const { data } = useTopDestinationsQuery({});

  // Assign a color to each destination
  const topDestinations = (data?.topDestinations || [])?.map(
    (item: TourStats, idx: number) => ({
      ...item,
      color: COLORS[idx % COLORS.length],
    })
  );

  console.log(`Top Destinations Data:`, topDestinations);

  
  const [destinationsTimeframe, setDestinationsTimeframe] =
    useState("This Month");

  return (
    <div>
      <div className="rounded-lg border border-gray-200 bg-white shadow-sm lg:col-span-1">
        <div className="flex flex-row items-center justify-between  p-4">
          <h3 className="text-lg font-semibold">Top Destinations</h3>
          <CustomDropdown
            options={["This Week", "This Month", "This Year"]}
            value={destinationsTimeframe}
            onChange={setDestinationsTimeframe}
          />
        </div>
        <div className="p-6">
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
                    dataKey="value"
                    startAngle={90}
                    endAngle={-270}
                  >
                    {topDestinations.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                      />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 md:mt-0">
              <ul className="space-y-2">
                {topDestinations.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <span
                      className="mr-2 h-6 w-6 "
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <p className="text-sm font-medium">
                        {item.name} ({item.totalPercentage}%)
                      </p>
                      <p className="text-xs text-gray-500">
                        {item.totalParticipants}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopDestinations;
