import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "$149",
    period: "/month",
    description: "Perfect for small businesses testing AI presence",
    features: [
      "Up to 100 products/services",
      "Basic inventory sync",
      "Lead routing to email",
      "Monthly analytics reports",
      "ChatGPT App integration",
    ],
  },
  {
    name: "Professional",
    price: "$499",
    period: "/month",
    description: "For growing businesses scaling their AI presence",
    features: [
      "Up to 1,000 products/services",
      "Real-time inventory sync",
      "CRM integration",
      "Advanced analytics & insights",
      "Priority lead routing",
      "Custom merchandising controls",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "$1,499",
    period: "/month",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited products/services",
      "Multi-location support",
      "Dedicated account manager",
      "Custom integrations",
      "White-label options",
      "API access",
      "SLA guarantees",
    ],
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">Transparent Pricing</h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Choose a SaaS plan or pay per lead. No hidden fees, no long-term contracts.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative border-border/50 p-8 ${
                plan.popular ? "border-primary bg-primary/5 shadow-lg" : "bg-card"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
                <p className="text-sm text-muted-foreground">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>

              <Button className="mb-6 w-full" variant={plan.popular ? "default" : "outline"}>
                Get Started
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-3">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            <strong>Pay-per-lead pricing:</strong> $40–$150 CPL for automotive, $20–$80 for other verticals. Only pay
            for qualified leads.
          </p>
        </div>
      </div>
    </section>
  )
}
