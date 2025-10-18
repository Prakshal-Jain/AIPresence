import { Hero } from "@/components/hero"
import { FomoCard } from "@/components/fomo-card"
import { HowItWorks } from "@/components/how-it-works"
import { BeforeAfter } from "@/components/before-after"
import { Benefits } from "@/components/benefits"
import { ContactCTA } from "@/components/contact-cta"
import { WhyNow } from "@/components/why-now"
import { Vision } from "@/components/vision"
import { CTA } from "@/components/cta"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FomoCard />
        <HowItWorks />
        <BeforeAfter />
        <Benefits />
        <ContactCTA />
        <WhyNow />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
