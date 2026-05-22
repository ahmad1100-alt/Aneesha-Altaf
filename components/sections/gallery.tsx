'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'

const filters = ['All', 'Screen', 'Editorial', 'Traditional', 'Fashion', 'Lifestyle', 'BTS']
const INITIAL_VISIBLE_COUNT = 20
const LOAD_MORE_COUNT = 16

const galleryItems = [
  { id: 1, title: 'Red Floral Editorial', collection: 'Editorial', image: '/aneesha-web/asset-06.jpg', className: 'md:row-span-2' },
  { id: 2, title: 'Fashion Portrait', collection: 'Fashion', image: '/aneesha-web/asset-07.jpg', className: '' },
  { id: 3, title: 'Traditional Look', collection: 'Traditional', image: '/aneesha-web/asset-11.jpg', className: '' },
  { id: 4, title: 'Location Lifestyle', collection: 'Lifestyle', image: '/aneesha-web/asset-10.jpg', className: 'md:col-span-2' },
  { id: 5, title: 'Screen Adjacent Moment', collection: 'Screen', image: '/aneesha-web/asset-12.jpg', className: '' },
  { id: 6, title: 'BTS Moment', collection: 'BTS', image: '/aneesha-web/asset-16.jpg', className: '' },
  { id: 7, title: 'Classic Portrait', collection: 'Editorial', image: '/aneesha-web/asset-13.jpg', className: '' },
  { id: 8, title: 'Outdoor Editorial', collection: 'Lifestyle', image: '/aneesha-web/asset-19.jpg', className: '' },
  { id: 9, title: 'Blue Traditional Look', collection: 'Traditional', image: '/aneesha-web/asset-20.jpg', className: '' },
  { id: 10, title: 'Resort Lifestyle', collection: 'Lifestyle', image: '/aneesha-web/asset-21.jpg', className: '' },
  { id: 11, title: 'Garden Moment', collection: 'Editorial', image: '/aneesha-web/asset-22.jpg', className: '' },
  { id: 12, title: 'Monochrome Editorial', collection: 'Editorial', image: '/aneesha-web/asset-24.jpg', className: '' },
  { id: 13, title: 'Coastal Lifestyle', collection: 'Lifestyle', image: '/aneesha-web/asset-26.jpg', className: '' },
  { id: 14, title: 'Bridal Traditional Detail', collection: 'Traditional', image: '/aneesha-web/asset-27.jpg', className: 'md:row-span-2' },
  { id: 15, title: 'Casual Lifestyle', collection: 'Lifestyle', image: '/aneesha-web/asset-28.jpg', className: '' },
  { id: 16, title: 'Evening BTS', collection: 'BTS', image: '/aneesha-web/asset-29.jpg', className: '' },
  { id: 17, title: 'Fashion Dinner Portrait', collection: 'Fashion', image: '/aneesha-web/asset-30.jpg', className: '' },
  { id: 18, title: 'Modern Lifestyle', collection: 'Lifestyle', image: '/aneesha-web/asset-31.jpg', className: '' },
  { id: 19, title: 'Soft Editorial', collection: 'Editorial', image: '/aneesha-web/asset-32.jpg', className: '' },
  { id: 20, title: 'Beach Editorial', collection: 'Lifestyle', image: '/aneesha-web/asset-33.jpg', className: '' },
  { id: 21, title: 'Resort Portrait', collection: 'Lifestyle', image: '/aneesha-web/asset-34.jpg', className: '' },
  { id: 22, title: 'Cafe Fashion Moment', collection: 'Fashion', image: '/aneesha-web/asset-35.jpg', className: '' },
  { id: 23, title: 'Stairway Editorial', collection: 'Editorial', image: '/aneesha-web/asset-39.jpg', className: 'md:row-span-2' },
  { id: 24, title: 'Blue Evening Portrait', collection: 'Fashion', image: '/aneesha-web/asset-40.jpg', className: '' },
  { id: 25, title: 'Sunlit Lifestyle', collection: 'Lifestyle', image: '/aneesha-web/asset-43.jpg', className: '' },
  { id: 26, title: 'Red Studio Portrait', collection: 'Editorial', image: '/aneesha-web/asset-45.jpg', className: '' },
  { id: 27, title: 'Statement Traditional', collection: 'Traditional', image: '/aneesha-web/asset-46.jpg', className: '' },
  { id: 28, title: 'Candid BTS', collection: 'BTS', image: '/aneesha-web/asset-47.jpg', className: '' },
  { id: 29, title: 'Architectural Editorial', collection: 'Editorial', image: '/aneesha-web/asset-50.jpg', className: '' },
  { id: 30, title: 'Travel Portrait', collection: 'Lifestyle', image: '/aneesha-web/asset-52.jpg', className: '' },
  { id: 31, title: 'Traditional Set Look', collection: 'Traditional', image: '/aneesha-web/asset-53.jpg', className: '' },
  { id: 32, title: 'Evening Editorial', collection: 'Editorial', image: '/aneesha-web/asset-56.jpg', className: '' },
  { id: 33, title: 'White Dress Moment', collection: 'Fashion', image: '/aneesha-web/asset-57.jpg', className: '' },
  { id: 34, title: 'Coastal Screen Mood', collection: 'Screen', image: '/aneesha-web/asset-58.jpg', className: 'md:col-span-2' },
  { id: 35, title: 'Shoreline Editorial', collection: 'Lifestyle', image: '/aneesha-web/asset-59.jpg', className: '' },
  { id: 36, title: 'Cinematic Hallway', collection: 'Editorial', image: '/aneesha-web/asset-61.jpg', className: '' },
  { id: 37, title: 'Fashion Corridor Portrait', collection: 'Fashion', image: '/aneesha-web/asset-62.jpg', className: '' },
  { id: 38, title: 'Sand Detail', collection: 'Lifestyle', image: '/aneesha-web/asset-36.jpg', className: '' },
  { id: 39, title: 'Cafe Celebration', collection: 'Lifestyle', image: '/aneesha-web/asset-37.jpg', className: '' },
  { id: 40, title: 'Beach Signage', collection: 'Lifestyle', image: '/aneesha-web/asset-38.jpg', className: '' },
  { id: 41, title: 'Train Booth Portrait', collection: 'Lifestyle', image: '/aneesha-web/asset-41.jpg', className: '' },
  { id: 42, title: 'Candid Booth Moment', collection: 'Lifestyle', image: '/aneesha-web/asset-42.jpg', className: '' },
  { id: 43, title: 'Blue Dinner Detail', collection: 'Fashion', image: '/aneesha-web/asset-44.jpg', className: '' },
  { id: 44, title: 'Car Window Portrait', collection: 'Editorial', image: '/aneesha-web/asset-48.jpg', className: '' },
  { id: 45, title: 'Green Sun Portrait', collection: 'Lifestyle', image: '/aneesha-web/asset-49.jpg', className: '' },
  { id: 46, title: 'Motion BTS', collection: 'BTS', image: '/aneesha-web/asset-51.jpg', className: '' },
  { id: 47, title: 'Car Seat Portrait', collection: 'Editorial', image: '/aneesha-web/asset-54.jpg', className: '' },
  { id: 48, title: 'Beach Location Detail', collection: 'Lifestyle', image: '/aneesha-web/asset-55.jpg', className: '' },
  { id: 49, title: 'Traditional Mirror Look', collection: 'Traditional', image: '/aneesha-web/asset-60.jpg', className: '' },
  { id: 50, title: 'Dusk Shore Portrait', collection: 'Lifestyle', image: '/aneesha-web/asset-63.jpg', className: '' },
  { id: 51, title: 'Casual Table Portrait', collection: 'Lifestyle', image: '/aneesha-web/asset-64.jpg', className: '' },
  { id: 52, title: 'Yellow Fashion Look', collection: 'Fashion', image: '/aneesha-web/asset-66.jpg', className: '' },
  { id: 53, title: 'Evening Beach Portrait', collection: 'Lifestyle', image: '/aneesha-web/asset-67.jpg', className: '' },
  { id: 54, title: 'White Evening Portrait', collection: 'Fashion', image: '/aneesha-web/asset-68.jpg', className: '' },
  { id: 55, title: 'Wall Art Lifestyle', collection: 'Lifestyle', image: '/aneesha-web/asset-70.jpg', className: '' },
  { id: 56, title: 'Warm Car Portrait', collection: 'Editorial', image: '/aneesha-web/asset-71.jpg', className: '' },
  { id: 57, title: 'Red Evening Look', collection: 'Fashion', image: '/aneesha-web/asset-72.jpg', className: '' },
  { id: 58, title: 'Yellow Set Look', collection: 'Fashion', image: '/aneesha-web/asset-73.jpg', className: '' },
  { id: 59, title: 'Night Shore BTS', collection: 'BTS', image: '/aneesha-web/asset-74.jpg', className: '' },
  { id: 60, title: 'City Lifestyle Look', collection: 'Lifestyle', image: '/aneesha-web/asset-75.jpg', className: '' },
  { id: 61, title: 'Layered Casual Portrait', collection: 'Fashion', image: '/aneesha-web/asset-78.jpg', className: '' },
  { id: 62, title: 'Mirror Fashion Look', collection: 'Fashion', image: '/aneesha-web/asset-79.jpg', className: '' },
  { id: 63, title: 'Soft Beauty Portrait', collection: 'Editorial', image: '/aneesha-web/asset-80.jpg', className: '' },
  { id: 64, title: 'Black Editorial Portrait', collection: 'Editorial', image: '/aneesha-web/asset-81.jpg', className: '' },
  { id: 65, title: 'Black Fashion Portrait', collection: 'Fashion', image: '/aneesha-web/asset-82.jpg', className: '' },
  { id: 66, title: 'Travel Fashion Look', collection: 'Fashion', image: '/aneesha-web/asset-83.jpg', className: '' },
  { id: 67, title: 'Evening Black Portrait', collection: 'Editorial', image: '/aneesha-web/asset-84.jpg', className: '' },
  { id: 68, title: 'Black Style Closeup', collection: 'Fashion', image: '/aneesha-web/asset-85.jpg', className: '' },
]

