import Link from 'next/link';
import React from 'react';


const NotFound = () => {
    return (
        <div className="flex items-center justify-center h-screen  text-primary">
            <div className="text-center px-6 md:px-12">
                <div className="text-6xl font-extrabold mb-4">
                    🚫
                </div>
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-2 text-[#156CF0]">
                    Oops! Page Not Found
                </h1>
                <p className="text-lg md:text-xl mb-4 text-[#156CF0]">
                    The page you are looking for doesn&apos;t exist or has been moved. Please check the URL or go back to the homepage.
                </p>
                <div className="mt-6">
                    <Link
                        href="/"
                        className="px-3 text-white py-3 bg-[#156CF0] hover:bg-accent  rounded-full shadow-lg transition"
                    >
                        Go Back to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
