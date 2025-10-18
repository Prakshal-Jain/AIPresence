import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Zap } from "lucide-react"

const reasons = [
  {
    icon: Users,
    stat: "800M+",
    label: "Weekly ChatGPT Users",
    description: "The largest shift in how people discover and buy since Google launched.",
  },
  {
    icon: TrendingUp,
    stat: "60%",
    label: "Zero-Click Searches",
    description: "Most searches end without a click. Your customers never leave AI.",
  },
  {
    icon: Zap,
    stat: "Now",
    label: "First-Mover Window",
    description: "Early partners get priority placement and better economics. This window closes fast.",
  },
]

export function WhyNow() {
  return (
    <section id="why-now" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <div className="mb-6 mx-auto max-w-3xl rounded-lg border border-primary/50 bg-primary/5 p-6">
            <p className="text-lg leading-relaxed">
              In 2010, not being on Google killed you. In 2025, businesses having no <strong>presence</strong> on AI
              will be killed.
            </p>
            <p className="mt-2 text-muted-foreground">
              Billions of people use AI assistants every week, but most businesses are invisible there.
            </p>
          </div>

          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">The Window Is Closing</h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            {
              "The AI economy is here. Businesses that establish presence now will dominate the next decade of customer acquisition. Those who wait will pay more and rank lower."
            }
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-border/50 bg-card p-6 text-center">
              <div className="mb-4 flex justify-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div className="mb-2 text-4xl font-bold">{reason.stat}</div>
              <div className="mb-3 text-sm font-semibold text-primary">{reason.label}</div>
              <p className="text-sm leading-relaxed text-muted-foreground">{reason.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="mx-auto max-w-3xl rounded-lg border border-primary/50 bg-primary/5 p-6">
            <p className="text-lg font-semibold leading-relaxed">
              Early partners are already capturing leads while competitors are still optimizing for Google.
              <span className="text-primary">
                {" "}
                The businesses who move now will have the leverage of better placement, lower costs, and established
                data when everyone else arrives.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
