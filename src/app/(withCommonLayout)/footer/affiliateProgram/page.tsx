import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, DollarSign, TrendingUp, Award, CheckCircle, Mail, Globe, Target } from "lucide-react"


export default function AffiliateProgramPage() {
  return (
    <div className="min-h-screen bg-gray-50 ">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-emerald-600 p-3 rounded-full">
              <Users className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Affiliate Program</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Partner with us and earn generous commissions by promoting amazing travel experiences
          </p>
          <button className="mt-4 bg-emerald-600 hover:bg-emerald-700 py-0.5 px-3 text-white rounded cursor-pointer ">Up to 12% Commission</button>
        </div>

        <div className=" space-y-8">
          {/* Program Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="h-5 w-5 text-emerald-600" />
                Program Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-6">
                Join our affiliate program and start earning money by promoting our premium travel packages, hotel
                bookings, and unique travel experiences. Whether you are a travel blogger, social media influencer, or
                website owner, our program offers competitive commissions and marketing support.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center p-6 bg-emerald-50 rounded-lg">
                  <DollarSign className="h-8 w-8 text-emerald-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">High Commissions</h3>
                  <p className="text-gray-600 text-sm">Earn 5-12% on every successful booking</p>
                </div>
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Real-time Tracking</h3>
                  <p className="text-gray-600 text-sm">Monitor your performance with detailed analytics</p>
                </div>
                <div className="text-center p-6 bg-purple-50 rounded-lg">
                  <Award className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-lg mb-2">Marketing Support</h3>
                  <p className="text-gray-600 text-sm">Access banners, content, and promotional materials</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Commission Structure */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5 text-emerald-600" />
                Commission Structure
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <div className="border-2 border-emerald-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-emerald-600 mb-2">5%</div>
                  <h4 className="font-semibold mb-2">Flight Bookings</h4>
                  <p className="text-sm text-gray-600">Domestic and international flights</p>
                </div>
                <div className="border-2 border-blue-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-2">8%</div>
                  <h4 className="font-semibold mb-2">Hotel Reservations</h4>
                  <p className="text-sm text-gray-600">All hotel and accommodation bookings</p>
                </div>
                <div className="border-2 border-purple-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-2">10%</div>
                  <h4 className="font-semibold mb-2">Tour Packages</h4>
                  <p className="text-sm text-gray-600">Guided tours and travel packages</p>
                </div>
                <div className="border-2 border-orange-200 rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-orange-600 mb-2">12%</div>
                  <h4 className="font-semibold mb-2">Premium Experiences</h4>
                  <p className="text-sm text-gray-600">Luxury and exclusive travel experiences</p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold mb-2">Performance Bonuses</h4>
                <div className="grid gap-2 md:grid-cols-3 text-sm">
                  <div>• 10+ bookings/month: +1% bonus</div>
                  <div>• 25+ bookings/month: +2% bonus</div>
                  <div>• 50+ bookings/month: +3% bonus</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* How It Works */}
          <Card>
            <CardHeader>
              <CardTitle>How It Works</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-4">
                <div className="text-center">
                  <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-emerald-600 font-bold">1</span>
                  </div>
                  <h4 className="font-semibold mb-2">Apply</h4>
                  <p className="text-sm text-gray-600">Submit your application with website/social media details</p>
                </div>
                <div className="text-center">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <h4 className="font-semibold mb-2">Get Approved</h4>
                  <p className="text-sm text-gray-600">We review and approve qualified applications within 48 hours</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <h4 className="font-semibold mb-2">Promote</h4>
                  <p className="text-sm text-gray-600">Use your unique links and promotional materials</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-orange-600 font-bold">4</span>
                  </div>
                  <h4 className="font-semibold mb-2">Earn</h4>
                  <p className="text-sm text-gray-600">Get paid monthly via PayPal or bank transfer</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Requirements */}
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <strong>Active Website or Social Media:</strong> Minimum 1,000 monthly visitors or followers
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <strong>Travel-Related Content:</strong> Focus on travel, lifestyle, or related niches
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <strong>Quality Content:</strong> Original, engaging, and regularly updated content
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5" />
                    <div>
                      <strong>Compliance:</strong> Follow FTC guidelines and our terms of service
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>What We Provide</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Unique Tracking Links:</strong> Custom URLs for accurate commission tracking
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Marketing Materials:</strong> Banners, images, and promotional content
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Real-time Dashboard:</strong> Track clicks, conversions, and earnings
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <strong>Dedicated Support:</strong> Personal affiliate manager for assistance
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Terms & Conditions */}
          <Card>
            <CardHeader>
              <CardTitle>Terms & Conditions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <h4 className="font-semibold mb-2">Payment Terms</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Monthly payments on the 15th</li>
                    <li>• Minimum payout: $100</li>
                    <li>• 30-day cookie duration</li>
                    <li>• PayPal or bank transfer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Prohibited Activities</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Paid search on brand terms</li>
                    <li>• Spam or unsolicited emails</li>
                    <li>• False or misleading claims</li>
                    <li>• Self-referrals or fake bookings</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>



          {/* CTA Section */}
          <Card className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
            <CardContent className="text-center py-12">
              <h2 className="text-3xl text-gray-500 font-bold mb-4">Ready to Start Earning?</h2>
              <p className="text-gray-500 mb-8 max-w-2xl mx-auto">
                Join thousands of successful affiliates who are already earning with our program. Apply today and start
                monetizing your travel content!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">

                <button  className=" text-white bg-emerald-500 px-4 py-1 rounded-sm cursor-pointer ">
                  Apply Now
                </button>

                <button
                  className="text-white bg-emerald-500 px-4 py-1 rounded-sm flex items-center cursor-pointer"
                >
                  <Mail className="mr-2 h-4 w-4" />
                   <span>Contact Us</span>
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
