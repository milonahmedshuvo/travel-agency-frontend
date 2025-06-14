/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useState, useEffect } from "react";
import { Search, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Loading from "@/components/shared/loading/Loading";
import TextPagination from "@/components/others/pagination/TextPagination";

export type TCustomers = {
  id: string;
  username: string;
  email: string;
  password: string;
  role: "CUSTOMER" | "ADMIN" | string; // extend if needed
  avatar: string | null;
  contactNo: string;
  userStatus: "ACTIVE" | "INACTIVE" | string; // extend if needed
  createdAt: string; // ISO Date
  updatedAt: string; // ISO Date
  customer: {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    location: string | null;
    createdAt: string;
    updatedAt: string;
  };
};

export default function EmailLeadsTable() {
  const [searchQuery, setSearchQuery] = useState("");

  const [newPage, setNewPage] = useState(1);
  const [customers, setCustomers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [customerMeta, setCustomerMeta] = useState<{
    page: number;
    limit: number;
    total: number;
    totalPage: number;
  }>({
    page: 1,
    limit: 12,
    total: 100,
    totalPage: 10,
  });

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await fetch(
          `https://supermariobos-api.code-commando.com/api/v1/customers?page=${newPage}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`, // optional
            },
          }
        );

        const data = await response.json();
        setCustomers(data?.data || []);
        setCustomerMeta(data?.meta);
      } catch (error) {
        console.error("Error fetching Customers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, [newPage]);

  if (loading) {
    return <Loading />;
  }

  const filteredBookings = customers?.filter(
    (customer: TCustomers) =>
      customer?.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      customer?.contactNo?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const dateFormate = (date: string) => {
    const DateObject = new Date(date);
    const updateDate = DateObject.toLocaleDateString();
    return updateDate;
  };

  //  console.log('all customer search', filteredBookings)

  return (
    <div className="w-full mt-10 px-4 md:px-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
        <h1 className="text-[20px] font-[500] mb-4 md:mb-0">Email leads</h1>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search email, contact no, etc"
              className="pl-10 w-full md:w-64 h-10 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Custom select dropdown */}
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-50">
              <th className="p-4 text-left">
                <div className="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    aria-label="Select all"
                  />
                </div>
              </th>
              <th className="p-4 text-left font-medium text-gray-600">Email</th>
              <th className="p-4 text-left font-medium text-gray-600">
                Subscription Date
              </th>
              <th className="p-4 text-left font-medium text-gray-600">
                Phone Number
              </th>
              <th className="p-4 text-left font-medium text-gray-600">
                Address
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings?.map((lead: TCustomers) => (
              <tr
                key={lead.id}
                className="border-b border-gray-200 hover:bg-gray-50 "
              >
                <td className="p-4 ">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </div>
                </td>
                <td className="p-4 text-gray-600">{lead?.email}</td>
                <td className="p-4">{dateFormate(lead?.createdAt)}</td>
                <td className="p-4">{lead?.contactNo}</td>
                <td className="p-4">
                  {lead?.customer?.location ? lead?.customer?.location : "N/A"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination  */}
      <div className="mt-10">
        <TextPagination
          meta={customerMeta}
          onPageChange={(newPage) => {
            setNewPage(newPage);
          }}
        />
      </div>
    </div>
  );
}
