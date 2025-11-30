import { motion } from 'framer-motion'

export default function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
    >
      <motion.div className="w-6 h-10 rounded-full flex justify-center p-2 border-2 border-[rgba(232,185,224,0.5)]">
        <motion.div className="w-1 h-2 rounded-full bg-[#E8B9E0]" animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} />
      </motion.div>
    </motion.div>
  )
}
