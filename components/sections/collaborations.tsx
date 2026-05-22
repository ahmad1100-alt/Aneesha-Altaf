import { Camera, Clapperboard, Gem, Megaphone, MonitorPlay, Shirt } from 'lucide-react'

const collaborations = [
  { label: 'Television & Screen Roles', icon: Clapperboard },
  { label: 'Fashion Campaigns', icon: Shirt },
  { label: 'Beauty & Lifestyle Campaigns', icon: Gem },
  { label: 'Digital Collaborations', icon: MonitorPlay },
  { label: 'Editorial Shoots', icon: Camera },
  { label: 'Brand Appearances', icon: Megaphone },
]

export function CollaborationsSection() {
  return (
    <section id="collaborations" className="py-24 bg-background" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="font-sans text-sm font-medium text-secondary uppercase mb-4">Available For</p>
          <h2 className="font-serif text-5xl text-foreground mb-6">Brand Collaborations</h2>
          <div className="w-12 h-1 bg-primary" />
          <p className="font-sans text-lg text-muted-foreground mt-6">
            Built for casting teams, fashion labels, beauty campaigns, lifestyle brands, and digital partnerships.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" data-reveal-list>
          {collaborations.map((collab) => {
            const Icon = collab.icon

            return (
              <div key={collab.label} className="bg-card border border-border p-7 hover:border-primary editorial-lift">
                <Icon className="text-primary" size={30} />
                <h3 className="font-serif text-2xl text-foreground mt-6">{collab.label}</h3>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-[#171515] p-8 sm:p-10 text-white">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <p className="font-sans text-sm uppercase text-secondary">Collaboration Inquiry</p>
              <h3 className="font-serif text-3xl mt-2">Request availability, rates, and approved media kit assets.</h3>
            </div>
            <a href="#contact" className="inline-flex justify-center bg-secondary px-6 py-3 font-semibold text-[#171515] hover:bg-white transition">
              Send Collaboration Inquiry
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
