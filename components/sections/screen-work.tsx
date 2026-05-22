import { BadgeCheck, Clock3 } from 'lucide-react'

const screenWorks = [
  {
    title: 'Khudsar',
    role: 'Hareem',
    detail: 'Television drama',
    status: 'Confirmed public role',
    confirmed: true,
  },
  {
    title: 'Pal Do Pal',
    role: 'Sarah',
    detail: 'ARY Digital',
    status: 'Confirmed public role',
    confirmed: true,
  },
]

export function ScreenWorkSection() {
  return (
    <section id="screen-work" className="py-24 bg-background" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="font-sans text-sm font-medium text-secondary uppercase mb-4">Featured Screen Work</p>
          <h2 className="font-serif text-5xl text-foreground mb-6">Television Presence</h2>
          <div className="w-12 h-1 bg-primary" />
          <p className="font-sans text-lg text-muted-foreground mt-6">
            Confirmed public roles are prioritized. Additional publicly mentioned projects can be added after Aneesha confirms the final role and platform details.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5" data-reveal-list>
          {screenWorks.map((work) => (
            <article key={work.title} className="group bg-card border border-border p-7 hover:border-primary editorial-lift">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-3xl text-foreground">{work.title}</h3>
                  <p className="font-sans text-primary font-semibold mt-3">Role: {work.role}</p>
                </div>
                <div className={`inline-flex items-center gap-2 px-3 py-2 text-xs font-semibold ${work.confirmed ? 'bg-primary/10 text-primary' : 'bg-muted text-muted-foreground'}`}>
                  {work.confirmed ? <BadgeCheck size={15} /> : <Clock3 size={15} />}
                  {work.confirmed ? 'Confirmed' : 'To Confirm'}
                </div>
              </div>
              <p className="font-sans text-muted-foreground leading-relaxed mt-5">{work.detail}</p>
              <p className="font-sans text-sm text-muted-foreground mt-6 pt-5 border-t border-border">{work.status}</p>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
