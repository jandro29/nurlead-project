import { forwardRef } from 'react'
import { motion } from 'framer-motion'

type Props = {
  variant?: 'gradient' | 'outline' | 'success'
  className?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
}

const BaseButton = forwardRef<HTMLButtonElement, Props>(function Button(
  { variant = 'outline', className = '', children, onClick, disabled },
  ref,
) {
  const base = 'px-8 py-4 font-bold text-lg rounded-lg focus:outline-none'
  const styles =
    variant === 'gradient'
      ? 'relative text-white overflow-hidden bg-gradient-to-r from-[#813368] to-[#E8B9E0]'
      : variant === 'success'
      ? 'relative text-white overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-400'
      : 'text-white backdrop-blur-sm border-2 border-[#813368]/50 hover:border-[#E8B9E0]/80'

  const disabledStyles = disabled ? 'opacity-70 cursor-not-allowed' : ''

  return (
    <button ref={ref} onClick={onClick} disabled={disabled} className={`${base} ${styles} ${disabledStyles} ${className}`}>
      {children}
    </button>
  )
})

export const MotionButton = motion(BaseButton)
export default BaseButton
