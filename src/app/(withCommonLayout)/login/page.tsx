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
import { useLoginMutation } from "@/redux/api/auth/authApi"
import { jwtDecode } from "jwt-decode"
import { useAppDispatch } from "@/redux/hook"
import { setUser } from "@/redux/slice/auth/authSlice"
import { useRouter } from "next/navigation"



// Form validation schema
const formSchema = z
  .object({
    email: z.string().email({ message: "Please enter a valid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters" }),
    //   .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
    //   .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
    //   .regex(/[0-9]/, { message: "Password must contain at least one number" })
    //   .regex(/[^A-Za-z0-9]/, { message: "Password must contain at least one special character" }),
  })
  
type FormValues = z.infer<typeof formSchema>


export default function LoginForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [login] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter()


  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

 
const onSubmit = async (data: FormValues) => {

  try {
    const response = await login(data).unwrap();
    console.log("Login Success:", response);


     console.log('access token', response?.data?.access_token)
     
    if(response?.data?.access_token){
         
            toast.success('Login success!!') 
            localStorage.setItem('token', response?.data?.access_token )

            const decodedUser = jwtDecode(response?.data?.access_token)
            console.log('decoded user', decodedUser)

            dispatch(setUser({user: decodedUser, token: response?.data?.access_token}))
            reset()  
            // router.push('/') 
        }








  } catch (err) {
    console.error("Login Failed:", err);
  }

}








  return (
    <div className="w-full max-w-3xl mx-auto bg-white rounded-lg shadow-sm p-6 sm:p-8 mb-20 mt-10">
      <div className="flex flex-col items-center mb-6">
        <div className="w-32 h-32 mb-4">
          <Image src={logos || "/hvar-logo.png" } alt="HVAR Local Travel" width={150} height={150} className="w-full h-auto" />
        </div>
        <h1 className="text-3xl font-bold text-center text-gray-800">Hi, Welcome Back!</h1>
        <p className="text-gray-600 mt-2 text-center">Please enter your email and password below!</p>
      </div>





      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      

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
        <Link href="/signup" className="text-blue-500 hover:underline">
          Create Account
        </Link>
      </p>
    </div>
  )
}
