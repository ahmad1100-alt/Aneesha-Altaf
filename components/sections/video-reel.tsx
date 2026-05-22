import Image from 'next/image'
import { Instagram, Mail, Play } from 'lucide-react'

const reels = [
  { title: 'Featured Performance', image: '/aneesha-web/asset-16.jpg' },
  { title: 'Behind the Scenes', image: '/aneesha-web/asset-15.jpg' },
  { title: 'Lifestyle Reel', image: '/aneesha-web/asset-10.jpg' },
]

export function VideoReelSection() {
  return (
    <section className="py-24 bg-card" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="font-sans text-sm font-medium text-secondary uppercase mb-4">On Screen</p>
          <h2 className="font-serif text-5xl text-foreground mb-6">Featured Performance & Behind the Scenes</h2>
          <div className="w-12 h-1 bg-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_0.65fr] gap-8">
          <a href="https://www.instagram.com/aneeshaaly_/" target="_blank" rel="noopener noreferrer" className="relative min-h-[500px] overflow-hidden rounded-[8px] group bg-muted editorial-lift">
            <Image src="/aneesha-web/asset-11.jpg" alt="Aneesha Altaf featured screen and editorial reel placeholder" fill sizes="(min-width: 1024px) 62vw, 100vw" className="object-cover transition duration-500 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#171515]/80 via-[#171515]/20 to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl transition group-hover:scale-105">
                <Play size={34} fill="currentColor" />
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <p className="text-sm uppercase text-white/70">Main Featured Reel</p>
              <h3 className="font-serif text-4xl mt-2">Performance, Styling, and Set Moments</h3>
            </div>
          </a>

          <div className="flex flex-col justify-between gap-6">
            <div className="bg-background border border-border p-7">
              <h3 className="font-serif text-3xl text-foreground">Reel Library</h3>
              <p className="font-sans text-muted-foreground leading-relaxed mt-4">
                Add Aneesha's approved Instagram reels or YouTube showreel here. The current concept routes viewers to her public Instagram presence.
              </p>
              <div className="mt-8 grid gap-3">
                <a href="https://www.instagram.com/aneeshaaly_/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-primary-foreground hover:bg-primary/90 transition">
                  <Instagram size={18} />
                  View Instagram Reels
                </a>
                <a href="#contact" className="inline-flex items-center justify-center gap-2 border border-primary px-5 py-3 text-primary hover:bg-primary/10 transition">
                  <Mail size={18} />
                  Casting / Booking CTA
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {reels.map((reel) => (
                <div key={reel.title} className="relative aspect-[3/4] overflow-hidden rounded-[8px] bg-muted">
                  <Image src={reel.image} alt={reel.title} fill sizes="12vw" className="object-cover" />
                  <div className="absolute inset-0 bg-[#171515]/20" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
