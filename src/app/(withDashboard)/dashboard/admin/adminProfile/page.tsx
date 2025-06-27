'use client'

import { Cardp, CardContentp, CardHeaderp, CardTitlep } from "@/components/ui/card"
import { Phone, Mail, Calendar,   Edit,  User, Dot } from "lucide-react"
import profileImg from '../../../../../assets/logo/img1.jpg'
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/dashboard/Header/Header"
import { useGetMeQuery } from "@/redux/api/auth/authApi"

// Mock customer data
const customerData = {
  id: "1",
  name: "Sarah Johnson",
  email: "sarah.johnson@email.com",
  phone: "+1 (555) 123-4567",
  avatar: "/placeholder.svg?height=120&width=120",
  memberSince: "March 2020",
  loyaltyStatus: "Gold Member",
  totalTrips: 12,
  countries: 8,
  preferences: {
    destinations: ["Europe", "Asia", "Caribbean"],
    travelStyle: ["Luxury", "Adventure", "Cultural"],
    budget: "$3,000 - $5,000",
    accommodation: "4-5 Star Hotels",
  },
  emergencyContact: {
    name: "John Johnson",
    relationship: "Spouse",
    phone: "+1 (555) 987-6543",
  },
  recentTrips: [
    { destination: "Paris, France", date: "Dec 2023", rating: 5 },
    { destination: "Tokyo, Japan", date: "Sep 2023", rating: 5 },
    { destination: "Santorini, Greece", date: "Jun 2023", rating: 4 },
  ],
}

interface TAdminProfileProps {
  onEditProfile?: () => void
}




export default function AdminProfile({ onEditProfile }: TAdminProfileProps ) {
          const {data} = useGetMeQuery("")
          console.log("data", data?.data)

        const admin =  data?.data?.admin
        const assign = data?.data?.createdAt
        console.log({admin, assign})


        const isoDate = data?.data?.createdAt
        const date = new Date(isoDate);

        const formatted = date.toLocaleString("en-US", {
        month: "long",
        year: "numeric",
        });

        console.log(formatted)




  return (
    <div>
        <Header/>
    <div className="min-h-screen  p-4 md:p-6 mt-14">
      <div className="  space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h1 className="text-3xl font-semibold mb-1">Admin Profile</h1>
            <p className="text-gray-600 text-[16px]">Manage your travel preferences and information</p>
          </div>

           <div className="flex gap-4">
            <Link href='/dashboard/admin/createProfile'> 
          <button onClick={onEditProfile} className="flex items-center gap-2 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] text-white py-1.5 px-3 rounded-lg cursor-pointer">
            <Edit className="h-4 w-4" />
            Create New Account
          </button>
          </Link>

          <Link href='/dashboard/admin/updateProfile'> 
          <button onClick={onEditProfile} className="flex items-center gap-2 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] text-white py-1.5 px-3 rounded-lg cursor-pointer">
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
                <div className="relative mx-auto">
                  <div className="h-24 w-24 mx-auto rounded-full">
                     <Image src={profileImg} width={500} height={500} alt="image" className="h-18 w-18 rounded-full"/>
                  </div>
                </div>
                <div className="text-xl">{data?.data?.username}</div>
                <div>
                  <div  className="flex justify-center items-center">
                    {data?.data?.userStatus}
                    <Dot className="h-10 w-10 Dot text-green-300" />
                  </div>

                </div>
              </div>
              <div className="space-y-4">
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
                    <p className="text-gray-600">{customerData.emergencyContact.name}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Relationship</h4>
                    <p className="text-gray-600">{customerData.emergencyContact.relationship}</p>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">Phone</h4>
                    <p className="text-gray-600">{customerData.emergencyContact.phone}</p>
                  </div>
                </div>
              </CardContentp>
            </Cardp>

            
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
