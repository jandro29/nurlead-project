import Section from "@/components/ui/Section"

type Testimonial = { quote: string; author: string }

const items: Testimonial[] = [
  { quote: "Aprendí más en un mes que en un año por mi cuenta.", author: "Carla S." },
  { quote: "Las clases son claras y prácticas.", author: "Miguel R." },
  { quote: "La comunidad ayuda muchísimo.", author: "Lucía T." },
]

export default function Testimonials() {
  return (
    <Section title="Testimonios">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((t) => (
          <blockquote key={t.author} className="rounded-xl p-6 border border-[#813368]/40 bg-black/30">
            <p className="text-gray-200">“{t.quote}”</p>
            <footer className="mt-3 text-gray-400">{t.author}</footer>
          </blockquote>
        ))}
      </div>
    </Section>
  )
}
