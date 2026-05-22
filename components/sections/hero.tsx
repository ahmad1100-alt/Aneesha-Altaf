import Image from 'next/image'
import { BriefcaseBusiness, Clapperboard, Mail, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="min-h-screen pt-20 flex items-center bg-background" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 lg:gap-16 items-center py-10 lg:py-16">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 border border-border bg-card px-4 py-2 text-xs font-semibold uppercase text-muted-foreground">
              <Sparkles size={14} className="text-primary" />
              Pakistan &middot; Acting &middot; Fashion &middot; Lifestyle &middot; Entrepreneurship
            </div>

            <div className="space-y-5">
              <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl leading-none text-foreground">
                Aneesha Altaf
              </h1>
              <p className="font-sans text-xl sm:text-2xl text-primary">
                Actor &bull; Entrepreneur &bull; Fashion Founder
              </p>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed max-w-xl">
                A screen and fashion personality bringing together television performance, editorial style, and founder-led creative ventures.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <a href="#screen-work" className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium">
                <Clapperboard size={18} />
                View Screen Work
              </a>
              <a href="#collaborations" className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-primary text-primary hover:bg-primary/10 transition font-medium">
                <BriefcaseBusiness size={18} />
                Brand Collaborations
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition font-medium">
                <Mail size={18} />
                Booking Contact
              </a>
            </div>
          </div>

          <div className="relative min-h-[520px] overflow-hidden rounded-[8px] bg-muted">
            <Image
              src="/aneesha-web/asset-05.jpg"
              alt="Aneesha Altaf editorial portrait"
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover hero-portrait-motion"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171515]/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 text-white">
              <p className="text-sm uppercase text-white/75">Portfolio Concept</p>
              <p className="mt-2 max-w-sm text-2xl font-serif leading-tight">
                Screen artist, founder, and fashion-lifestyle collaborator.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
