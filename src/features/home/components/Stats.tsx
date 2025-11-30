import Section from "@/components/ui/Section"

type Stat = { label: string; value: string }

export default function Stats({ items = [
    { label: "Estudiantes", value: "50k+" },
    { label: "Cursos", value: "120+" },
    { label: "Mentores", value: "300+" },
  ]}: { items?: Stat[] }) {
  return (
    <Section>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.label} className="text-center rounded-xl p-6 border border-[#813368]/40 bg-black/30">
            <div className="text-4xl font-black text-transparent bg-clip-text" style={{ backgroundImage: "linear-gradient(90deg,#E8B9E0,#813368)" }}>{it.value}</div>
            <div className="text-gray-400 mt-1">{it.label}</div>
          </div>
        ))}
      </div>
    </Section>
  )
}
