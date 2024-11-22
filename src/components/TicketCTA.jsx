import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function TicketCTA() {
  return (
    <section className="w-full bg-gradient-to-tr from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-orange-400 drop-shadow-sm">
            Conference Tickets
          </h2>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
            Join us for the International Conference on Tourism Management &
            Hospitality
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
          {tickets.map((ticket, i) => (
            <Card
              key={i}
              className="relative overflow-hidden border-orange-100"
            >
              <div className="absolute right-0 top-0">
                <Badge
                  variant="outline"
                  className="m-4 border-orange-200 bg-orange-50 text-orange-600"
                >
                  Early Bird
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold -tracking-tighter underline underline-offset-4 decoration-orange-500">
                  {ticket.name}
                </h3>
                <Image
                  src={ticket.img}
                  alt="Conference Image"
                  className="place-self-center"
                  width={300}
                  height={400}
                />
                <div className="mt-4 flex items-baseline text-gray-900">
                  <span className="text-4xl font-bold tracking-tight">
                    ${ticket.price}
                  </span>
                  <span className="ml-1 text-xl font-semibold">
                    {ticket.period}
                  </span>
                </div>
                <ul className="mt-6 space-y-3">
                  {ticket.features.map((feature, i) => (
                    <li key={i} className="flex">
                      <Check className="mr-2 h-5 w-5 text-orange-500" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/registration"
                  className="mt-8 block rounded-lg bg-orange-600 px-6 py-3 text-center text-sm font-semibold text-white hover:bg-orange-700"
                >
                  Register Now
                </Link>
                <p className="mt-2 text-center text-sm text-gray-500">
                  Limited seats available
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const tickets = [
  {
    name: "Virtual Pass",
    price: "699",
    period: "/person",
    img: "https://illustrations.popsy.co/amber/graphic-design.svg",
    features: [
      "Full conference access",
      "Networking sessions",
      "Workshop materials",
      "Lunch and refreshments",
      "Certificate of attendance",
    ],
  },
  {
    name: "Phyiscal Pass",
    price: "999",
    period: "/person",
    img: "https://illustrations.popsy.co/amber/keynote-presentation.svg",

    features: [
      "All Professional Pass benefits",
      "VIP networking dinner",
      "Priority seating",
      "Exclusive roundtable sessions",
      "1-year membership access",
    ],
  },
];
