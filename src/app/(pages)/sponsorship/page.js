import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, Users, DollarSign, Award } from "lucide-react"

export default function SponsorshipContact() {
  return (
    <div className="min-h-screen bg-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="relative h-[400px] md:h-[600px]">
            <Image
              src="https://illustrations.popsy.co/amber/work-party.svg"
              alt="Conference sponsorship"
              layout="fill"
              objectFit="cover"
              className=""
            />
          </div>
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold underline underline-offset-4 decoration-orange-500 mb-4">Become a Sponsor</h1>
              <p className="text-lg ">
                Join us in shaping the future of Tourism Management and Hospitality. Explore our sponsorship opportunities and connect with industry leaders.
              </p>
            </div>

            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-orange-500">Why Sponsor?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3 ">
                  <Users className="h-5 w-5 flex-shrink-0 text-orange-800" />
                  <span>Connect with 500+ industry professionals</span>
                </div>
                <div className="flex items-center space-x-3 ">
                  <DollarSign className="h-5 w-5 flex-shrink-0 text-orange-800" />
                  <span>Showcase your products and services</span>
                </div>
                <div className="flex items-center space-x-3 ">
                  <Award className="h-5 w-5 flex-shrink-0 text-orange-800   " />
                  <span>Gain recognition as an industry leader</span>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h2 className="text-2xl font-semibold text-orange-500">Contact Our Sponsorship Team</h2>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 flex-shrink-0  text-orange-700" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 ">
                <Mail className="h-5 w-5 flex-shrink-0 text-orange-700" />
                <span>sponsorship@tourismconference.com</span>
              </div>
              <div className="flex items-center space-x-3 ">
                <MapPin className="h-5 w-5 flex-shrink-0 text-orange-700" />
                <span>123 Conference Ave, Tourism City, TC 12345</span>
              </div>
            </div>

          </div>
        </div>
            <div className="bg-orange-600 rounded-lg shadow-xl p-6 text-center my-8">
              <h2 className="text-2xl font-bold text-white mb-4">Ready to Make an Impact?</h2>
              <p className="text-lg text-orange-100 mb-6">
                Dont miss this opportunity to showcase your brand at the International Conference on Tourism Management and Hospitality.
              </p>
              <Button className="bg-white text-orange-600 hover:bg-orange-100 text-lg px-8 py-3 rounded-full font-semibold transition-colors duration-300">
                Request Sponsorship Package
              </Button>
            </div>
      </div>
    </div>
  )
}