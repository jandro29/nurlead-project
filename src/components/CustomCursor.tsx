"use client"

import { motion } from "framer-motion"

interface CustomCursorProps {
  mousePosition: { x: number; y: number }
}

const CustomCursor: React.FC<CustomCursorProps> = ({ mousePosition }) => {
  return (
    <motion.div
      className="fixed w-8 h-8 border-2 rounded-full pointer-events-none z-50 hidden lg:block"
      style={{ borderColor: "#813368" }}
      animate={{
        x: mousePosition.x * window.innerWidth - 16,
        y: mousePosition.y * window.innerHeight - 16,
      }}
      transition={{ type: "spring", stiffness: 500, damping: 28 }}
    />
  )
}

export default CustomCursor