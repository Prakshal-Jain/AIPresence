import { Card } from "@/components/ui/card"

export function Vision() {
  return (
    <section id="vision" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">Our Vision</h2>
            <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
              {"We're building the default presence layer for businesses in the AI economy."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-border/50 bg-card p-8 text-center">
              <div className="mb-4 text-5xl">🎯</div>
              <h3 className="mb-3 text-xl font-semibold">Be the Default</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Make being inside AI answers as essential as having a website on Google.
              </p>
            </Card>

            <Card className="border-border/50 bg-card p-8 text-center">
              <div className="mb-4 text-5xl">🚀</div>
              <h3 className="mb-3 text-xl font-semibold">Win the Market</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Capture market share before the ChatGPT SDK opens and competition floods in.
              </p>
            </Card>

            <Card className="border-border/50 bg-card p-8 text-center">
              <div className="mb-4 text-5xl">💡</div>
              <h3 className="mb-3 text-xl font-semibold">Platform Play</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Build across trillion-dollar service verticals with network effects.
              </p>
            </Card>
          </div>

          <div className="mt-16 rounded-2xl border border-border/50 bg-muted/30 p-8 md:p-12">
            <h3 className="mb-6 text-center text-2xl font-bold md:text-3xl">For Investors</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold">The Opportunity</h4>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>{"• Massive shift from search to AI-first discovery"}</li>
                  <li>{"• Trillion-dollar service verticals (auto, real estate, healthcare)"}</li>
                  <li>{"• Winner-takes-most market dynamics"}</li>
                  <li>{"• Platform with strong network effects"}</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold">Our Edge</h4>
                <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li>{"• First-mover with early distribution contracts"}</li>
                  <li>{"• Solving presence + lead capture, not just checkout"}</li>
                  <li>{"• Moving before ChatGPT SDK opens to all"}</li>
                  <li>{"• Proprietary ranking and routing engine"}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
