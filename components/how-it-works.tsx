import { Card } from "@/components/ui/card"
import { Database, Zap, Target, BarChart3 } from "lucide-react"

const steps = [
  {
    icon: Database,
    title: "Connect Your Inventory",
    description:
      "Structured data ingestion from your existing systems. Works with any CRM, POS, or inventory management tool.",
  },
  {
    icon: Zap,
    title: "Get Surfaced in AI Answers",
    description: "When users express buying intent in ChatGPT, your offerings appear natively in the conversation.",
  },
  {
    icon: Target,
    title: "Capture Qualified Leads",
    description: "Intelligent lead routing to your team at the exact moment of intent. No redirects, no friction.",
  },
  {
    icon: BarChart3,
    title: "Track & Optimize",
    description: "Real-time analytics, merchandising controls, and performance insights to maximize conversions.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">How It Works</h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Simple onboarding, fast results, transparent pricing. Be live in AI conversations in days, not months.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-border/50 bg-card/50 p-6 backdrop-blur-sm">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              <div className="absolute -top-3 -left-3 flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-primary text-sm font-bold text-primary-foreground">
                {index + 1}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
