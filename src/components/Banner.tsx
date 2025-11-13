"use client"

import { useRef, useState, useEffect } from "react"
import AnimatedBackground from "./AnimatedBackground"
import CustomCursor from "./CustomCursor"
import BannerContent from "./BannerContent"

interface MousePosition {
  x: number
  y: number
}

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className="w-full overflow-hidden bg-slate-950"
    >
      <AnimatedBackground mousePosition={mousePosition} isHovering={isHovering} />

      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <BannerContent />
      </div>

      <CustomCursor mousePosition={mousePosition} />
    </div>
  )
}

export default Banner