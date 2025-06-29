import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Metadata } from "next";



export const metadata: Metadata = {
  title: "Hvarlocalguide - Terms & Conditions",
  description: "Hvar Local Travel Agency",
};


export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      <div className="container mx-auto px-4 py-12 pb-20">
        <div className="">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms & Conditions</h1>
            <p className="text-lg text-gray-600">Last updated: December 24, 2024</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Agreement to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                By accessing and using TravelPro services, you agree to be bound by these Terms and Conditions. If you
                do not agree to these terms, please do not use our services.
              </p>
            </CardContent>
          </Card>

          <hr></hr>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Service Description</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>TravelPro provides travel booking and planning services including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Flight reservations and ticketing</li>
                  <li>Hotel and accommodation bookings</li>
                  <li>Car rental services</li>
                  <li>Tour package arrangements</li>
                  <li>Custom travel itinerary planning</li>
                  <li>Travel consultation and support services</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Booking and Payment Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">2.1 Booking Confirmation</h4>
                <p>
                  All bookings are subject to availability and confirmation from service providers. A booking is only
                  confirmed when you receive written confirmation from TravelPro.
                </p>

                <h4 className="font-semibold">2.2 Payment</h4>
                <p>
                  Payment is required at the time of booking unless otherwise specified. We accept major credit cards,
                  bank transfers, and other approved payment methods.
                </p>

                <h4 className="font-semibold">2.3 Service Fees</h4>
                <p>
                  Service fees are non-refundable and apply to all bookings. Fees vary by service type and are clearly
                  disclosed before booking confirmation.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Cancellation and Refund Policy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">3.1 Cancellation by Customer</h4>
                <p>
                  Cancellation policies vary by service provider and booking type. Cancellation fees may apply as per
                  the terms of individual service providers.
                </p>

                <h4 className="font-semibold">3.2 Refunds</h4>
                <p>
                  Refunds are processed according to the cancellation policy of each service provider. TravelPro service
                  fees are generally non-refundable.
                </p>

                <h4 className="font-semibold">3.3 Force Majeure</h4>
                <p>
                  In cases of force majeure events (natural disasters, pandemics, political unrest), standard
                  cancellation policies may not apply. We will work with customers to find suitable alternatives.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Customer Responsibilities</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">4.1 Travel Documents</h4>
                <p>
                  Customers are responsible for ensuring they have valid travel documents including passports, visas,
                  and any required health certificates.
                </p>

                <h4 className="font-semibold">4.2 Accurate Information</h4>
                <p>
                  Customers must provide accurate and complete information when making bookings. Errors in passenger
                  names or travel dates may result in additional fees.
                </p>

                <h4 className="font-semibold">4.3 Travel Insurance</h4>
                <p>
                  We strongly recommend purchasing comprehensive travel insurance. TravelPro is not liable for losses
                  that could have been covered by travel insurance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">5.1 Service Provider Responsibility</h4>
                <p>
                  TravelPro acts as an intermediary between customers and service providers. We are not liable for the
                  acts, errors, omissions, or negligence of service providers.
                </p>

                <h4 className="font-semibold">5.2 Maximum Liability</h4>
                <p>
                  Our maximum liability for any claim is limited to the total amount paid to TravelPro for the specific
                  service in question.
                </p>

                <h4 className="font-semibold">5.3 Consequential Damages</h4>
                <p>
                  TravelPro shall not be liable for any indirect, incidental, special, or consequential damages
                  including but not limited to lost profits, business interruption, or personal injury.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Privacy and Data Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use,
                  and protect your personal information.
                </p>
                <p>
                  By using our services, you consent to the collection and use of your information as described in our
                  Privacy Policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>7. Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <h4 className="font-semibold">7.1 Governing Law</h4>
                <p>These terms are governed by the laws of the State of New York, United States.</p>

                <h4 className="font-semibold">7.2 Dispute Resolution Process</h4>
                <p>
                  Any disputes arising from these terms or our services shall first be addressed through good faith
                  negotiations. If unresolved, disputes may be subject to binding arbitration.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>8. Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>
                  TravelPro reserves the right to modify these Terms and Conditions at any time. Changes will be
                  effective immediately upon posting on our website.
                </p>
                <p>Continued use of our services after changes constitutes acceptance of the modified terms.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>9. Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>If you have questions about these Terms and Conditions, please contact us:</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>
                    <strong>TravelPro Customer Service</strong>
                  </p>
                  <p>Email: legal@travelpro.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Travel Street, Suite 100, New York, NY 10001</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
