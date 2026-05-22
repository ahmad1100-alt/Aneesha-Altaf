import { FileText, Images, Library, UserRound } from 'lucide-react'

const mediaItems = [
  { title: 'Professional Bio', icon: UserRound },
  { title: 'Headshots', icon: Images },
  { title: 'Screen Credits', icon: FileText },
  { title: 'Brand Collaboration Profile', icon: Library },
]

export function MediaPressSection() {
  return (
    <section id="media" className="py-24 bg-card" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="font-sans text-sm font-medium text-secondary uppercase mb-4">Media & Press</p>
          <h2 className="font-serif text-5xl text-foreground mb-6">Professional Materials</h2>
          <div className="w-12 h-1 bg-primary" />
          <p className="font-sans text-lg text-muted-foreground mt-6">
            Bio, imagery, screen credits, and brand collaboration materials for casting, editorial, and partnership inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-reveal-list>
          {mediaItems.map((item) => {
            const Icon = item.icon

            return (
              <article key={item.title} className="border border-border bg-background p-7 editorial-lift">
                <Icon className="text-primary" size={28} />
                <h3 className="font-serif text-2xl text-foreground mt-6">{item.title}</h3>
                <p className="font-sans text-sm font-semibold text-primary mt-5">Available on Request</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
