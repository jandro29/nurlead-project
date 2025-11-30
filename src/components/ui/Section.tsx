type Props = {
  title?: string
  headerRight?: React.ReactNode
  id?: string
  className?: string
  children: React.ReactNode
}

export default function Section({ title, headerRight, id, className = '', children }: Props) {
  return (
    <section id={id} className={`py-16 min-h-screen snap-start snap-always snap-section flex items-center bg-[#0b0b0b] ${className}`}>
      <div className="max-w-5xl mx-auto w-[min(1100px,92%)]">
        {(title || headerRight) && (
          <div className="flex items-end justify-between mb-8">
            {title && <h2 className="text-3xl font-extrabold">{title}</h2>}
            {headerRight}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}
