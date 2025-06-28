"use client";

import {
  Cardp,
  CardContentp,
  CardHeaderp,
  CardTitlep,
} from "@/components/ui/card";
import { Phone, Mail, Calendar, Edit, User, Dot } from "lucide-react";
import profileImg from "@/assets/logo/img1.jpg";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/dashboard/Header/Header";
import { useGetMeQuery } from "@/redux/api/auth/authApi";

interface TAdminProfileProps {
  onEditProfile?: () => void;
}

const customerData = {
  emergencyContact: {
    name: "John Johnson",
    relationship: "Spouse",
    phone: "+1 (555) 987-6543",
  },
};

export default function AdminProfile({ onEditProfile }: TAdminProfileProps) {
  const { data } = useGetMeQuery("");
  console.log("data", data?.data);

  const isoDate = data?.data?.createdAt;
  const date = new Date(isoDate || "");
  const formatted = date.toLocaleString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <div>
      <Header />
      <div className="min-h-screen p-4 md:p-6 mt-14">
        <div className="space-y-6">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-semibold mb-1">Admin Profile</h1>
              <p className="text-gray-600 text-[16px]">
                Manage your travel preferences and information
              </p>
            </div>

            <div className="flex gap-4">
              <Link href="/dashboard/admin/createProfile">
                <button
                  onClick={onEditProfile}
                  className="flex items-center gap-2 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] text-white py-1.5 px-3 rounded-lg cursor-pointer"
                >
                  <Edit className="h-4 w-4" />
                  Create New Account
                </button>
              </Link>

              <Link href="/dashboard/admin/updateProfile">
                <button
                  onClick={onEditProfile}
                  className="flex items-center gap-2 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] text-white py-1.5 px-3 rounded-lg cursor-pointer"
                >
                  <Edit className="h-4 w-4" />
                  Update Profile
                </button>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Overview */}
            <div className="lg:col-span-1">
              <div className="bg-gray-200 rounded-2xl p-6">
                <div className="text-center">
                  <div className="relative mx-auto h-24 w-24 rounded-full overflow-hidden">
                    <Image
                      src={profileImg}
                      width={96}
                      height={96}
                      alt="Profile Image"
                      className="rounded-full"
                    />
                  </div>
                  <div className="text-xl mt-2">{data?.data?.username}</div>
                  <div className="flex justify-center items-center text-gray-600">
                    {data?.data?.userStatus}
                    <Dot className="h-5 w-5 text-green-300" />
                  </div>
                </div>

                <div className="space-y-4 mt-4">
                  <div className="flex items-center gap-2 text-[16px] text-gray-600">
                    <Mail className="h-4 w-4" />
                    {data?.data?.email}
                  </div>
                  <div className="flex items-center gap-2 text-[16px] text-gray-600">
                    <Phone className="h-4 w-4" />
                    {data?.data?.contactNo}
                  </div>
                  <div className="flex items-center gap-2 text-[16px] text-gray-600">
                    <Calendar className="h-4 w-4" />
                    Member since {formatted}
                  </div>
                  <hr />
                </div>
              </div>
            </div>

            {/* Detailed Information */}
            <div className="lg:col-span-2 space-y-6">
              <Cardp>
                <CardHeaderp>
                  <CardTitlep className="flex items-center gap-2">
                    <User className="h-5 w-5 text-blue-500" />
                    Emergency Contact
                  </CardTitlep>
                </CardHeaderp>
                <CardContentp>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900">Name</h4>
                      <p className="text-gray-600">
                        {customerData.emergencyContact.name}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">
                        Relationship
                      </h4>
                      <p className="text-gray-600">
                        {customerData.emergencyContact.relationship}
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900">Phone</h4>
                      <p className="text-gray-600">
                        {customerData.emergencyContact.phone}
                      </p>
                    </div>
                  </div>
                </CardContentp>
              </Cardp>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
