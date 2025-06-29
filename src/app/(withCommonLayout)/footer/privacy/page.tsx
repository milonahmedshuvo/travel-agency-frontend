import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import { Shield, Eye, Lock, Users, Globe, Mail } from "lucide-react"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Hvarlocalguide - Privacy Policy",
  description: "Hvar Local Travel Agency",
};


export default function PrivacyPage() {
  const dataTypes = [
    { icon: <Users className="h-5 w-5" />, type: "Personal Information", description: "Name, email, phone, address" },
    {
      icon: <Globe className="h-5 w-5" />,
      type: "Travel Preferences",
      description: "Destinations, dates, accommodation preferences",
    },
    {
      icon: <Lock className="h-5 w-5" />,
      type: "Payment Information",
      description: "Credit card details, billing information",
    },
    {
      icon: <Eye className="h-5 w-5" />,
      type: "Usage Data",
      description: "Website interactions, search history, booking patterns",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
     

      <div className="container mx-auto px-4 py-12 bg-gray-50">
        <div className="">
          {/* Header */}
          <div className="text-center mb-12 ">
            <div className="flex justify-center mb-4">
              <Shield className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">Last updated: December 24, 2024</p>
            <div className="mt-2">
              GDPR & CCPA Compliant
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Our Commitment to Your Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                At TravelPro, we are committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you use our services.
              </p>
            </CardContent>
          </Card>

          {/* <Separator className="my-8" /> */}
          <hr className="border border-gray-400"/>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {dataTypes.map((item, index) => (
                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg">
                      <div className="text-blue-600 mt-1">{item.icon}</div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{item.type}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold">1.1 Information You Provide</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Account registration information</li>
                    <li>Booking and reservation details</li>
                    <li>Payment and billing information</li>
                    <li>Communication preferences</li>
                    <li>Customer service interactions</li>
                  </ul>

                  <h4 className="font-semibold">1.2 Information We Collect Automatically</h4>
                  <ul className="list-disc pl-6 space-y-1 text-gray-700">
                    <li>Device and browser information</li>
                    <li>IP address and location data</li>
                    <li>Website usage and navigation patterns</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We use your information for the following purposes:</p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Service Delivery</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Process bookings and reservations</li>
                      <li>Provide customer support</li>
                      <li>Send booking confirmations and updates</li>
                      <li>Facilitate payments and transactions</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Service Improvement</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Personalize your experience</li>
                      <li>Analyze usage patterns and preferences</li>
                      <li>Develop new features and services</li>
                      <li>Conduct market research</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Information Sharing and Disclosure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">3.1 Service Providers</h4>
                <p>
                  We share information with trusted third-party service providers who assist us in delivering our
                  services, including airlines, hotels, car rental companies, and payment processors.
                </p>

                <h4 className="font-semibold">3.2 Legal Requirements</h4>
                <p>
                  We may disclose your information when required by law, court order, or government regulation, or to
                  protect our rights, property, or safety.
                </p>

                <h4 className="font-semibold">3.3 Business Transfers</h4>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred as part
                  of the business transaction.
                </p>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800">
                    <strong>We do not sell your personal information to third parties for marketing purposes.</strong>
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We implement industry-standard security measures to protect your personal information:</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Technical Safeguards</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>SSL/TLS encryption for data transmission</li>
                      <li>Encrypted data storage</li>
                      <li>Regular security audits and updates</li>
                      <li>Secure payment processing</li>
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold">Administrative Safeguards</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700">
                      <li>Access controls and user authentication</li>
                      <li>Employee training on data protection</li>
                      <li>Incident response procedures</li>
                      <li>Regular privacy impact assessments</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Your Privacy Rights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>Depending on your location, you may have the following rights:</p>

                <div className="space-y-4 bg-gray-50">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Access & Portability</h4>
                      <p className="text-sm text-gray-700">Request a copy of your personal data</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Correction</h4>
                      <p className="text-sm text-gray-700">Update or correct inaccurate information</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Deletion</h4>
                      <p className="text-sm text-gray-700">Request deletion of your personal data</p>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-semibold mb-2">Opt-out</h4>
                      <p className="text-sm text-gray-700">Unsubscribe from marketing communications</p>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-green-800">
                      <Mail className="h-5 w-5 inline mr-2" />
                      To exercise your rights, contact us at <strong>privacy@travelpro.com</strong>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Cookies and Tracking Technologies</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>We use cookies and similar technologies to enhance your experience:</p>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Essential Cookies</h4>
                    <p className="text-gray-700">Required for basic website functionality and security</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Analytics Cookies</h4>
                    <p className="text-gray-700">Help us understand how visitors interact with our website</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Marketing Cookies</h4>
                    <p className="text-gray-700">
                      Used to deliver relevant advertisements and track campaign effectiveness
                    </p>
                  </div>
                </div>

                <p className="text-sm text-gray-600">
                  You can manage your cookie preferences through your browser settings or our cookie consent tool.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. International Data Transfers</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Your information may be transferred to and processed in countries other than your own. We ensure
                  appropriate safeguards are in place for international transfers, including:
                </p>

                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Standard Contractual Clauses approved by the European Commission</li>
                  <li>Adequacy decisions for countries with equivalent data protection laws</li>
                  <li>Certification schemes and codes of conduct</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Data Retention</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We retain your personal information only as long as necessary for the purposes outlined in this
                  policy:
                </p>

                <ul className="list-disc pl-6 space-y-1 text-gray-700">
                  <li>Account information: Until account deletion or 7 years after last activity</li>
                  <li>Booking records: 7 years for tax and legal compliance</li>
                  <li>Marketing data: Until you opt-out or 3 years of inactivity</li>
                  <li>Website analytics: 26 months from collection</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Childrens Privacy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Our services are not directed to children under 13 years of age. We do not knowingly collect personal
                  information from children under 13. If we become aware that we have collected such information, we
                  will take steps to delete it promptly.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>10. Changes to This Privacy Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by
                  posting the new policy on our website and updating the Last updated date.
                </p>

                <p>
                  We encourage you to review this Privacy Policy periodically to stay informed about how we protect your
                  information.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>11. Contact Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h4 className="font-semibold mb-3">Privacy Officer</h4>
                  <div className="space-y-2 text-gray-700">
                    <p>
                      <strong>Email:</strong> privacy@travelpro.com
                    </p>
                    <p>
                      <strong>Phone:</strong> +1 (555) 123-4567
                    </p>
                    <p>
                      <strong>Mail:</strong> TravelPro Privacy Officer
                      <br />
                      123 Travel Street, Suite 100
                      <br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
