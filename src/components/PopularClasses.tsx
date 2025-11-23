type ClassItem = {
  title: string
  mentor: string
  level: string
}

const data: ClassItem[] = [
  { title: "Introducción a React", mentor: "María López", level: "Intermedio" },
  { title: "Fundamentos de UX", mentor: "Carlos Pérez", level: "Inicial" },
  { title: "Análisis de Datos con Python", mentor: "Ana Torres", level: "Intermedio" },
  { title: "Branding Avanzado", mentor: "Luis García", level: "Avanzado" },
]

export default function PopularClasses() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto w-[min(1100px,92%)]">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-3xl font-extrabold">Clases Populares</h2>
          <a href="#" className="text-sm text-[#E8B9E0]">Ver todas</a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((c) => (
            <article key={c.title} className="rounded-xl overflow-hidden border border-[#813368]/40 bg-black/30">
              <div className="h-28" style={{ background: "linear-gradient(135deg,#813368,#E8B9E0)" }} />
              <div className="p-4">
                <h3 className="font-bold">{c.title}</h3>
                <p className="text-gray-400 text-sm">{c.mentor}</p>
                <div className="mt-3 text-xs text-gray-300">{c.level}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}