import Navbar from "@/components/shared/navber/Navber";


export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="overflow-hidden">
            <Navbar />
            {children}
            {/* <Footer /> */}
        </div>

    );
}