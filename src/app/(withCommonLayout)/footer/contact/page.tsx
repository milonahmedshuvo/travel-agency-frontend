"use client"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useForm } from "react-hook-form"

type FormValues = {
  firstName: string
  lastName: string
  email: string
  phone?: string
  service: string
  destination?: string
  travelDate?: string
  budget: string
  message?: string
}

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    defaultValues: {
      service: "",
      budget: "",
    },
  })

  const onSubmit = async (data: FormValues) => {
    // 👉 TODO: replace with real API call
    console.log("🚀 form data", data)
   


    reset() // clear the form
  }

  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="container mx-auto px-4 !pb-32 pt-14">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to start planning your next adventure? Get in touch with our travel experts today.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="lg:w-1/3 space-y-6">
            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="mb-4">
                <h2 className="text-xl font-semibold">Get in Touch</h2>
                <p className="text-sm text-gray-600">
                  We’re here to help you plan the perfect trip
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Office Address</p>
                    <p className="text-sm text-gray-600">
                      123 Travel Street, Suite 100
                      <br />
                      New York, NY&nbsp;10001
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-600">+1&nbsp;(555)&nbsp;123-4567</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-600">info@travelpro.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-medium">Business Hours</p>
                    <p className="text-sm text-gray-600">
                      Mon-Fri: 9 AM-6 PM
                      <br />
                      Sat-Sun: 10 AM-4 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-white p-6 rounded-lg shadow border border-red-300">
              <h2 className="text-xl font-semibold text-red-600">Emergency Contact</h2>
              <p className="text-sm text-gray-600 mb-2">24/7 support for travelers</p>
              <p className="text-lg font-bold text-red-600">+1&nbsp;(555)&nbsp;911-HELP</p>
              <p className="text-sm text-gray-600">
                Available 24/7 for urgent travel assistance
              </p>
            </div>
          </div>

          {/* Right Section (Form) */}
          <div className="lg:w-2/3">
            <div className="bg-white p-6 rounded-lg shadow space-y-6">
              <div>
                <h2 className="text-xl font-semibold">Send us a Message</h2>
                <p className="text-sm text-gray-600">
                  Fill out the form below and we’ll get back to you within 24 hours
                </p>
              </div>

              {/* ── FORM ───────────────────────────────────── */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Names */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">First Name*</label>
                    <input
                      {...register("firstName", { required: "First name is required" })}
                      placeholder="John"
                      className="w-full border rounded-md p-2"
                    />
                    {errors.firstName && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.firstName.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Last Name*</label>
                    <input
                      {...register("lastName", { required: "Last name is required" })}
                      placeholder="Doe"
                      className="w-full border rounded-md p-2"
                    />
                    {errors.lastName && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.lastName.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Contact */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Email*</label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: "Invalid email address",
                        },
                      })}
                      placeholder="john@example.com"
                      className="w-full border rounded-md p-2"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Phone</label>
                    <input
                      type="tel"
                      {...register("phone")}
                      placeholder="+1 (555) 123-4567"
                      className="w-full border rounded-md p-2"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium">Service Interested In*</label>
                  <select
                    {...register("service", { required: "Please select a service" })}
                    className="w-full border rounded-md p-2"
                  >
                    <option value="">Select a service</option>
                     <option value="tour">Tour Packages</option>
                    <option value="hotel">Hotel Packages</option>
                    <option value="CAR">Car Rentals</option>
                    <option value="BOAT">Boat Rentals</option>
                    <option value="VAN">Van Rentals</option>
                    <option value="AIRCRAFT">Aircraft Rentals</option>
                    <option value="group">Group Travel</option>
                    <option value="other">Other</option>
                  </select>
                  {errors.service && (
                    <p className="text-xs text-red-600 mt-1">
                      {errors.service.message}
                    </p>
                  )}
                </div>

                {/* Destination */}
                <div>
                  <label className="block text-sm font-medium">Preferred Destination</label>
                  <input
                    {...register("destination")}
                    placeholder="e.g., Paris, Tokyo, New York"
                    className="w-full border rounded-md p-2"
                  />
                </div>

                {/* Date & Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium">Travel Date</label>
                    <input
                      type="date"
                      {...register("travelDate")}
                      className="w-full border rounded-md p-2"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium">Budget Range*</label>
                    <select
                      {...register("budget", { required: "Budget is required" })}
                      className="w-full border rounded-md p-2"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-1000">Under $1,000</option>
                      <option value="1000-5000">$1,000 – $5,000</option>
                      <option value="5000-10000">$5,000 – $10,000</option>
                      <option value="over-10000">Over $10,000</option>
                    </select>
                    {errors.budget && (
                      <p className="text-xs text-red-600 mt-1">
                        {errors.budget.message}
                      </p>
                    )}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium">Message</label>
                  <textarea
                    rows={5}
                    {...register("message")}
                    placeholder="Tell us about your travel plans..."
                    className="w-full border rounded-md p-2"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] cursor-pointer text-white py-3 px-4 rounded-md  disabled:opacity-60"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>

                {isSubmitSuccessful && (
                  <p className="text-center text-green-600 text-sm">
                    Thanks! We received your message.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        {/* <div className="mt-12">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold">Visit Our Office</h2>
            <p className="text-sm text-gray-600 mb-4">
              Located in the heart of downtown, easily accessible by public transport
            </p>
            <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
              <p className="text-gray-600">Interactive Map Placeholder</p>
            </div>
          </div>
        </div> */}



      </div>
    </div>
  )
}
