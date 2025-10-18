import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Calendar, Zap } from "lucide-react"

export function ContactCTA() {
  return (
    <section id="pricing" className="bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
              Ready to Own Your AI Presence?
            </h2>
            <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
              Custom pricing based on your vertical, volume, and goals. Early access partners get priority placement and
              preferential rates.
            </p>
          </div>

          <Card className="border-primary/50 bg-card p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="mb-4 text-2xl font-bold">Pricing Models</h3>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 font-semibold">Pay-Per-Lead</div>
                    <div className="text-sm text-muted-foreground">
                      Only pay for qualified leads. Typical CPL: $40–$150 automotive, $20–$80 other verticals.
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold">SaaS Plans</div>
                    <div className="text-sm text-muted-foreground">
                      Monthly subscription for inventory sync, analytics, lead routing, and CRM integration. Starting at
                      $149/month.
                    </div>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold">Enterprise</div>
                    <div className="text-sm text-muted-foreground">
                      Custom solutions for multi-location businesses, franchises, and large organizations.
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-lg border border-primary/50 bg-primary/10 p-4">
                  <div className="mb-2 flex items-center gap-2">
                    <Zap className="h-5 w-5 text-primary" />
                    <span className="font-semibold text-primary">Early Mover Advantage</span>
                  </div>
                  <p className="text-sm leading-relaxed">
                    Businesses who join now get priority placement in AI answers, preferential pricing, and first access
                    to new features before the market floods.
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="mb-6 text-center md:text-left">
                  <h3 className="mb-2 text-xl font-bold">Let's Talk</h3>
                  <p className="text-sm text-muted-foreground">
                    Schedule a call to discuss your needs and get a custom quote.
                  </p>
                </div>

                <div className="space-y-3">
                  <Button size="lg" className="w-full cursor-pointer transition-all hover:scale-105" asChild>
                    <a href="#waitlist">
                      <Phone className="mr-2 h-5 w-5" />
                      Call Us Now
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full cursor-pointer bg-transparent transition-all hover:scale-105"
                    asChild
                  >
                    <a href="#waitlist">
                      <Calendar className="mr-2 h-5 w-5" />
                      Schedule a Demo
                    </a>
                  </Button>
                </div>

                <div className="mt-6 text-center text-sm text-muted-foreground">
                  <p>Or join the waitlist for early access updates</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
