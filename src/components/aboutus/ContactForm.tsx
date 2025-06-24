"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { useCreateContactMutation } from "@/redux/api/contact/ContactApi"
import toast from "react-hot-toast"


export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  })
  const [createContact] = useCreateContactMutation()
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    // Reset form or show success message
    setLoading(true)
   const contactData = {
     name: formData.name,
     contactNo : formData.phone,
     email : formData.email,
     message : formData.message
  }
// console.log("Form submitted:", contactData)

  try{
    const result = await await createContact(contactData).unwrap();
    if(result?.success){
      console.log("Successfully create contact", result)
      toast.success("Successfully create contact")
      setLoading(false)
      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
       })
  }
  }catch(err){
    console.log("Filed contact", err)
    toast.error('Filed contact')
    setLoading(false)
  } }



  return (
    <section className="custom-container px-4 py-12 !mb-28 ">
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold">
          Get in <span className="text-orange-400">Touch</span>
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl text-lg">
          Drop us a message using the contact form below and we ll get back to you within 24 hours (Monday-Friday)
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block mb-2">
                Enter Name<span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                name="name"
                placeholder="Esther Howard"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block mb-2">
                Enter Phone
              </label>
              <input
                id="phone"
                name="phone"
                placeholder="(316) 555-0116"
                value={formData.phone}
                onChange={handleChange}
                className="w-full p-3 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2">
                Enter Email<span className="text-red-500">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="alma.lawson@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 border rounded-md"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2">
                Enter Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write a message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border rounded-md min-h-[150px]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] text-white py-3 rounded-md transition-colors cursor-pointer "
            >
              {
                loading ? 'Processing...' : 'SUBMIT NOW'
              }
            </button>
          </form>
        </div>



       <div className="flex justify-center">
       <div className="mt-8 md:mt-16">
          <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
          <p className="mb-8 text-gray-600">Say something to start a live chat!</p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="text-gray-600 mt-1" />
              <p className="text-gray-800">(316) 555-0116</p>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="text-gray-600 mt-1" />
              <p className="text-gray-800">deanna.curtis@example.com</p>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="text-gray-600 mt-1" />
              <p className="text-gray-800">
                132 Dartmouth Street Boston,
                <br />
                Massachusetts 02156 United States
              </p>
            </div>
          </div>
        </div>
       </div>




      </div>
    </section>
  )
}

