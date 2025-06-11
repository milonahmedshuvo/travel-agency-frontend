import Link from "next/link"
import { Facebook, Instagram, Mail, Phone, Twitter } from "lucide-react"
import Image from "next/image"
import logo from '../../../assets/logo/navlogo.png'



export default function Footer() {


  return (
    <footer className="bg-[#1a1f25] text-white py-12 ">
      {/* Subscription Section */}
      <div className="custom-container mx-auto px-4 md:px-6 mb-16">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <div className="max-w-md">
            <h2 className="text-3xl md:text-4xl font-semibold mb-2">
              Subscribe for <span className="text-[#ff7b3a]">Exclusive</span> Deals &amp; More!
            </h2>
            <p className="text-gray-300 mb-4 mt-5.5">
              Get exclusive travel deals, expert tips, and inspiring itineraries delivered to your inbox.
            </p>
          </div>
          <div className="w-full md:w-auto max-w-md">

            <div className="flex flex-col sm:flex-row w-full md:w-[496px] relative ">
              <input
                type="email"
                placeholder="Enter your mail"
                className="px-4 py-3 rounded-md bg-white text-gray-900 flex-grow"
                aria-label="Email address"
              />
              <button className="absolute top-[4px] right-[4px] bg-[#2196f3] hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md transition-colors">
                Subscribe
              </button>
            </div>

          </div>
        </div>
      </div>

      <hr className="border-gray-700" />

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-6 pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
             
          <Image
            src={logo}
            width={500}
            height={500}
            alt="logo"
            className="w-[175px] lg:w-[100px] xl:w-[175px] h-[140px]"
          />
            </Link>
            <p className="text-gray-300 mb-6">
              Go beyond the ordinary and discover hidden gems, cultural encounters, and off-the-beaten-path adventures.
            </p>
          </div>

          {/* Navigation Links - First Column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex  md:justify-center lg:justify-end">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="hover:text-[#ff7b3a] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-[#ff7b3a] transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#ff7b3a] transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-[#ff7b3a] transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Navigation Links - Second Column */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex md:justify-center lg:justify-end">
            <nav>
              <ul className="space-y-4">
                <li>
                  <Link href="/terms" className="hover:text-[#ff7b3a] transition-colors">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-[#ff7b3a] transition-colors">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="/cookies" className="hover:text-[#ff7b3a] transition-colors">
                    Cookie policy
                  </Link>
                </li>
                <li>
                  <Link href="/affiliate" className="hover:text-[#ff7b3a] transition-colors">
                    Affiliate program
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Contact Information */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1 flex md:justify-center lg:justify-end">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Phone size={18} className="text-[#ff7b3a]" />
                <span>+944(99)-3821</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={18} className="text-[#ff7b3a]" />
                <span>xyztravle@mail.com</span>
              </div>

              <div className="mt-6">
                <p className="mb-3">Also find us at:</p>
                <div className="flex space-x-4">
                  <Link href="#" aria-label="Facebook">
                    <Facebook className="text-white hover:text-[#ff7b3a] transition-colors" size={20} />
                  </Link>
                  <Link href="#" aria-label="Instagram">
                    <Instagram className="text-white hover:text-[#ff7b3a] transition-colors" size={20} />
                  </Link>
                  <Link href="#" aria-label="Twitter">
                    <Twitter className="text-white hover:text-[#ff7b3a] transition-colors" size={20} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

