import Header from "@/components/dashboard/Header/Header";
import VehicleListPage from "@/components/dashboard/Vehicle/Vehicle";
import React from "react";

const page = () => {

  return (
    <div>
      <Header />
      <div className="container mx-auto py-8">
        <VehicleListPage/>
      </div>
    </div>
  );
};


export default page;
