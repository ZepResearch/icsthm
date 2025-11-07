"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Sparkles, Crown, Award, Star } from 'lucide-react'
import { cn } from "@/lib/utils";

const packages = [
  {
    name: "Platinum",
    price: 15000,
    color: "bg-gradient-to-br from-purple-600 via-pink-600 to-purple-700",
    borderColor: "border-purple-500/20",
    hoverGlow: "hover:shadow-purple-500/20",
    icon: Crown,
    badge: "Most Popular",
    badgeColor: "bg-purple-600",
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
    price: 12000,
    color: "bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600",
    borderColor: "border-blue-500/20",
    hoverGlow: "hover:shadow-blue-500/20",
    icon: Sparkles,
    badge: "Best Value",
    badgeColor: "bg-blue-600",
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
    price: 10000,
    color: "bg-gradient-to-br from-amber-400 via-yellow-500 to-orange-600",
    borderColor: "border-yellow-500/20",
    hoverGlow: "hover:shadow-yellow-500/20",
    icon: Award,
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
    price: 7500,
    color: "bg-gradient-to-br from-slate-400 via-gray-500 to-slate-600",
    borderColor: "border-gray-500/20",
    hoverGlow: "hover:shadow-gray-500/20",
    icon: Star,
    benefits: [
      "Complementary registration for 5 Students and 1 Faculty",
      "2 volunteers at the registration desk from the sponsor side",
      "Half page add on Conference proceeding book",
      "Brand carried out in few promotional activities",
      "Networking opportunities with different delegates",
      "Print media coverage"
    ]
  }
]

export function SponsorshipPackages() {
  const host = process.env.NEXT_PUBLIC_APP_URL;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

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

      const form = document.createElement("form");
      form.method = "POST";
      form.action =
        "https://secure.ccavenue.com/transaction/transaction.do?command=initiateTransaction";

      const fields = {
        encRequest,
        access_code: process.env.NEXT_PUBLIC_CCAVENUE_ACCESS_CODE,
        merchant_id: process.env.NEXT_PUBLIC_CCAVENUE_MERCHANT_ID,
      };

      Object.entries(fields).forEach(([key, value]) => {
        const input = document.createElement("input");
        input.type = "hidden";
        input.name = key;
        input.value = value;
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
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mx-auto px-4">
      {packages.map((pkg, index) => {
        const Icon = pkg.icon;
        const isHovered = hoveredCard === index;
        
        return (
          <Card 
            key={index} 
            className={cn(
              "flex flex-col overflow-hidden transition-all duration-500 hover:scale-105 border-2 relative group",
              pkg.borderColor,
              pkg.hoverGlow,
              "hover:shadow-2xl backdrop-blur-sm bg-white/95 dark:bg-gray-900/95"
            )}
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Badge */}
            {pkg.badge && (
              <div className="absolute top-4 right-4 z-10">
                <span className={cn(
                  "text-xs font-bold px-3 py-1 rounded-full text-white shadow-lg",
                  pkg.badgeColor,
                  "animate-pulse"
                )}>
                  {pkg.badge}
                </span>
              </div>
            )}

            {/* Header with gradient */}
            <CardHeader className={cn(
              pkg.color, 
              "text-white p-8 relative overflow-hidden transition-all duration-500",
              isHovered && "pb-10"
            )}>
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent transform transition-transform duration-700 group-hover:scale-110" />
              </div>

              {/* Icon */}
              <div className="relative mb-4">
                <Icon className={cn(
                  "h-12 w-12 transition-all duration-500",
                  isHovered && "scale-110 rotate-12"
                )} />
              </div>

              {/* Package name */}
              <CardTitle className="text-3xl font-bold relative mb-2 tracking-tight">
                {pkg.name}
              </CardTitle>

              {/* Price */}
              <div className="relative">
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-extrabold tracking-tight">
                    ${pkg.price.toLocaleString()}
                  </span>
                </div>
                <p className="text-white/80 text-sm mt-1 font-medium">One-time payment</p>
              </div>

              {/* Decorative line */}
              <div className={cn(
                "absolute bottom-0 left-0 right-0 h-1 bg-white/30 transition-all duration-500",
                isHovered && "h-2"
              )} />
            </CardHeader>

            {/* Content */}
            <CardContent className="flex-grow p-6 bg-gradient-to-br from-background to-muted/20">
              <div className="mb-4">
                <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-3">
                  Package Includes
                </h4>
              </div>
              <ul className="space-y-3">
                {pkg.benefits.map((benefit, i) => (
                  <li 
                    key={i} 
                    className="flex items-start group/item transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <Check className="h-5 w-5 text-green-500 transition-all duration-300 group-hover/item:scale-110" />
                    </div>
                    <span className="text-sm ml-3 text-muted-foreground group-hover/item:text-foreground transition-colors duration-300">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
            </CardContent>

            {/* Footer */}
            <CardFooter className="p-6 bg-gradient-to-t from-muted/30 to-transparent">
              <Button 
                className={cn(
                  "w-full text-white font-semibold text-base py-6 rounded-xl shadow-lg transition-all duration-300",
                  pkg.color,
                  "hover:shadow-xl hover:scale-[1.02]",
                  "disabled:opacity-50 disabled:cursor-not-allowed",
                  "relative overflow-hidden group"
                )}
                onClick={() => paymentCCAvenue(pkg.name, pkg.price)}
                disabled={isLoading === pkg.name}
              >
                {/* Button shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
                
                <span className="relative flex items-center justify-center gap-2">
                  {isLoading === pkg.name ? (
                    <>
                      <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Choose {pkg.name}
                      <svg 
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </span>
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  )
}