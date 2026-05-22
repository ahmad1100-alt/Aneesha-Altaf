import Image from 'next/image'

const identityTags = ['Actor', 'Entrepreneur', 'Fashion Founder', 'Digital Creator']

export function AboutSection() {
  return (
    <section className="py-24 bg-card" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-16 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="relative min-h-[420px] overflow-hidden rounded-[8px] bg-muted editorial-lift">
              <Image src="/aneesha-web/asset-13.jpg" alt="Aneesha Altaf black and white portrait" fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
            </div>
            <div className="relative mt-12 min-h-[420px] overflow-hidden rounded-[8px] bg-muted editorial-lift">
              <Image src="/aneesha-web/asset-14.jpg" alt="Aneesha Altaf traditional editorial look" fill sizes="(min-width: 1024px) 28vw, 50vw" className="object-cover" />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <p className="font-sans text-sm font-medium text-secondary uppercase mb-4">About Aneesha</p>
              <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
                A public profile across television, fashion, lifestyle, and founder-led work.
              </h2>
              <div className="w-12 h-1 bg-primary" />
            </div>

            <div className="space-y-6">
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                Aneesha Altaf is a Pakistani actress and entrepreneur with a public presence across television, fashion, lifestyle, and digital content. Alongside her acting work, she is associated with founder-led fashion ventures including 4th Dimension Clothing and Minaash Official.
              </p>
              <p className="font-sans text-lg text-muted-foreground leading-relaxed">
                This concept positions her as a screen artist, fashion and lifestyle personality, brand collaborator, and founder. Final publication should use approved biography, imagery, project credits, and official booking details.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {identityTags.map((tag) => (
                <div key={tag} className="border border-border bg-background px-4 py-4 text-center text-sm font-semibold text-foreground">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
