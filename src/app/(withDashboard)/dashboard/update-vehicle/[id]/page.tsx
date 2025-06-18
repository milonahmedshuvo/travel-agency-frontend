"use client";

import { useParams } from "next/navigation";
import UpdateVehicle from "@/components/UpdateVehicle/UpdateVehicle";

export default function Page() {
  const params = useParams();
  const id = params.id as string;

  return <UpdateVehicle id={id} />;
}
