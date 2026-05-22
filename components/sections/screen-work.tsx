const screenWorks = [
  {
    title: 'Khudsar',
    role: 'Hareem',
    detail: 'Television Drama',
  },
  {
    title: 'Pal Do Pal',
    role: 'Sara',
    detail: 'ARY Digital',
  },
  {
    title: 'Pehli Si Muhabbat',
    role: 'Early Screen Work',
    detail: 'Television Drama',
  },
]

export function ScreenWorkSection() {
  return (
    <section id="screen-work" className="py-24 bg-background" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="font-sans text-sm font-medium text-secondary uppercase mb-4">Selected Screen Work</p>
          <h2 className="font-serif text-5xl text-foreground mb-6">Television Presence</h2>
          <div className="w-12 h-1 bg-primary" />
          <p className="font-sans text-lg text-muted-foreground mt-6">
            Selected television work and on-screen appearances.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5" data-reveal-list>
          {screenWorks.map((work) => (
            <article key={work.title} className="group bg-card border border-border p-7 hover:border-primary editorial-lift">
              <h3 className="font-serif text-3xl text-foreground">{work.title}</h3>
              <p className="font-sans text-primary font-semibold mt-3">{work.role}</p>
              <p className="font-sans text-muted-foreground leading-relaxed mt-5">{work.detail}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
