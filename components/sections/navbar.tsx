'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)

  const navLinks = [
    { href: '#screen-work', label: 'Screen Work' },
    { href: '#gallery', label: 'Gallery' },
    { href: '#ventures', label: 'Ventures' },
    { href: '#collaborations', label: 'Collaborations' },
    { href: '#contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 12)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 w-full bg-background/88 backdrop-blur-md border-b border-border z-50 transition-all duration-300 ${hasScrolled ? 'shadow-[0_12px_30px_rgb(23_21_21_/_0.08)]' : 'shadow-none'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="#" className="font-serif text-2xl font-bold text-primary hover:text-primary/80 transition" aria-label="Aneesha Altaf home">
            AA
          </Link>

          <div className="hidden lg:flex gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-sans text-sm font-medium text-foreground hover:text-primary transition"
              >
                {link.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition"
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div id="mobile-navigation" className="lg:hidden pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block font-sans text-sm font-medium text-foreground hover:text-primary transition py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
