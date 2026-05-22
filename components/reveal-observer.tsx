'use client'

import { useEffect } from 'react'

export function RevealObserver() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    document.documentElement.classList.add('reveal-ready')

    const revealElements = new Set<Element>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12 }
    )

    const observeNewElements = () => {
      document.querySelectorAll('[data-reveal]').forEach((element) => {
        if (revealElements.has(element)) return
        revealElements.add(element)
        observer.observe(element)
      })
    }

    observeNewElements()

    const mutationObserver = new MutationObserver(observeNewElements)
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      mutationObserver.disconnect()
      document.documentElement.classList.remove('reveal-ready')
    }
  }, [])

  return null
}
