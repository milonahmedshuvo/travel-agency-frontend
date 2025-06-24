import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Plane, Hotel, Car, Camera, MapPin, Users, Clock, Shield } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      icon: <Plane className="h-8 w-8 text-blue-600" />,
      title: "Flight Booking",
      description: "Domestic and international flight reservations with competitive prices",
      features: ["Best price guarantee", "24/7 booking support", "Flexible cancellation", "Group discounts"],
      price: "From $50 service fee",
    },
    {
      icon: <Hotel className="h-8 w-8 text-green-600" />,
      title: "Hotel Reservations",
      description: "Wide selection of accommodations from budget to luxury",
      features: ["Verified reviews", "Instant confirmation", "Free cancellation", "Price matching"],
      price: "From $25 service fee",
    },
    {
      icon: <Car className="h-8 w-8 text-red-600" />,
      title: "Car Rentals",
      description: "Reliable car rental services at your destination",
      features: ["All major brands", "Insurance included", "GPS navigation", "24/7 roadside assistance"],
      price: "From $15 service fee",
    },
    {
      icon: <Camera className="h-8 w-8 text-purple-600" />,
      title: "Tour Packages",
      description: "Curated tour packages for popular destinations",
      features: ["Expert guides", "Small groups", "All meals included", "Photography sessions"],
      price: "From $200 per person",
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-600" />,
      title: "Custom Itineraries",
      description: "Personalized travel planning tailored to your preferences",
      features: ["Personal consultant", "Detailed itinerary", "Local recommendations", "24/7 support"],
      price: "From $150 consultation",
    },
    {
      icon: <Users className="h-8 w-8 text-teal-600" />,
      title: "Group Travel",
      description: "Specialized services for corporate and leisure group travel",
      features: ["Group discounts", "Dedicated coordinator", "Custom activities", "Payment plans"],
      price: "Custom pricing",
    },
  ]



  const additionalServices = [
    { icon: <Clock className="h-6 w-6" />, title: "24/7 Customer Support", description: "Round-the-clock assistance" },
    { icon: <Shield className="h-6 w-6" />, title: "Travel Insurance", description: "Comprehensive coverage options" },
    { icon: <MapPin className="h-6 w-6" />, title: "Visa Assistance", description: "Help with visa applications" },
  ]



  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive travel services designed to make your journey seamless and memorable. From planning to
            execution, we handle every detail.
          </p>
        </div>



        {/* Main Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 !mb-20">
          {services.map((service, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-3 mb-3">
                  {service.icon}
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-4 border-t">
                    <div  className="mb-3">
                      {service.price}
                    </div>
                    <button className="w-full" >
                      <Link href="/contact">Get Quote</Link>
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>





        {/* Additional Services */}
        <div className="bg-white rounded-lg p-8 !mb-24">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Additional Services</h2>
          <div className="grid md:grid-cols-3 gap-16">
            {additionalServices.map((service, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-blue-400 text-white rounded-lg p-8 text-center !mb-20 !mt-12">
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Trip?</h2>
          <p className="text-xl mb-6">Contact us today for a personalized consultation</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button>
              <Link href="/contact">Contact Us</Link>
            </button>
            <button
              className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/support">Get Support</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
