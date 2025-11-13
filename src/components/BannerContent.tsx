"use client"

import { motion } from "framer-motion"
import AnimatedButton from "./AnimatedButton"

const BannerContent = () => {
  return (
    <div className="text-center max-w-5xl w-full">
      {/* Logo/NURLEAD */}
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
            className="text-sm font-semibold text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(to right, #E8B9E0, #813368)" }}
          >
            NURLEAD
          </span>
        </motion.div>
      </motion.div>

      {/* Título principal */}
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
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 3, repeat: Infinity }}
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
          <div className="w-8 h-1 rounded-full" style={{ background: "linear-gradient(to right, transparent, #813368)" }} />
          <div className="w-12 h-1 rounded-full" style={{ background: "linear-gradient(to right, #813368, #E8B9E0)" }} />
          <div className="w-8 h-1 rounded-full" style={{ background: "linear-gradient(to right, #E8B9E0, transparent)" }} />
        </motion.div>
      </div>

      {/* Botones */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="flex justify-center gap-4 mt-12"
      >
        <AnimatedButton label="Comenzar" />
        <AnimatedButton label="Explorar" variant="secondary" />
      </motion.div>
    </div>
  )
}

export default BannerContent