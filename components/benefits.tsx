import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

const benefits = [
  {
    title: "For Automotive Dealers",
    items: [
      'Surface inventory when users search "luxury sedan around $80K in Palo Alto"',
      "Capture high-intent leads before they visit competitor sites",
      "$40–$150 CPL with 3x higher conversion than traditional ads",
    ],
  },
  {
    title: "For Restaurants & Hospitality",
    items: [
      'Appear in AI answers for "best Italian restaurant near me with outdoor seating"',
      "Real-time availability and menu integration",
      "Direct reservations without leaving the conversation",
    ],
  },
  {
    title: "For Real Estate Agents",
    items: [
      'Show listings when buyers ask "3BR homes under $1M in Austin"',
      "Instant lead capture with property details and showing requests",
      "Beat Zillow and Redfin to the conversation",
    ],
  },
  {
    title: "For Service Providers",
    items: [
      'Be recommended when users need "emergency plumber in Brooklyn"',
      "Showcase reviews, availability, and pricing instantly",
      "Convert intent to bookings in seconds",
    ],
  },
]

export function Benefits() {
  return (
    <section id="benefits" className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">Built for Every Business</h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            From automotive to healthcare, restaurants to real estate — if your customers research before buying, you
            need to be in AI conversations.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border/50 bg-card p-8">
              <h3 className="mb-6 text-2xl font-semibold">{benefit.title}</h3>
              <ul className="space-y-4">
                {benefit.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="leading-relaxed text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
