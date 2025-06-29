"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  Search,
} from "lucide-react";
import {
  CustomTable,
  CustomTableBody,
  CustomTableCell,
  CustomTableHead,
  CustomTableHeader,
  CustomTableRow,
} from "@/components/ui/CustomTable";
import { CustomButton } from "@/components/ui/CustomButton";
import { useGetAllTourBookingsQuery } from "@/redux/api/tourPackages/tourPackagesApi";
import { TourBooking } from "@/components/lib/types";
import Link from "next/link";
import Loading from "@/components/shared/loading/Loading";

interface BookingsTableProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  dateFilter: string;
  setDateFilter: (filter: string) => void;
}

export function BookingsTable({
  currentPage,
  setCurrentPage,
}: BookingsTableProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const { data: tourBookings, isLoading } = useGetAllTourBookingsQuery("");

  const itemsPerPage = 8;
  const totalPages = Math.ceil(tourBookings?.data?.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = tourBookings?.data?.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const filteredBookings = currentItems?.filter((booking: TourBooking) =>
    booking?.tourPackage?.title
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase()) ||
    booking?.vehicleBooking?.tourPackageVehicle?.vehicleType
      ?.toLowerCase()
      .includes(searchQuery.toLowerCase())
  );

  const dateFormate = (date: string) => {
    const DateObject = new Date(date);
    return DateObject.toLocaleDateString();
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Card className="w-full rounded-lg shadow-sm border border-gray-200">
      <CardHeader className="flex flex-col space-y-3 md:flex-row md:items-center md:justify-between">
        <CardTitle className="text-[20px] font-[500]">Bookings</CardTitle>
        <div className="relative w-full md:w-[300px]">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Search"
            className="h-9 w-full rounded-md border border-gray-300 pl-8 pr-3 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Desktop/Tablet Table View */}
        <div className="hidden md:block overflow-x-auto">
          <CustomTable>
            <CustomTableHeader>
              <CustomTableRow>
                <CustomTableHead>Name <ChevronDown className="inline h-3 w-3 ml-1" /></CustomTableHead>
                <CustomTableHead>Package</CustomTableHead>
                <CustomTableHead>Duration</CustomTableHead>
                <CustomTableHead>Vehicle</CustomTableHead>
                <CustomTableHead>Date</CustomTableHead>
                <CustomTableHead>Price</CustomTableHead>
                <CustomTableHead>Status</CustomTableHead>
                <CustomTableHead>Action</CustomTableHead>
              </CustomTableRow>
            </CustomTableHeader>
            <CustomTableBody>
              {filteredBookings?.map((booking: TourBooking) => (
                <CustomTableRow key={booking.id}>
                  <CustomTableCell>{booking?.tourPackage?.title || "N/A"}</CustomTableCell>
                  <CustomTableCell>{booking?.tourPackage?.category || "N/A"}</CustomTableCell>
                  <CustomTableCell>{`${booking.duration} Hours`}</CustomTableCell>
                  <CustomTableCell>
                    {booking?.vehicleBooking?.tourPackageVehicle?.vehicleType || "N/A"}
                  </CustomTableCell>
                  <CustomTableCell>{dateFormate(booking.updatedAt)}</CustomTableCell>
                  <CustomTableCell>${booking?.tourPackage?.price || "N/A"}</CustomTableCell>
                  <CustomTableCell>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${
                      booking?.transactions?.status === "SUCCEEDED"
                        ? "bg-gradient-to-t from-[#156CF0] to-[#38B6FF]"
                        : booking?.transactions?.status === "PROCESSING"
                        ? "bg-blue-300 text-blue-800"
                        : booking?.transactions?.status === "REQUIRES_PAYMENT_METHOD"
                        ? "bg-amber-400"
                        : booking?.transactions === null
                        ? "bg-red-500 opacity-80"
                        : "bg-gray-400"
                    }`}>
                      {booking?.transactions?.status || "Not pay"}
                    </span>
                  </CustomTableCell>
                  <CustomTableCell>
                    <Link href={`/dashboard/tripBooking/${booking.id}`}>
                      <button className="border border-gray-400 px-2 py-0.5 rounded cursor-pointer text-sm">
                        View
                      </button>
                    </Link>
                  </CustomTableCell>
                </CustomTableRow>
              ))}
            </CustomTableBody>
          </CustomTable>
        </div>

        {/* Mobile View (Cards) */}
        <div className="block md:hidden space-y-4">
          {filteredBookings?.map((booking: TourBooking) => (
            <div
              key={booking.id}
              className="rounded-lg border border-gray-200 p-4 shadow-sm"
            >
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold text-base">
                  {booking?.tourPackage?.title || "N/A"}
                </h4>
                <Link href={`/dashboard/tripBooking/${booking.id}`}>
                  <button className="border border-gray-400 px-2 py-0.5 text-sm rounded cursor-pointer">
                    View
                  </button>
                </Link>
              </div>
              <div className="text-sm text-gray-600 space-y-1">
                <p><strong>Package:</strong> {booking?.tourPackage?.category || "N/A"}</p>
                <p><strong>Duration:</strong> {booking?.duration} Hours</p>
                <p><strong>Vehicle:</strong> {booking?.vehicleBooking?.tourPackageVehicle?.vehicleType || "N/A"}</p>
                <p><strong>Date:</strong> {dateFormate(booking.updatedAt)}</p>
                <p><strong>Price:</strong> ${booking?.tourPackage?.price || "N/A"}</p>
                <p className="flex items-center gap-2">
                  <strong>Status:</strong>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white ${
                    booking?.transactions?.status === "SUCCEEDED"
                      ? "bg-gradient-to-t from-[#156CF0] to-[#38B6FF]"
                      : booking?.transactions?.status === "PROCESSING"
                      ? "bg-blue-300 text-blue-800"
                      : booking?.transactions?.status === "REQUIRES_PAYMENT_METHOD"
                      ? "bg-amber-400"
                      : booking?.transactions === null
                      ? "bg-red-500 opacity-80"
                      : "bg-gray-400"
                  }`}>
                    {booking?.transactions?.status || "Not pay"}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-4 flex flex-col items-center sm:flex-row sm:justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            Showing {indexOfFirstItem + 1} to {Math.min(indexOfLastItem, tourBookings?.data?.length)} of {tourBookings?.data?.length}
          </div>
          <div className="flex items-center space-x-2">
            <CustomButton
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
            >
              <ChevronLeft className="h-4 w-4" />
            </CustomButton>

            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageToShow;
              if (totalPages <= 5) pageToShow = i + 1;
              else if (currentPage <= 3) pageToShow = i + 1;
              else if (currentPage >= totalPages - 2) pageToShow = totalPages - 4 + i;
              else pageToShow = currentPage - 2 + i;

              return (
                <CustomButton
                  key={i}
                  variant={currentPage === pageToShow ? "default" : "outline"}
                  size="icon"
                  onClick={() => setCurrentPage(pageToShow)}
                  className={currentPage === pageToShow ? "bg-gradient-to-t from-[#156CF0] to-[#38B6FF]" : ""}
                >
                  {pageToShow}
                </CustomButton>
              );
            })}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <>
                <span className="text-muted-foreground">...</span>
                <CustomButton
                  variant="outline"
                  size="icon"
                  onClick={() => setCurrentPage(totalPages)}
                >
                  {totalPages}
                </CustomButton>
              </>
            )}

            <CustomButton
              variant="outline"
              size="icon"
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
            >
              <ChevronRight className="h-4 w-4" />
            </CustomButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
