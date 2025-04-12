"use client"
import type React from "react"
import { Inter } from "next/font/google"
import Sidebar from "@/components/dashboard/Sidebar/Sidebar"
import { useState } from "react"

const inter = Inter({ subsets: ["latin"] })



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
const [collapsed, setCollapsed] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>

      <div className="flex min-h-screen bg-gray-100"> 
         <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
         {/* Main Content */}
      <div className={`flex-1 transition-all duration-300 md:ml-80 ${collapsed ? "ml-0" : "md:ml-80"}`}> 
      {children}
      </div>
      </div>

      </body>
    </html>
  )
}
