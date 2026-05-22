import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { RevealObserver } from '@/components/reveal-observer'
import './globals.css'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Aneesha Altaf - Actor, Entrepreneur & Fashion Founder',
  description: 'Portfolio for Aneesha Altaf, presenting screen work, editorial fashion presence, founder-led ventures, collaborations, and booking contact.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aneesha Altaf - Actor, Entrepreneur & Fashion Founder',
    description: 'Screen work, fashion presence, ventures, and brand collaborations.',
    url: '/',
    siteName: 'Aneesha Altaf',
    images: [
      {
        url: '/aneesha-web/asset-05.jpg',
        width: 1100,
        height: 880,
        alt: 'Aneesha Altaf editorial portrait',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aneesha Altaf - Actor, Entrepreneur & Fashion Founder',
    description: 'Screen work, fashion presence, ventures, and brand collaborations.',
    images: ['/aneesha-web/asset-05.jpg'],
  },
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className="font-sans antialiased text-foreground">
        <RevealObserver />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
