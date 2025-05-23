/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { FormEvent, useEffect, useState } from "react";
import TourBookingStep1 from "../booking/page";


const ManageTourBookingpage = () => {
    const [step, setStep] = useState(1)

   useEffect(() => {
    const storedStep = localStorage.getItem("currentStep");
    if (storedStep) {
      setStep(Number(storedStep));
    }
  }, []);
  
  useEffect(() => {
    localStorage.setItem("currentStep", step.toString());
  }, [step]);


  const handleNext = (e:FormEvent) => {
    e.preventDefault()

    if(step===1){

    }else if(step === 2 ){
        
    }
  }


const handlePrevious = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };


  return (
    <div className="space-y-5">

        { step === 1 && <div>
            
            <TourBookingStep1/>
            </div>}
       
    </div>
  )
}

export default ManageTourBookingpage;