import Header from "@/components/dashboard/Header/Header";
import VehicleListPage from "@/components/dashboard/Vehicle/Vehicle";
import React from "react";

const page = () => {

  return (
    <div>
      <Header />
      <div className="py-8 px-4 md:px-6">
        <VehicleListPage/>
      </div>
    </div>
  );
};


export default page;
