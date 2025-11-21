type Teacher = {
  name: string
  role: string
}

const items: Teacher[] = [
  { name: "Sofía Méndez", role: "Frontend" },
  { name: "Javier Ruiz", role: "Data Science" },
  { name: "Paula Díaz", role: "UX Research" },
  { name: "Diego León", role: "Marketing" },
]

export default function Teachers() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto w-[min(1100px,92%)]">
        <h2 className="text-3xl font-extrabold mb-8">Profesores</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((t) => (
            <div key={t.name} className="rounded-xl border border-[#813368]/40 bg-black/30 overflow-hidden">
              <div className="h-28" style={{ background: "linear-gradient(135deg,#813368,#E8B9E0)" }} />
              <div className="p-4">
                <div className="font-bold">{t.name}</div>
                <div className="text-gray-400 text-sm">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}