import Section from "@/components/ui/Section"
import GradientBlock from "@/components/ui/GradientBlock"

type ClassItem = { title: string; mentor: string; level: string }

const data: ClassItem[] = [
  { title: "Introducción a React", mentor: "María López", level: "Intermedio" },
  { title: "Fundamentos de UX", mentor: "Carlos Pérez", level: "Inicial" },
  { title: "Análisis de Datos con Python", mentor: "Ana Torres", level: "Intermedio" },
  { title: "Branding Avanzado", mentor: "Luis García", level: "Avanzado" },
]

export default function PopularClasses() {
  return (
    <Section title="Clases Populares" headerRight={<a href="#" className="text-sm text-[#E8B9E0]">Ver todas</a>}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map((c) => (
          <article key={c.title} className="rounded-xl overflow-hidden border border-[#813368]/40 bg-black/30">
            <GradientBlock className="h-28" />
            <div className="p-4">
              <h3 className="font-bold">{c.title}</h3>
              <p className="text-gray-400 text-sm">{c.mentor}</p>
              <div className="mt-3 text-xs text-gray-300">{c.level}</div>
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}
