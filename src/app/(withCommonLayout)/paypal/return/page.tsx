
import PaypalReturnClient from "@/common/PaypalReturnClient";
import { Suspense } from "react";



export default function PaypalReturnPage() {
  return (
    <Suspense
      fallback={<div className="p-6 text-center">Loading payment info...</div>}
    >
      <PaypalReturnClient/>
    </Suspense>
  );
}
