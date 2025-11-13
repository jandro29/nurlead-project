"use client"

import { motion } from "framer-motion"

interface AnimatedButtonProps {
  label: string
  onClick?: () => void
  variant?: "primary" | "secondary"
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ label, onClick, variant = "primary" }) => {
  if (variant === "primary") {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="group relative px-8 py-4 font-bold text-lg text-white overflow-hidden rounded-lg"
        onClick={onClick}
      >
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, #813368, #E8B9E0)" }} />
        <motion.div
          className="absolute inset-0"
          style={{ background: "linear-gradient(to right, #E8B9E0, #813368)" }}
          animate={{ x: ["-100%", "100%"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <span className="relative flex items-center justify-center gap-2">
          {label}
          <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            →
          </motion.span>
        </span>
      </motion.button>
    )
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-8 py-4 font-bold text-lg text-white rounded-lg backdrop-blur-sm transition-all"
      style={{ borderWidth: "2px", borderColor: "rgba(129, 51, 104, 0.5)" }}
      onClick={onClick}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "rgba(232, 185, 224, 0.8)"
        e.currentTarget.style.backgroundColor = "rgba(129, 51, 104, 0.1)"
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(129, 51, 104, 0.5)"
        e.currentTarget.style.backgroundColor = "transparent"
      }}
    >
      {label}
    </motion.button>
  )
}

export default AnimatedButton