import React, { useState } from "react";
import { CustomDropdown } from "../TravelOverview/TravelOverview";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { useRevenueOverviewQuery } from "@/redux/api/analytise/analytiseApi";

const RevenueOverview = () => {
  const [revenueTimeframe, setRevenueTimeframe] = useState("Weekly");
  const { data, isLoading } = useRevenueOverviewQuery({});

  const revenueData = (data?.revenueOverview || []).map((item) => ({
    name: item.date,
    value: item.earning,
  }));
    
    console.log(`see totals: `, revenueData);

  return (
    <>
      {isLoading ? (
        "loading"
      ) : (
        <div>
          <div className="rounded-lg border border-gray-200 bg-white shadow-xs lg:col-span-2">
            <div className="flex flex-row items-center justify-between  p-4">
              <h3 className="text-[#000E19] text-[20px] font-[500]">
                Revenue Overview
              </h3>
              <CustomDropdown
                options={["Daily", "Weekly", "Monthly"]}
                value={revenueTimeframe}
                onChange={setRevenueTimeframe}
              />
            </div>
            <div className="p-4">
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={revenueData}
                    margin={{
                      top: 20,
                      right: 30,
                      left: 20,
                      bottom: 10,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tickFormatter={(value) => `${value}`}
                      domain={[0, 800]}
                      ticks={[0, 200, 400, 600, 800]}
                    />
                    <Tooltip formatter={(value) => [`${value}`, "Revenue"]} />
                    <ReferenceLine
                      x="Tue"
                      stroke="#888"
                      strokeDasharray="3 3"
                      label={{
                        value: "$635",
                        position: "top",
                        fill: "#333",
                        fontSize: 12,
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="value"
                      stroke="#3b82f6"
                      strokeWidth={3}
                      dot={{ r: 4, strokeWidth: 2 }}
                      activeDot={{ r: 6, strokeWidth: 2 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default RevenueOverview;
