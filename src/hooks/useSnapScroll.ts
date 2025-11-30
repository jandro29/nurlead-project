import { useEffect, useRef } from 'react'

type Options = {
  throttleMs?: number
  sectionSelector?: string
  enableKeyboard?: boolean
}

export function useSnapScroll(
  containerRef: React.RefObject<HTMLElement | null>,
  options: Options = {},
) {
  const { sectionSelector = '.snap-section', enableKeyboard = true } = options
  const locked = useRef(false)
  const targetTop = useRef<number | null>(null)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const getSections = () => Array.from(el.querySelectorAll(sectionSelector)) as HTMLElement[]
    const sections = getSections()
    if (!sections.length) return

    const currentIndex = () => {
      const scrollTop = el.scrollTop
      let bestIdx = 0
      let bestDist = Number.POSITIVE_INFINITY
      for (let i = 0; i < sections.length; i++) {
        const sectionTop = sections[i].offsetTop - el.offsetTop
        const dist = Math.abs(sectionTop - scrollTop)
        if (dist < bestDist) { bestDist = dist; bestIdx = i }
      }
      return bestIdx
    }

    const scrollToIndex = (idx: number) => {
      const clamped = Math.max(0, Math.min(sections.length - 1, idx))
      const target = sections[clamped].offsetTop - el.offsetTop
      locked.current = true
      targetTop.current = target
      el.style.scrollSnapType = 'none'
      el.scrollTo({ top: target, behavior: 'smooth' })
    }

    const onWheel = (e: WheelEvent) => {
      if (locked.current) {
        e.preventDefault()
        return
      }
      const dy = e.deltaY
      const idx = currentIndex()
      if (dy > 0) scrollToIndex(idx + 1)
      else if (dy < 0) scrollToIndex(idx - 1)
      e.preventDefault()
    }

    const onKey = (e: KeyboardEvent) => {
      if (!enableKeyboard) return
      if (locked.current) {
        e.preventDefault()
        return
      }
      const idx = currentIndex()
      if (['ArrowDown', 'PageDown', ' '].includes(e.key)) { scrollToIndex(idx + 1); e.preventDefault() }
      if (['ArrowUp', 'PageUp'].includes(e.key)) { scrollToIndex(idx - 1); e.preventDefault() }
      if (e.key === 'Home') { scrollToIndex(0); e.preventDefault() }
      if (e.key === 'End') { scrollToIndex(sections.length - 1); e.preventDefault() }
    }

    const onScroll = () => {
      if (!locked.current) return
      if (targetTop.current == null) return
      const dist = Math.abs(el.scrollTop - targetTop.current)
      if (dist <= 2) {
        locked.current = false
        targetTop.current = null
        el.style.scrollSnapType = 'y mandatory'
      }
    }

    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('scroll', onScroll, { passive: true })
    el.addEventListener('keydown', onKey)
    // ensure container can receive keyboard focus
    if (enableKeyboard) {
      if (el.tabIndex < 0) {
        el.tabIndex = 0
      }
      el.focus()
    }
    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('scroll', onScroll)
      el.removeEventListener('keydown', onKey)
    }
  }, [containerRef, sectionSelector, enableKeyboard])
}

