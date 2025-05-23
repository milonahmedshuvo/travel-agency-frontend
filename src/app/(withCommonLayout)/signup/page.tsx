/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import Image from "next/image"
import Link from "next/link"
import toast from "react-hot-toast"
import logos from "../../../assets/logo/logos.png"
import { useRegisterUserMutation } from "@/redux/api/auth/authApi"
import { useRouter } from "next/navigation"
// import { Separator } from "@/components/ui/Separator"







// Form validation schema
const formSchema = z
  .object({
    firstName: z.string().min(2, { message: "First name must be at least 2 characters" }),
    lastName: z.string().min(2, { message: "Last name must be at least 2 characters" }),
    userName : z.string().min(2, { message: "user name must be at least 2 characters" }),
    contactNo: z.string().min(2, { message: "contactNo name must be at least 2 characters" }),
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    //   .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    //   .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    //   .regex(/[0-9]/, { message: "Password must contain at least one number" })
    //   .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  })

type FormValues = z.infer<typeof formSchema>

export default function SignupForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [registerUser, { isLoading, isError, isSuccess }] = useRegisterUserMutation();
  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      userName: "",
      contactNo: "",
      password: "",
      confirmPassword: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)


    const payload = {
      customer: {
        firstName: data?.firstName,
        lastName: data?.lastName
      },
      username: data?.userName,
      email: data?.email,
      password: data?.password,
      contactNo: data?.contactNo,
      role: "CUSTOMER"
    };





    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Form submitted singup:", data)


      const res = await registerUser(payload).unwrap();

      console.log("response", res)

      toast.success('Your account has been successfully created.')
      reset()
      router.push('/login')
    } catch (error) {
      toast.error('There was a problem creating your account.')
    } finally {
      setIsSubmitting(false)
    }
  }




  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-20 mt-10">
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 mb-4">
          <Image src={logos || "/hvar-logo.png" } alt="HVAR Local Travel" width={150} height={150} className="w-full h-auto" />
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800">Create your account!</h1>
        <p className="text-gray-600 mt-2 text-center">Welcome To Website Name</p>
        <p className="text-gray-500 text-sm mt-1 text-center">
          Please Enter The Information Requested To Create Your Account
        </p>
      </div>





      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-2 ">
            <div>
                <label htmlFor="firstName">First Name</label>
            </div>
            <input
              id="firstName"
              placeholder="Enter your first name"
              {...register("firstName")}
              className={`border border-[#98A2B3] py-2 px-3 w-full rounded focus:outline-none ${errors.firstName ? "border-red-500" : ""}`}
            />
            {errors.firstName && <p className="text-red-500 text-xs">{errors.firstName.message}</p>}
          </div>

          <div className="space-y-2">
            <div>
                 <label htmlFor="lastName">Last Name</label>
            </div>
            <input
              id="lastName"
              placeholder="Enter your last name"
              {...register("lastName")}
              className={`border border-[#98A2B3] py-2 px-3 w-full rounded focus:outline-none ${errors.lastName ? "border-red-500" : ""}`}
            />
            {errors.lastName && <p className="text-red-500 text-xs">{errors.lastName.message}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email address"
            {...register("email")}
            className={`border border-[#98A2B3] mt-2 py-2 px-3 w-full rounded focus:outline-none ${errors.email ? "border-red-500" : ""}`}
          />
          {errors.email && <p className="text-red-500 text-xs">{errors.email.message}</p>}
        </div>

        
        <div className="space-y-2">
          <label htmlFor="email">user Name</label>
          <input
            id="userName"
            type="text"
            placeholder="Enter your email address"
            {...register("userName")}
            className={`border border-[#98A2B3] mt-2 py-2 px-3 w-full rounded focus:outline-none ${errors.userName ? "border-red-500" : ""}`}
          />
          {errors.userName && <p className="text-red-500 text-xs">{errors.userName.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email">Contact No</label>
          <input
            id="contactNo"
            type="text"
            placeholder="Enter your email address"
            {...register("contactNo")}
            className={`border border-[#98A2B3] mt-2 py-2 px-3 w-full rounded focus:outline-none ${errors.contactNo ? "border-red-500" : ""}`}
          />
          {errors.contactNo && <p className="text-red-500 text-xs">{errors.contactNo.message}</p>}
        </div>







        <div className="space-y-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Create a strong password"
            {...register("password")}
            className={`border border-[#98A2B3] mt-2 py-2 px-3 w-full rounded focus:outline-none ${errors.password ? "border-red-500" : ""}`}
          />
          {errors.password && <p className="text-red-500 text-xs">{errors.password.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword")}
            className={`border border-[#98A2B3] mt-2 py-2 px-3 w-full rounded focus:outline-none ${errors.confirmPassword ? "border-red-500" : ""}`}
          />
          {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-3 rounded bg-gradient-to-r from-blue-500 to-blue-400 hover:from-blue-600 hover:to-blue-500 text-white font-medium cursor-pointer"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Creating Account..." : "Create Account"}
        </button>
      </form>

      <div className="mt-6 flex justify-center items-center">
        {/* <Separator className="flex-grow" /> */}
        <span className="px-3 text-gray-500 text-md">or with</span>
        {/* <Separator className="flex-grow" /> */}
      </div>

      <button
        className="w-full mt-4 py-3 border border-[#98A2B3] rounded text-[#98A2B3]"
        onClick={() => {
          toast.success('Continuing as a guest user')
        }}
      >
        Continue with Guest
      </button>

      <p className="text-center mt-6 text-gray-500">
        If you don&apos;t have any account please{" "}
        <Link href="/login" className="text-blue-500 hover:underline">
          Login
        </Link>
      </p>
    </div>
  )
}
