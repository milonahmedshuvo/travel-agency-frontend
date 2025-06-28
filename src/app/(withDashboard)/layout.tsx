"use client";

import type React from "react";
// import { Inter } from "next/font/google"
import Sidebar from "@/components/dashboard/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/redux/hook";

// const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [collapsed, setCollapsed] = useState(false);
  const role = useAppSelector((state) => state.auth.user?.role);

  // router.push('/login?redirectTo=/booking/booking');
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.replace("/login");
    }

    if (token) {
      if (role === "CUSTOMER") {
        router.push("/");
      }
    }
  }, []);

  return (
    <div>
      <div>
        <div className="flex min-h-screen bg-gray-100">
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />

          {/* Main Content px-4 md:px-6 */}
          <div
            className={`flex-1 transition-all duration-300 md:ml-80  ${
              collapsed ? "ml-0" : "md:ml-80"
            }`}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
