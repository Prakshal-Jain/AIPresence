export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-muted/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <svg className="h-5 w-5 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-semibold">AIPresence</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              The default presence layer for businesses in the AI economy.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#how-it-works" className="transition-colors hover:text-foreground">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#benefits" className="transition-colors hover:text-foreground">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#pricing" className="transition-colors hover:text-foreground">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#vision" className="transition-colors hover:text-foreground">
                  Vision
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© 2025 AIPresence. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
