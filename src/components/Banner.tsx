"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

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
      className="relative w-full min-h-screen overflow-hidden bg-slate-950"
    >
      <div className="absolute inset-0 overflow-hidden">
        {/* Capa 1: Orbes principales animados */}
        <motion.div
          className="absolute w-full h-full"
          animate={{
            x: isHovering ? mousePosition.x * 30 : 0,
            y: isHovering ? mousePosition.y * 30 : 0,
          }}
          transition={{ type: "spring", stiffness: 80, damping: 25 }}
        >
          <motion.div
            className="absolute w-96 h-96 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(129, 51, 104, 0.6) 0%, rgba(129, 51, 104, 0.2) 70%)",
              top: "-100px",
              right: "-50px",
            }}
            animate={{
              scale: [1, 1.4, 1],
              rotate: [0, 180, 360],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 12,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute w-80 h-80 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(232, 185, 224, 0.5) 0%, rgba(232, 185, 224, 0.1) 70%)",
              bottom: "80px",
              left: "-60px",
            }}
            animate={{
              scale: [1.4, 0.8, 1.4],
              rotate: [360, 180, 0],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute w-72 h-72 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(129, 51, 104, 0.4) 0%, rgba(129, 51, 104, 0.1) 70%)",
              top: "200px",
              right: "150px",
            }}
            animate={{
              scale: [1.2, 0.9, 1.3],
              rotate: [180, 0, 180],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 18,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute w-64 h-64 rounded-full blur-3xl"
            style={{
              background: "radial-gradient(circle, rgba(232, 185, 224, 0.4) 0%, rgba(232, 185, 224, 0.05) 70%)",
              top: "50%",
              left: "10%",
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
              rotate: [0, 360, 0],
              opacity: [0.4, 0.6, 0.4],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
          />
        </motion.div>

        {/* Capa 2: Partículas flotantes interactivas */}
        <motion.div className="absolute inset-0">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: i % 2 === 0 ? "rgba(129, 51, 104, 0.6)" : "rgba(232, 185, 224, 0.5)",
                left: `${20 + i * 15}%`,
                top: `${30 + i * 12}%`,
              }}
              animate={{
                y: [0, -100, 0],
                x: [0, 30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 5 + i * 0.5,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          ))}
        </motion.div>

        {/* Capa 3: Líneas de efecto */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#813368" strokeWidth="0.5" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl w-full">
          {/* Etiqueta animada con colores Nurlead */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full border backdrop-blur-sm"
              style={{
                borderColor: "rgba(129, 51, 104, 0.5)",
                backgroundColor: "rgba(129, 51, 104, 0.1)",
              }}
              whileHover={{
                borderColor: "rgba(232, 185, 224, 0.8)",
                backgroundColor: "rgba(232, 185, 224, 0.15)",
              }}
            >
              <span
                className="text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r"
                style={{
                  backgroundImage: "linear-gradient(to right, #E8B9E0, #813368)",
                }}
              >
                NURLEAD
              </span>
            </motion.div>
          </motion.div>

          <div className="relative mb-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl sm:text-7xl lg:text-8xl font-black font-sans leading-none tracking-tighter"
            >
              <span style={{ color: "white" }} className="block mb-3">
                Aprende
              </span>
              <motion.span
                className="block text-transparent bg-clip-text"
                style={{
                  backgroundImage: "linear-gradient(to right, #E8B9E0, #813368, #E8B9E0)",
                  backgroundSize: "200% 200%",
                }}
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              >
                Sin Límites
              </motion.span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex justify-center gap-3 mt-6"
            >
              <div
                className="w-8 h-1 rounded-full"
                style={{
                  background: "linear-gradient(to right, transparent, #813368)",
                }}
              />
              <div
                className="w-12 h-1 rounded-full"
                style={{
                  background: "linear-gradient(to right, #813368, #E8B9E0)",
                }}
              />
              <div
                className="w-8 h-1 rounded-full"
                style={{
                  background: "linear-gradient(to right, #E8B9E0, transparent)",
                }}
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex justify-center gap-4 mt-12"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 font-bold text-lg text-white overflow-hidden rounded-lg"
              onClick={() => console.log("Click en comenzar")}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, #813368, #E8B9E0)",
                }}
              />
              <motion.div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to right, #E8B9E0, #813368)",
                }}
                animate={{ x: ["-100%", "100%"] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
              <span className="relative flex items-center justify-center gap-2">
                Comenzar
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  →
                </motion.span>
              </span>

              <motion.div
                className="absolute inset-0 rounded-lg blur-xl opacity-0"
                style={{
                  background: "linear-gradient(to right, #813368, #E8B9E0)",
                }}
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 font-bold text-lg text-white rounded-lg backdrop-blur-sm transition-all"
              style={{
                borderWidth: "2px",
                borderColor: "rgba(129, 51, 104, 0.5)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(232, 185, 224, 0.8)"
                e.currentTarget.style.backgroundColor = "rgba(129, 51, 104, 0.1)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(129, 51, 104, 0.5)"
                e.currentTarget.style.backgroundColor = "transparent"
              }}
            >
              Explorar
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
          >
            <motion.div
              className="w-6 h-10 rounded-full flex justify-center p-2"
              style={{
                borderWidth: "2px",
                borderColor: "rgba(232, 185, 224, 0.5)",
              }}
            >
              <motion.div
                className="w-1 h-2 rounded-full"
                style={{
                  backgroundColor: "#E8B9E0",
                }}
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="fixed w-8 h-8 border-2 rounded-full pointer-events-none z-50 hidden lg:block"
        style={{
          borderColor: "#813368",
        }}
        animate={{
          x: mousePosition.x * window.innerWidth - 16,
          y: mousePosition.y * window.innerHeight - 16,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
        whileHover={{
          borderColor: "#E8B9E0",
          opacity: 0.8,
        }}
        /*style={{
          opacity: isHovering ? 0.6 : 0.3,
        }}*/
      />
    </div>
  )
}

export default Banner
