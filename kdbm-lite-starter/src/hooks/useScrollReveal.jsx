import { useState, useEffect, useRef } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(true)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setRevealed(true)
      observer.unobserve(el)
    }
    return () => observer.disconnect()
  }, [threshold])

  return { ref, revealed }
}
