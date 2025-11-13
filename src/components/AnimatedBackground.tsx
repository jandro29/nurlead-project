"use client"

import { motion } from "framer-motion"

interface MousePosition {
  x: number
  y: number
}

interface AnimatedBackgroundProps {
  mousePosition: MousePosition
  isHovering: boolean
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ mousePosition, isHovering }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Capa 1: Orbes */}
      <motion.div
        className="absolute w-full h-full"
        animate={{
          x: isHovering ? mousePosition.x * 30 : 0,
          y: isHovering ? mousePosition.y * 30 : 0,
        }}
        transition={{ type: "spring", stiffness: 80, damping: 25 }}
      >
        {/* Orbes individuales */}
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
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* ...otros orbes */}
      </motion.div>

      {/* Capa 2: Partículas flotantes */}
      <motion.div className="absolute inset-0">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full"
            style={{
              background: i % 2 === 0 ? "rgba(129, 51, 104, 0.6)" : "rgba(232, 185, 224, 0.5)",
              left: `${20 + i * 15}%`,
              top: `${30 + i * 12}%`,
            }}
            animate={{ y: [0, -100, 0], x: [0, 30, 0], opacity: [0, 1, 0] }}
            transition={{ duration: 5 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </motion.div>

      {/* Capa 3: Líneas */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#813368" strokeWidth="0.5" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
    </div>
  )
}

export default AnimatedBackground