export function GallerySection() {
  const [selectedFilter, setSelectedFilter] = useState('All')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT)
  const [isMounted, setIsMounted] = useState(false)
  const closeButtonRef = useRef<HTMLButtonElement | null>(null)
  const lastFocusedElement = useRef<HTMLElement | null>(null)

  const filteredItems = selectedFilter === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.collection === selectedFilter)
  const visibleItems = filteredItems.slice(0, visibleCount)
  const hasMoreItems = visibleCount < filteredItems.length

  const selected = galleryItems.find((item) => item.id === selectedImage)

  const closeModal = () => {
    setSelectedImage(null)
    window.requestAnimationFrame(() => lastFocusedElement.current?.focus())
  }

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT)
  }, [selectedFilter])

  useEffect(() => {
    if (!selected) return

    lastFocusedElement.current = document.activeElement as HTMLElement
    closeButtonRef.current?.focus()
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        closeModal()
        return
      }

      if (event.key !== 'Tab') return

      const focusable = Array.from(
        document.querySelectorAll<HTMLElement>('[data-gallery-modal] button, [data-gallery-modal] a')
      ).filter((element) => !element.hasAttribute('disabled'))

      if (!focusable.length) return

      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [selected])

  return (
    <section id="gallery" className="py-24 bg-background" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <p className="font-sans text-sm font-medium text-secondary uppercase mb-4">Editorial Gallery</p>
          <h2 className="font-serif text-5xl text-foreground mb-6">Screen, Fashion, and Lifestyle Imagery</h2>
          <div className="w-12 h-1 bg-primary" />
        </div>

        <div className="flex flex-wrap gap-2 mb-10" aria-label="Gallery filters">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setSelectedFilter(filter)}
              aria-pressed={selectedFilter === filter}
              className={`px-4 py-2 border text-sm font-semibold transition ${selectedFilter === filter ? 'border-primary bg-primary text-primary-foreground' : 'border-border bg-card text-foreground hover:border-primary hover:text-primary'}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {visibleItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4" data-reveal-list>
            {visibleItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setSelectedImage(item.id)}
                className={`group relative overflow-hidden rounded-[8px] bg-muted text-left editorial-lift ${item.className}`}
                aria-label={`Open ${item.title}`}
              >
                <Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 25vw, 100vw" className="object-cover transition duration-700 group-hover:scale-[1.05] group-hover:brightness-105" />
              </button>
            ))}
          </div>
        ) : (
          <div className="border border-dashed border-border bg-card p-8 text-muted-foreground">
            Approved {selectedFilter.toLowerCase()} imagery can be added here.
          </div>
        )}

        {hasMoreItems && (
          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setVisibleCount((count) => Math.min(count + LOAD_MORE_COUNT, filteredItems.length))}
              className="border border-primary px-8 py-3 font-sans font-semibold text-primary transition hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
            >
              Load More
            </button>
          </div>
        )}

        {isMounted && selected && createPortal(
          <div
            className="fixed inset-0 bg-[#171515]/90 z-50 flex items-center justify-center p-4 sm:p-6"
            role="dialog"
            aria-modal="true"
            aria-label={selected.title}
            data-gallery-modal
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeModal()
            }}
          >
            <div className="relative flex h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center">
              <button
                ref={closeButtonRef}
                type="button"
                onClick={closeModal}
                className="absolute right-0 top-0 z-10 inline-flex h-11 w-11 items-center justify-center bg-[#171515]/70 text-white backdrop-blur hover:text-secondary transition"
                aria-label="Close gallery image"
              >
                <X size={30} />
              </button>
              <div className="relative h-full w-full overflow-hidden rounded-[8px]">
                <Image src={selected.image} alt={selected.title} fill sizes="96vw" className="object-contain" />
              </div>
            </div>
          </div>,
          document.body
        )}
      </div>
    </section>
  )
}
