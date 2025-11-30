import Section from "@/components/ui/Section"
import GradientBlock from "@/components/ui/GradientBlock"

type Feature = { title: string; description: string }

export default function Advantages({ features = [
    {
      title: "Aprendizaje flexible",
      description: "Cursos a tu ritmo, desde cualquier dispositivo",
    },
    {
      title: "Mentores expertos",
      description: "Profesionales con experiencia real en la industria",
    },
    {
      title: "Comunidad activa",
      description: "Foros, retos y proyectos colaborativos",
    },
  ]}: { features?: Feature[] }) {
  return (
    <Section title="Ventajas">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {features.map((f) => (
          <div key={f.title} className="rounded-xl p-6 border border-[#813368]/40 bg-black/30">
            <GradientBlock className="w-10 h-10 mb-4" />
            <h3 className="text-xl font-bold mb-1">{f.title}</h3>
            <p className="text-gray-400">{f.description}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
