type Props = { onSkip?: () => void }

export default function Splash({ onSkip }: Props) {
  return (
    <div className="fixed inset-0 bg-black flex justify-center items-center z-9999">
      <svg className="w-[70%] max-w-[600px] h-auto" viewBox="0 0 600 150" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#813368" />
            <stop offset="50%" stopColor="#813368" />
            <stop offset="100%" stopColor="#E8B9E0" />
          </linearGradient>
        </defs>
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          fill="none"
          stroke="url(#gradient)"
          strokeWidth="2"
          strokeDasharray="900"
          strokeDashoffset="900"
          className="text-[80px] font-extrabold animate-draw animate-fill"
        >
          Nurlead
        </text>
      </svg>
      {onSkip && (
        <button
          type="button"
          className="absolute bottom-6 right-6 px-4 py-2 text-sm rounded-lg bg-linear-to-r from-[#813368] to-[#E8B9E0] text-white"
          onClick={onSkip}
          aria-label="Saltar pantalla de carga"
        >
          Saltar
        </button>
      )}
    </div>
  )
}

