import { Navbar } from '@/components/sections/navbar'
import { HeroSection } from '@/components/sections/hero'
import { AboutSection } from '@/components/sections/about'
import { ScreenWorkSection } from '@/components/sections/screen-work'
import { VideoReelSection } from '@/components/sections/video-reel'
import { GallerySection } from '@/components/sections/gallery'
import { VenturesSection } from '@/components/sections/ventures'
import { CollaborationsSection } from '@/components/sections/collaborations'
import { MediaPressSection } from '@/components/sections/media-press'
import { ContactSection } from '@/components/sections/contact'
import { Footer } from '@/components/sections/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ScreenWorkSection />
        <VideoReelSection />
        <GallerySection />
        <VenturesSection />
        <CollaborationsSection />
        <MediaPressSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}
