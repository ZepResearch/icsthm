import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Users, DollarSign, Award, Sparkles, TrendingUp, Globe } from 'lucide-react'
import { SponsorshipPackages } from "./components/SponsorshipPackages"
import Link from "next/link"
import { cn } from "@/lib/utils"

export default function SponsorshipContact() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Gradient Background */}
      <div className="relative overflow-hidden">
        {/* Decorative Elements */}
      
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur-xl opacity-25 group-hover:opacity-40 transition duration-500" />
              <div className="relative h-[400px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="https://res.cloudinary.com/dtsuvx8dz/image/upload/v1734198715/samples/szapxx5bakzspvbxz3gj.webp"
                  alt="Conference sponsorship"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-700 group-hover:scale-105"
                />
                {/* Overlay Badge */}
                <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-orange-500" />
                    <span className="font-bold text-gray-900">Premium Event</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
                <Award className="h-4 w-4 text-orange-600" />
                <span className="text-sm font-semibold text-orange-700">Sponsorship Opportunities</span>
              </div>

              {/* Heading */}
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold leading-tight">
                  <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                    Become a Sponsor
                  </span>
                </h1>
                <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
                  Join us in shaping the future of Sustainable Tourism & Hospitality Management. Connect with industry leaders and showcase your brand to a global audience.
                </p>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-3 gap-4">
                {[
                  { number: "500+", label: "Attendees" },
                  { number: "50+", label: "Speakers" },
                  { number: "30+", label: "Countries" }
                ].map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white border-2 border-orange-100 rounded-2xl p-4 text-center hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="text-2xl font-bold text-orange-600">{stat.number}</div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Why Sponsor Card */}
              <Card className="bg-white border-2 border-orange-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:border-orange-200">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold flex items-center gap-2">
                    <div className="p-2 bg-orange-100 rounded-lg">
                      <Award className="h-6 w-6 text-orange-600" />
                    </div>
                    <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                      Why Sponsor?
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { icon: Users, text: "Connect with 500+ industry professionals" },
                    { icon: TrendingUp, text: "Showcase your products and services" },
                    { icon: Globe, text: "Gain recognition as an industry leader" }
                  ].map((item, index) => (
                    <div 
                      key={index}
                      className="flex items-center gap-4 p-3 rounded-xl hover:bg-orange-50 transition-colors duration-300 group"
                    >
                      <div className="p-2 bg-orange-100 rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-5 w-5 text-orange-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{item.text}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

     
      {/* Sponsorship Packages Section */}
      <div className="bg-white py-8 lg:py-12">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-orange-600" />
              <span className="text-sm font-semibold text-orange-700">Choose Your Package</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Sponsorship Packages
              </span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Select the perfect sponsorship tier that aligns with your brand goals and budget
            </p>
          </div>
          <SponsorshipPackages />
        </div>
      </div>
 {/* Contact Section */}
      <div className="bg-gradient-to-br from-red-400 to-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl border-2 border-orange-100 p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                  Contact Our Sponsorship Team
                </span>
              </h2>
              <p className="text-gray-600 text-lg">Get in touch to discuss your sponsorship package</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  icon: Phone, 
                  title: "Phone", 
                  content: "+91 7358737843",
                  link: "tel:+917358737843"
                },
                { 
                  icon: Mail, 
                  title: "Email", 
                  content: "info@icsthm.com",
                  link: "mailto:info@icsthm.com"
                },
                { 
                  icon: MapPin, 
                  title: "Address", 
                  content: "DCB-330, 3rd Floor, DLF Cyber City, Patia, Bhubaneswar, ODISHA - 751024 India",
                  link: null
                }
              ].map((contact, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-br from-orange-50 to-white p-6 rounded-2xl border-2 border-orange-100 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-white rounded-2xl shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                      <contact.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold text-gray-900 text-lg">{contact.title}</h3>
                      {contact.link ? (
                        <a 
                          href={contact.link}
                          className="text-gray-600 hover:text-orange-600 transition-colors duration-300 block"
                        >
                          {contact.content}
                        </a>
                      ) : (
                        <p className="text-gray-600 text-sm">{contact.content}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-orange-50 via-white to-orange-50/30 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group">
            {/* Glow Effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-pink-500 rounded-3xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-500" />
            
            <div className="relative bg-gradient-to-br from-orange-500 via-orange-600 to-pink-500 rounded-3xl shadow-2xl p-8 lg:p-12 text-center overflow-hidden">
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent" />
              </div>

              <div className="relative space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full">
                  <Sparkles className="h-4 w-4 text-white" />
                  <span className="text-sm font-semibold text-white">Limited Spots Available</span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-extrabold text-white leading-tight">
                  Ready to Make an Impact?
                </h3>
                
                <p className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                  Don't miss this opportunity to showcase your brand at the International Conference on Sustainable Tourism and Hospitality Management.
                </p>

                <div className="pt-4">
                  <Button 
                    asChild
                    className="bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-6 rounded-full font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Request Sponsorship Package
                      <svg 
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-8 pt-6 text-white/80 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-white rounded-full" />
                    <span>Instant Response</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-white rounded-full" />
                    <span>Custom Packages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-white rounded-full" />
                    <span>Flexible Terms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}