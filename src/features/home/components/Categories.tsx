import Section from "@/components/ui/Section"
import GradientBlock from "@/components/ui/GradientBlock"

type Item = { title: string; description: string }

export default function Categories({ items = [
    { title: "Tecnología", description: "Desarrollo, IA, datos" },
    { title: "Negocios", description: "Gestión, finanzas, ventas" },
    { title: "Diseño", description: "UI/UX, 3D, ilustración" },
    { title: "Marketing", description: "Contenido, SEO, brand" },
    { title: "Idiomas", description: "Inglés, francés, alemán" },
    { title: "Música", description: "Producción, teoría, instrumentos" },
  ]}: { items?: Item[] }) {
  return (
    <Section title="Categorías">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div key={item.title} className="relative rounded-xl p-5 border border-[#813368]/40 bg-black/30">
            <GradientBlock className="absolute inset-0 rounded-xl opacity-20" />
            <div className="relative">
              <h3 className="text-xl font-bold mb-1">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
