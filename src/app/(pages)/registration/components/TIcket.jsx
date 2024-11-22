import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Payment from "./Payment";

export default function Ticket() {
  const tickets = [
    {
      name: "Virtual  TICKET",
      price: 49,
      period: "month",
      features: [
        "General Admission to Events",
        "Basic Customer Support",
        "Event Newsletter Subscription",
        "10% Merchandise Discount",
      ],
    },
    {
      name: "Physical  TICKET",
      price: 99,
      period: "month",
      features: [
        "Priority Access to All Events",
        "24/7 VIP Customer Support",
        "Exclusive Merchandise Discounts",
        "Backstage Meet & Greet Opportunities",
      ],
    },
    // {
    //   name: "VIP TICKET",
    //   price: 199,
    //   period: "month",
    //   features: [
    //     "VIP Access to All Events",
    //     "Dedicated Concierge Service",
    //     "Complimentary Merchandise Pack",
    //     "Private Artist Meet & Greets",
    //     "Exclusive VIP Lounge Access",
    //   ],
    // },
  ];

  return (
    <div className="min-h-full bg-background text-foreground py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12">
          Choose Your Experience
        </h1>

        <div className="space-y-8">
          {tickets.map((ticket, index) => (
            <div key={index} className="flex items-center justify-center">
              <Card className="relative w-full max-w-3xl bg-orange-100  overflow-hidden border-none">
                <div className="flex flex-col md:flex-row">
                  <div className="flex-grow p-6 pr-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <h3 className="text-2xl font-bold tracking-wide underline underline-offset-4 decoration-orange-500">
                          {ticket.name}
                        </h3>
                        <div className="text-xs uppercase tracking-wider opacity-80">
                          Admit one
                        </div>
                      </div>
                      <ul className="space-y-2 text-sm">
                        {ticket.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center gap-2"
                          >
                            <Check className="w-4 h-4 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      {/* <div className="text-xs opacity-80">#{Math.random().toString().slice(2, 11)}</div> */}
                    </div>
                  </div>
                  <div className="relative flex-shrink-0 w-full md:w-48  md:border-l border-dashed border-orange-500 flex flex-col justify-center items-center">
                    <div className="hidden md:block absolute top-0 left-0 w-10 h-10 bg-background rounded-full -translate-x-1/2 -translate-y-1/2" />
                    <div className="hidden md:block absolute bottom-0 left-0 w-10 h-10 bg-background rounded-full -translate-x-1/2 translate-y-1/2" />
                    <div className="text-center space-y-4 p-6">
                      <div className="space-y-1">
                        <div className="text-4xl font-bold">
                          ${ticket.price}
                        </div>
                        {/* <div className="text-sm opacity-80">/{ticket.period}</div> */}
                      </div>
                      <Button className="w-full font-semibold">Book Now</Button>
                      <Payment />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
