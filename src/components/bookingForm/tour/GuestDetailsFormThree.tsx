"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Link from "next/link"
import { BookingConfirmationData } from "./BookingConfirmationData"
import { useAppDispatch, useAppSelector } from "@/redux/hook"
import { setGustDatailsThree } from "@/redux/slice/booking/booking"
import { useEffect } from "react"
import { useRouter } from "next/navigation"


const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  guestType: z.string(),
   age: z.preprocess(
          (val) => (val === "" ? undefined : Number(val)),
          z.number({ invalid_type_error: "Duration is required" }).min(1, "Duration must be at least 1")
        ),
    contactNo: z.string().min(3, { message : "Phone number is required" }),
    requestMessage: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms and conditions.",
  }),
})

type FormValues = z.infer<typeof formSchema>



export default function GuestDetailsFormThree() {
  const dispatch = useAppDispatch()
  const gustDatailsThree = useAppSelector((state) => state.booking.gustDatailsThree)
    const gustDatailsTwo = useAppSelector((state) => state.booking.gustDatailsTwo)
    const gustDatailsOne = useAppSelector((state) => state.booking.gustDatailsOne)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    // watch,
    reset
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      guestType: gustDatailsTwo?.isAdult === true? "Adult" : "Child",
      age: 0,
      contactNo: "",
      requestMessage: "",
      consent: false,
    },
  })

  useEffect(()=>{
    if(gustDatailsThree){
      reset(gustDatailsThree)
    }
  }, [gustDatailsThree, reset])


  function onSubmit(values: FormValues) {
    // Here you would typically send the form data to your backend

     let isAdult = false

    if(values?.guestType ==="Adult"){
      isAdult = true
    }else if(values?.guestType === "Child"){
      isAdult = false
    }

   const payload = { 
    fullName: values?.fullName, 
    email: values?.email,
    isAdult: isAdult, 
    age: values?.age, 
    contactNo: values?.contactNo, 
    requestMessage: values?.requestMessage 
  }


 console.log(payload)


    dispatch(setGustDatailsThree(payload))


    // router.push('/booking/reviewBooking')
    // router.push('/booking/pickupReturn')
    // /booking/vehicle/pickupLocation
    router.push('/booking/vehicle/pickupLocation')

  }

  


  return (
    <section  className="space-y-6 bg-[#F4F4F4]">
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 max-w-[780px] mx-auto p-4 md:p-12  shadow bg-[#ffffff]">

      <div className="mb-3">
        {/* <p className="text-lg font-medium mb-5">Step 02</p> */}
        <h1 className="text-4xl md:text-5xl font-semibold mb-5">
          Enter <span className="text-[#F78C41]">Guest Details</span>
        </h1>
        <p className="text-gray-600 mb-5">We respect your privacy! Your details are securely stored and never shared.</p>
      </div>

          <div className=" mt-6">
      
            <h1 className="text-2xl sm:text-3xl  font-medium mb-6  mt-12">Santorini Sunset Catamaran Cruise</h1>
      
               <BookingConfirmationData
          email={gustDatailsOne?.email as string}
            age={Number(gustDatailsOne?.age)}
            phone={gustDatailsOne?.contactNo as string}
             specialRequests={gustDatailsOne?.requestMessage || "N/A" }
        />

      
              <BookingConfirmationData
                email={gustDatailsTwo?.email as string}
                age={Number(gustDatailsTwo?.age)}
                phone={gustDatailsTwo?.contactNo as string}
                specialRequests={gustDatailsTwo?.requestMessage || "N/A" }
              />
            </div>





        <div className="space-y-2 mt-10">
          <label htmlFor="fullName" className="block text-sm font-medium">
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="milon ahmed shuvo"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            {...register("fullName")}
          />
          {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="milonahmedshuvo@gmail.com"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            {...register("email")}
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label htmlFor="guestType" className="block text-sm font-medium">
              Adult or Children
            </label>
            <div className="relative">
              <select
                id="guestType"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                {...register("guestType")}
              >
                <option value="Adult">Adult</option>
                <option value="Child">Child</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            {errors.guestType && <p className="text-red-500 text-sm">{errors.guestType.message}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="age" className="block text-sm font-medium">
              Age
            </label>

             <input
            id="age"
            type="number"
            placeholder="age"
            className={`w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.age ? "border-red-500" : "border-gray-300"
            }`}
            {...register("age")}
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>} 

          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="contactNo" className="block text-sm font-medium">
            Phone Number <span className="text-gray-400">(Optional)</span>
          </label>
          <input
            id="contactNo"
            type="tel"
            placeholder="+880 1567808747"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("contactNo")}
          />
          {errors.contactNo && <p className="text-red-500 text-sm">{errors.contactNo.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="requestMessage" className="block text-sm font-medium">
            Special Requests
          </label>
          <textarea
            id="requestMessage"
            placeholder="Message"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg min-h-[120px] focus:outline-none focus:ring-2 focus:ring-blue-500"
            {...register("requestMessage")}
          />
          {errors.requestMessage && <p className="text-red-500 text-sm">{errors.requestMessage.message}</p>}
        </div>

        <div className="flex items-start space-x-3">
          <div className="flex items-center h-5">
            <input
              id="consent"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
              {...register("consent")}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="consent" className="text-sm font-normal text-[#646464] text-[17px]">
              By submitting this form, you consent to the storage and handling of your data as outlined in our{" "}
              <Link href="/privacy-policy" className="text-blue-600 font-medium">
                Privacy Policy
              </Link>{" "}
              and agree to our{" "}
              <Link href="/terms" className="text-blue-600 font-medium">
                Terms & Conditions
              </Link>
            </label>
            {errors.consent && <p className="text-red-500 text-sm">{errors.consent.message}</p>}
          </div>
        </div>

        


        {/* <Link href='/booking/reviewBooking'>   
        <button
          type="submit"
          className="w-full py-3 px-4 bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] rounded-lg flex items-center justify-center text-white cursor-pointer"
        >
            Proceed to Review & Confirm
          <svg
            className="w-5 h-5 ml-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </button>
        </Link> */}

        <div className="flex items-center gap-3">
           
          <button
          type="button"
          className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center bg-[#475467] text-[#fff] transition-colors cursor-pointer"
          
        >
          <Link href='/booking/gustDatailsTwo'>
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg> </Link>
          <Link href='/booking/gustDatailsTwo'>  Previous Pages </Link>
        </button>
        

        <button
          type="submit"
          className="w-full py-3 px-4 border border-gray-300 rounded-lg flex items-center justify-center bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-[#fff] transition-colors cursor-pointer gap-3.5"
        >
           Next
           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg>
        </button>
        </div>


      </form>
    </section>
  )
}

