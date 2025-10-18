import { Card } from "@/components/ui/card"
import { Clock, TrendingUp, Users } from "lucide-react"

export function FomoCard() {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <Card className="relative overflow-hidden border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 p-8 md:p-12">
          <div className="relative z-10">
            <div className="mb-8 text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
                <Clock className="h-4 w-4" />
                Limited Time Window
              </div>
              <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                The Early Mover Advantage Is Real
              </h2>
              <p className="mx-auto max-w-3xl text-balance text-lg text-muted-foreground md:text-xl">
                ChatGPT SDK opens to all developers in late 2025. The businesses who establish presence now will have
                priority placement, better economics, and first access to millions of qualified buyers.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="rounded-lg border border-border/50 bg-background/50 p-6 backdrop-blur-sm">
                <TrendingUp className="mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Priority Ranking</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Early partners get preferential placement in AI answers. Once the floodgates open, competition
                  intensifies.
                </p>
              </div>

              <div className="rounded-lg border border-border/50 bg-background/50 p-6 backdrop-blur-sm">
                <Users className="mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Better Economics</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Lock in founding member pricing before market rates adjust. Early adopters save 40–60% long-term.
                </p>
              </div>

              <div className="rounded-lg border border-border/50 bg-background/50 p-6 backdrop-blur-sm">
                <Clock className="mb-3 h-8 w-8 text-primary" />
                <h3 className="mb-2 text-xl font-semibold">Data Advantage</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Build your AI presence history now. More data = better matching = higher conversion over time.
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
