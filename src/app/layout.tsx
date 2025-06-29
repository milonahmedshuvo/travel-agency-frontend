import type { Metadata } from "next";
import "./globals.css";

import { Poppins } from 'next/font/google';
import ReduxStoreProvider from "@/redux/utils/ReduxProvider";
import { Toaster } from "react-hot-toast";
import TawkTo from "@/components/twak/twak";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose the weights you need
  variable: '--font-poppins', // Optional: Define a CSS variable
});


export const metadata: Metadata = {
  title: "Hvarlocalguide - Home",
  description: "Hvar Local Travel Agency",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className}  antialiased`}>
        <ReduxStoreProvider>
          <Toaster />
          <TawkTo />
          {children}
        </ReduxStoreProvider>
      </body>
    </html>
  );
}
