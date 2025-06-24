import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Cookie, Settings, Mail } from "lucide-react"



export default function CookiePolicyPage() {


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-12 !pb-28">
        {/* Header */}

        <div className="text-center mb-12 ">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Cookie className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn how we use cookies to enhance your travel booking experience
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: December 2024</p>
        </div>



        <div className=" space-y-8">
          {/* What are Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                What are Cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">
                Cookies are small text files that are stored on your device when you visit our travel agency website.
                They help us provide you with a better browsing experience, remember your preferences, and show you
                relevant travel deals and destinations.
              </p>
            </CardContent>
          </Card>

          {/* Types of Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="border border-gray-300 rounded-lg p-4">
                  <h3 className="font-semibold text-green-700 mb-2 text-lg">Essential Cookies</h3>
                  <p className="text-md text-gray-600 mb-3">
                    Required for basic website functionality, booking process, and security.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Examples:</strong> Session management, shopping cart, login status
                  </div>
                </div>

                <div className="border border-gray-300 rounded-lg p-4">
                  <h3 className="font-semibold text-blue-700 mb-2 text-lg">Functional Cookies</h3>
                  <p className="text-md text-gray-600 mb-3">Remember your preferences and provide enhanced features.</p>
                  <div className="text-sm text-gray-500">
                    <strong>Examples:</strong> Language settings, currency preferences, recent searches
                  </div>
                </div>

                <div className="border border-gray-300 rounded-lg p-4">
                  <h3 className="font-semibold text-purple-700 mb-2 text-lg">Analytics Cookies</h3>
                  <p className="text-md text-gray-600 mb-3">
                    Help us understand how visitors use our website to improve our services.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Examples:</strong> Google Analytics, page views, user behavior
                  </div>
                </div>

                <div className="border border-gray-300 rounded-lg p-4">
                  <h3 className="font-semibold text-orange-700 mb-2 text-lg">Marketing Cookies</h3>
                  <p className="text-md text-gray-600 mb-3">
                    Show you relevant travel offers and track advertising effectiveness.
                  </p>
                  <div className="text-sm text-gray-500">
                    <strong>Examples:</strong> Personalized ads, social media integration, retargeting
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Third-Party Cookies */}
          <Card>
            <CardHeader>
              <CardTitle>Third-Party Services</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                We work with trusted partners to provide you with the best travel experience:
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Payment Processors</h4>
                  <p className="text-sm text-gray-600">Stripe, PayPal for secure transactions</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Analytics</h4>
                  <p className="text-sm text-gray-600">Google Analytics for website insights</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Social Media</h4>
                  <p className="text-sm text-gray-600">Facebook, Instagram for social features</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Managing Cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5 text-blue-600" />
                Managing Your Cookie Preferences
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700">You have control over the cookies we use. Heres how you can manage them:</p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <strong>Browser Settings:</strong> Most browsers allow you to control cookies through their settings
                    menu.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <strong>Cookie Banner:</strong> Use our cookie consent banner to customize your preferences.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 p-1 rounded-full mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <strong>Opt-out Links:</strong> Visit our partners websites to opt out of their tracking.
                  </div>
                </div>
              </div>
              <div className="bg-amber-50  border border-amber-200 rounded-lg p-4 mt-4">
                <p className="text-amber-800 text-sm">
                  <strong>Note:</strong> Disabling certain cookies may affect website functionality and your ability to
                  make bookings.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Contact */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Questions About Our Cookie Policy?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you have any questions about how we use cookies or this policy, please dont hesitate to contact us.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-t from-20% from-[#156CF0] to-[#38B6FF] hover:from-[#4f88df] hover:to-[#0096FF] text-white px-4 rounded py-1 cursor-pointer ">Contact Support</button>
                <button className="bg-white text-gray-700 border border-gray-300-gray-300 px-4 py-1 rounded cursor-pointer ">
                  Email: privacy@travelagency.com
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
