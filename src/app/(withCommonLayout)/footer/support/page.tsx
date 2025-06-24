"use client"

import { Phone, Mail, MessageCircle, Clock, AlertCircle,  } from "lucide-react"
import { useForm } from "react-hook-form"
type FormData = {
  name: string
  email: string
  booking?: string
  priority: string
  category: string
  subject: string
  description: string
}
const supportChannels = [
    {
      icon: <Phone className="h-6 w-6 text-blue-600" />,
      title: "Phone Support",
      description: "Speak directly with our travel experts",
      contact: "+1 (555) 123-4567",
      hours: "Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-4PM",
      priority: "High",
    },
    {
      icon: <Mail className="h-6 w-6 text-green-600" />,
      title: "Email Support",
      description: "Send us detailed questions or concerns",
      contact: "support@travelpro.com",
      hours: "Response within 24 hours",
      priority: "Medium",
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-purple-600" />,
      title: "Live Chat",
      description: "Instant messaging with our support team",
      contact: "Available on website",
      hours: "Mon-Fri: 9AM-6PM",
      priority: "High",
    },
  ]


export default function SupportPage() {
      const { register, handleSubmit, formState: { errors } } = useForm<FormData>()
      const onSubmit = (data: FormData) => {
    console.log("Submitted Data:", data)
    // You can send `data` to your API here
  }
  

  
  

  return (
    <div className="min-h-screen bg-gray-50  ">
      <div className="container mx-auto px-4 pb-24 pt-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Support</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are here to help you every step of the way. Get assistance with bookings, travel questions, or any issues you may encounter.
          </p>
        </div>

        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
          <div className="flex items-center space-x-3">
            <AlertCircle className="h-6 w-6 text-red-600" />
            <div>
              <h3 className="font-semibold text-red-800">Emergency Travel Assistance</h3>
              <p className="text-red-700">
                For urgent travel emergencies, call our 24/7 hotline: <strong>+1 (555) 911-HELP</strong>
              </p>
            </div>
          </div>
        </div>

         <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Support</h2>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1 space-y-6">
           
            {supportChannels?.map((channel, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    {channel.icon}
                    <h3 className="text-lg font-semibold">{channel.title}</h3>
                  </div>
                  <div className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] text-white px-2 text-sm rounded-3xl cursor-pointer ">{channel.priority}</div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{channel.description}</p>
                <p className="font-medium">{channel.contact}</p>
                <p className="text-sm text-gray-600 flex items-center">
                  <Clock className="h-4 w-4 mr-1" /> {channel.hours}
                </p>
              </div>
            ))}

          </div>



          <div className="lg:col-span-2 space-y-8">
            <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
              <h3 className="text-xl font-semibold mb-1">Submit a Support Ticket</h3>
              <p className="text-gray-500 mb-4">Describe your issue and we will get back to you as soon as possible</p>

             <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="name">Full Name</label>
          <input
            id="name"
            {...register("name", { required: "Name is required" })}
            placeholder="Your full name"
            className="w-full border-gray-300 border py-2 px-4 rounded focus:outline-none mt-[4px]"
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            {...register("email", { required: "Email is required" })}
            placeholder="your@email.com"
            className="w-full border-gray-300 border py-2 px-4 rounded focus:outline-none mt-[4px]"
          />
          {errors.email && <p className="text-sm text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="booking">Booking Reference</label>
          <input
            id="booking"
            {...register("booking")}
            placeholder="e.g., TP123456"
            className="w-full border-gray-300 border py-2 px-4 rounded focus:outline-none mt-[4px]"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="priority">Priority Level</label>
          <input
            id="priority"
            {...register("priority", { required: "Priority is required" })}
            placeholder="e.g., Low, Medium, High, Critical"
            className="w-full border-gray-300 border py-2 px-4 rounded focus:outline-none mt-[4px]"
          />
          {errors.priority && <p className="text-sm text-red-500">{errors.priority.message}</p>}
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="category">Issue Category</label>
        <input
          id="category"
          {...register("category", { required: "Category is required" })}
          placeholder="e.g., Booking, Payment, Cancellation, etc."
          className="w-full border-gray-300 border py-2 px-4 rounded focus:outline-none mt-[4px]"
        />
        {errors.category && <p className="text-sm text-red-500">{errors.category.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          {...register("subject", { required: "Subject is required" })}
          placeholder="Brief description of your issue"
          className="w-full border-gray-300 border py-2 px-4 rounded focus:outline-none mt-[4px]"
        />
        {errors.subject && <p className="text-sm text-red-500">{errors.subject.message}</p>}
      </div>

      <div className="space-y-2">
        <label htmlFor="description">Detailed Description</label>
        <textarea
          id="description"
          rows={5}
          {...register("description", { required: "Description is required" })}
          placeholder="Please provide as much detail as possible about your issue..."
          className="w-full border-gray-300 border py-2 px-4 rounded focus:outline-none mt-[4px]"
        />
        {errors.description && <p className="text-sm text-red-500">{errors.description.message}</p>}
      </div>

      <button type="submit" className="w-full bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] cursor-pointer text-white py-2 rounded">
        Submit Support Ticket
      </button>
    </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
