import Link from 'next/link'
import { ArrowUp, Instagram } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Screen Work', href: '#screen-work' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Ventures', href: '#ventures' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <footer className="bg-[#171515] text-card py-16" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr_0.8fr] gap-12 mb-12">
          <div className="space-y-4">
            <Link href="#" className="font-serif text-3xl font-bold text-secondary">Aneesha Altaf</Link>
            <p className="font-sans text-card/80 leading-relaxed max-w-md">
              Actor, entrepreneur, fashion founder, and lifestyle collaborator. Portfolio ready for approved launch details and official contact information.
            </p>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase text-secondary mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="font-sans text-card/80 hover:text-secondary transition text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-sm font-semibold uppercase text-secondary mb-6">Follow</h4>
            <a href="https://www.instagram.com/aneeshaaly_/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-card/80 hover:text-secondary transition text-sm">
              <Instagram size={18} />
              @aneeshaaly_
            </a>
          </div>
        </div>

        <div className="border-t border-card/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-sans text-sm text-card/70">
              Copyright {currentYear} Aneesha Altaf. Portfolio concept.
            </p>
            <a
              href="#"
              className="flex items-center gap-2 font-sans text-sm text-secondary hover:text-card transition"
            >
              Back to Top
              <ArrowUp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
