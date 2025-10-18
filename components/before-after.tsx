import { Card } from "@/components/ui/card"
import { X, Check, ChevronDown } from "lucide-react"

export function BeforeAfter() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold tracking-tight md:text-5xl">
            We Remove 3 Major Drop-Off Steps
          </h2>
          <p className="mx-auto max-w-2xl text-balance text-lg text-muted-foreground">
            Capture intent at the source. No redirects, no friction, no lost leads.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="border-destructive/50 bg-destructive/5 p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-destructive/20">
                <X className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-2xl font-bold">Today: The Broken Funnel</h3>
            </div>

            <div className="space-y-1">
              <div className="rounded-lg border border-border bg-background p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Buyer researches in AI</div>
                    <div className="text-sm text-muted-foreground">
                      {"Asks ChatGPT: 'Luxury sedan around $80K in Palo Alto'"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>

              <div className="rounded-lg border border-border bg-background p-4 opacity-90">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Jumps to Google</div>
                    <div className="text-sm text-muted-foreground">Leaves AI, starts new search</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>

              <div className="rounded-lg border border-border bg-background p-4 opacity-80">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Maybe clicks (#1 CTR: 27.6%)</div>
                    <div className="text-sm text-muted-foreground">73% never click at all</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>

              <div className="rounded-lg border border-border bg-background p-4 opacity-70">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-bold">
                    4
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Slow site loads</div>
                    <div className="text-sm text-muted-foreground">Filters, searches, compares</div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              </div>

              <div className="rounded-lg border border-destructive bg-destructive/10 p-4 opacity-60">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-destructive/20 text-sm font-bold text-destructive">
                    5
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-destructive">1.6–2.9% convert</div>
                    <div className="text-sm text-muted-foreground">97%+ of intent is lost</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="border-green-500/50 bg-green-500/5 p-8">
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                <Check className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold">With Us: Direct Capture</h3>
            </div>

            <div className="space-y-1">
              <div className="rounded-lg border border-green-500/30 bg-background p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-sm font-bold text-green-600">
                    1
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold">Buyer asks in AI</div>
                    <div className="text-sm text-muted-foreground">
                      {"Same question: 'Luxury sedan around $80K in Palo Alto'"}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-center py-1">
                <ChevronDown className="h-5 w-5 text-green-600" />
              </div>

              <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-5">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-green-500/30 text-sm font-bold text-green-600">
                    2
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-green-600">Instant match + lead capture</div>
                    <div className="text-sm text-muted-foreground">Sees your inventory in-chat, taps to connect</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-lg border-2 border-green-500 bg-green-500/10 p-5">
                <div className="mb-3 flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-600" />
                  <div className="font-semibold text-green-600">Result:</div>
                </div>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>No Google redirect</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>No website friction</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span>No filter fatigue</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-600" />
                    <span className="font-semibold">Intent captured at the source</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg font-semibold text-green-600">
            3 drop-off steps eliminated. Qualified leads delivered at peak buying intent.
          </p>
        </div>
      </div>
    </section>
  )
}
