import { Button } from "@/components/ui/button"
import Image from "next/image"
import { getAssetPath } from "@/lib/assets"

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center">
            <Image 
              src={getAssetPath("/logo.svg")}
              alt="AIPresence Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
          </div>
          <span className="text-lg font-semibold">AIPresence</span>
        </div>
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#how-it-works" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            How It Works
          </a>
          <a href="#benefits" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Benefits
          </a>
          <a href="#pricing" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Pricing
          </a>
          <a href="#vision" className="text-sm text-muted-foreground transition-colors hover:text-foreground">
            Vision
          </a>
        </nav>
        <Button size="sm" asChild>
          <a href="#waitlist">Join Waitlist</a>
        </Button>
      </div>
    </header>
  )
}
