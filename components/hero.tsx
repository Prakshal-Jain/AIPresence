import { Button } from "@/components/ui/button"
import { ArrowRight, Clock } from "lucide-react"
import Image from "next/image"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 md:pt-40 pb-20 md:pb-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/50 bg-primary/10 px-4 py-1.5 text-sm">
            <Clock className="h-4 w-4 text-primary" />
            <span className="font-medium">{"Limited spots available"}</span>
          </div>

          <h1 className="mb-6 text-balance text-5xl font-bold tracking-tight md:text-7xl">
            Show up where your customers already are
          </h1>

          <p className="mb-8 text-balance text-xl text-muted-foreground md:text-2xl">
            {"No SEO. No ads. Just leads. Be inside AI conversations before your competitors even know this exists."}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="group cursor-pointer transition-all hover:scale-105" asChild>
              <a href="#waitlist">
                Join the Early Access Waitlist
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="cursor-pointer transition-all hover:scale-105 bg-transparent"
              asChild
            >
              <a href="https://youtu.be/ZRHyxJGyz64" target="_blank" rel="noopener noreferrer">
                Watch Demo
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>800M+ weekly ChatGPT users</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary" />
              <span>60% of searches end without a click</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-medium">Early movers get priority placement</span>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card/50 p-2 shadow-2xl backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            <div className="relative overflow-hidden rounded-xl">
              <Image
                src="/images/design-mode/image.png"
                alt="ChatGPT showing car dealership inventory directly in conversation"
                width={1200}
                height={800}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            Your inventory surfaces natively when customers express buying intent — no redirects, no friction.
          </p>
        </div>
      </div>
    </section>
  )
}
