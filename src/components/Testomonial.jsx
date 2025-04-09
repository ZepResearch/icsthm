import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import Image from "next/image";

export default function Testimonial() {
  return (
    <section className="w-full bg-gradient-to-tr from-orange-50 to-yellow-50 dark:from-orange-900 dark:to-yellow-900 py-12 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="rounded-full bg-orange-100 p-2">
              <Trophy className="h-6 w-6 text-orange-600" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 md:text-2xl">
              Leading Tourism & Hospitality Conference
            </h2>
          </div>
          <div className="flex items-center gap-2 rounded-lg border bg-white px-4 py-2 shadow-sm">
            <div className="flex gap-0.5">
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-orange-400 text-orange-400"
                  />
                ))}
            </div>
            <div className="text-sm">
              <span className="font-medium">4.9</span>
              <span className="text-gray-500"> (200+ reviews)</span>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, i) => (
            <Card
              key={i}
              className="relative overflow-hidden border-orange-100 p-6"
            >
              <div className="absolute -right-4 -top-4 h-16 w-16 rotate-12 animate-pulse bg-orange-500" />
              <blockquote className="relative space-y-4">
                <div className="text-lg font-medium leading-relaxed text-gray-700">
                  &quot;{testimonial.quote}&quot;
                </div>
                <footer className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="rounded-full"
                    width={48}
                    height={48}
                  />
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-500">
                      {testimonial.title}
                    </div>
                  </div>
                </footer>
              </blockquote>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const Trophy = ({ className }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
    <path d="M4 22h16" />
    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
  </svg>
);

const testimonials = [
  {
    quote:
      "The International Conference on Sustainable Tourism & Hospitality Management was transformative. The insights shared have revolutionized how we approach sustainable tourism.",
    name: "Sarah Chen",
    title: "Director of Tourism Development, Global Destinations",
    avatar:
      "https://images.unsplash.com/photo-1478427094460-4c8d412903e2?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "An incredible gathering of industry leaders. The networking opportunities and knowledge sharing were invaluable for our hospitality business.",
    name: "Michael Rodriguez",
    title: "CEO, Luxury Hotels Group",
    avatar:
      "https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The conference provided practical solutions to modern hospitality challenges. The speakers were world-class and the organization was impeccable.",
    name: "Emma Thompson",
    title: "Head of Operations, Tourism Board",
    avatar:
      "https://plus.unsplash.com/premium_photo-1693000697180-4e285198d71c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
