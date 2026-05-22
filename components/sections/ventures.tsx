import { Shirt, Sparkles } from 'lucide-react'

const ventures = [
  {
    name: '4th Dimension Clothing',
    description: 'Fashion venture associated with Aneesha. Brand descriptions, shop links, and campaign language should be confirmed before launch.',
    category: 'Fashion Venture',
    icon: Shirt,
  },
  {
    name: 'Minaash Official',
    description: 'Founder-led lifestyle and fashion brand presence. Add approved logo, product story, and commerce links after confirmation.',
    category: 'Lifestyle / Fashion',
    icon: Sparkles,
  },
]

export function VenturesSection() {
  return (
    <section id="ventures" className="py-24 bg-card" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12">
          <div>
            <p className="font-sans text-sm font-medium text-secondary uppercase mb-4">Founder-Led Ventures</p>
            <h2 className="font-serif text-5xl text-foreground mb-6">Fashion and lifestyle, shaped by a founder's eye.</h2>
            <div className="w-12 h-1 bg-primary" />
            <p className="font-sans text-lg text-muted-foreground mt-6">
              This section gives the portfolio business value beyond screen credits while leaving room for approved brand details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-reveal-list>
            {ventures.map((venture) => {
              const Icon = venture.icon

              return (
                <article key={venture.name} className="border border-border bg-background p-8 hover:border-primary editorial-lift">
                  <div className="mb-8 inline-flex h-14 w-14 items-center justify-center bg-primary text-primary-foreground">
                    <Icon size={28} />
                  </div>
                  <p className="font-sans text-xs font-semibold uppercase text-secondary">{venture.category}</p>
                  <h3 className="font-serif text-3xl text-foreground mt-3">{venture.name}</h3>
                  <p className="font-sans text-muted-foreground leading-relaxed mt-5">{venture.description}</p>
                  <p className="mt-8 border-t border-border pt-5 text-sm font-semibold text-primary">
                    Official links and logos pending approval.
                  </p>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
