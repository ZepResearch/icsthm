"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

const packages = [
  {
    name: "Platinum",
    price: "15000",
    color: "bg-gradient-to-br from-purple-500 to-pink-500",
    benefits: [
      "1 VIP participating in the conference",
      "Complementary registration for 12 Students and 5 Faculties",
      "Stage honor to the Sponsor Party",
      "Full Page add on the conference proceeding book",
      "Brand carried in all website and promotional activities",
      "Event called by title sponsor",
      "Networking opportunities with different delegates",
      "Media Coverage",
      "2 Feedback video bites featured on YouTube channel"
    ]
  },
  {
    name: "Diamond",
    price: "12000",
    color: "bg-gradient-to-br from-blue-500 to-teal-500",
    benefits: [
      "1 Session Chair participating from the sponsor side",
      "Complementary registration for 10 Students and 3 Faculties",
      "Full Page add on the conference proceeding book",
      "Brand carried in all website and promotional activities",
      "Public announcement recognizing the Sponsor",
      "Networking opportunities with different delegates",
      "Logo used on all website activities and campaigns",
      "5 minutes slot for media Coverage",
      "1 Feedback video featured on the YouTube channel"
    ]
  },
  {
    name: "Gold",
    price: "10000",
    color: "bg-gradient-to-br from-yellow-400 to-orange-500",
    benefits: [
      "Complementary registration for 8 Students and 2 Faculties",
      "Full page add on conference proceedings",
      "Announcement recognition of the sponsor during valedictory function",
      "Logos used in all promotional materials",
      "One anchor can join from the sponsor side",
      "Networking opportunities with different delegates",
      "A standee of the sponsor side on the registration desk"
    ]
  },
  {
    name: "Silver",
    price: "7500",
    color: "bg-gradient-to-br from-gray-300 to-gray-400",
    benefits: [
      "Complementary registration for 5 Students and 1 Faculty",
      "2 volunteers at the registration desk from the sponsor side",
      "Half page add on Conference proceeding book",
      "Brand carried out in few promotional activities",
      "Networking opportunities with different delegates",
      "Print media coverage"
    ]
  },
//   {
//     name: "Exhibitor",
//     price: "5000",
//     color: "bg-gradient-to-br from-green-400 to-emerald-500",
//     benefits: [
//       "One stall allowed in the conference area",
//       "Advertise products at the conference"
//     ]
//   }
]

export function SponsorshipPackages() {
  const host = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(null);

  const generateOrderId = () => {
    return `ORD${Date.now()}${Math.floor(Math.random() * 1000)}`;
  };

  const paymentCCAvenue = async (packageName, amount) => {
    try {
      setIsLoading(packageName);

      const paymentData = {
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
        order_id: generateOrderId(),
        amount: amount,
        currency: "USD",
        redirect_url: `${host}/api/ccavenue/handle`,
        cancel_url: `${host}/api/ccavenue/handle`,
        billing_email: "",
        billing_name: "",
        billing_address: "",
        billing_city: "",
        billing_state: "",
        billing_zip: "",
        billing_country: "",
        billing_tel: "",
        language: "EN",
      };

      // First, get the encrypted order from your backend
      const response = await fetch("/api/ccavenue/encrypt", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(paymentData),
      });

      if (!response.ok) {
        throw new Error("Failed to encrypt order data");
      }

      const { encRequest } = await response.json();

      // Create form and submit
      const form = document.createElement("form");
      form.method = "POST";
      form.action =
        "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";

      // Add hidden fields
      const fields = {
        encRequest,
        access_code: process.env.NEXT_PUBLIC_CCAVENUE_ACCESS_CODE,
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value ;
        form.appendChild(input);
      });

      document.body.appendChild(form);
      form.submit();
    } catch (error) {
      console.error("Payment initiation failed:", error);
      alert("Failed to initiate payment. Please try again.");
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {packages.map((pkg, index) => (
        <Card key={index} className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl">
          <CardHeader className={`${pkg.color} text-white p-6`}>
            <CardTitle className="text-2xl font-bold">{pkg.name}</CardTitle>
            <p className="text-3xl font-extrabold mt-2">{pkg.price} USD</p>
          </CardHeader>
          <CardContent className="flex-grow p-6">
            <ul className="space-y-2">
              {pkg.benefits.map((benefit, i) => (
                <li key={i} className="flex items-start">
                  <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter className="p-6">
            <Button 
              className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              onClick={() => paymentCCAvenue(pkg.name, pkg.price)}
              disabled={isLoading === pkg.name}
            >
              {isLoading === pkg.name ? "Processing..." : `Choose ${pkg.name}`}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

