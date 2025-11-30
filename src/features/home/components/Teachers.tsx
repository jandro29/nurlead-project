import Section from "@/components/ui/Section"
import GradientBlock from "@/components/ui/GradientBlock"

type Teacher = { name: string; role: string }

const items: Teacher[] = [
  { name: "Sofía Méndez", role: "Frontend" },
  { name: "Javier Ruiz", role: "Data Science" },
  { name: "Paula Díaz", role: "UX Research" },
  { name: "Diego León", role: "Marketing" },
]

export default function Teachers() {
  return (
    <Section title="Profesores">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((t) => (
          <div key={t.name} className="rounded-xl border border-[#813368]/40 bg-black/30 overflow-hidden">
            <GradientBlock className="h-28" />
            <div className="p-4">
              <div className="font-bold">{t.name}</div>
              <div className="text-gray-400 text-sm">{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
