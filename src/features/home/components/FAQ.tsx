import { useState } from "react"
import Section from "@/components/ui/Section"

type QA = { q: string; a: string }

const items: QA[] = [
  { q: "¿Cómo accedo a los cursos?", a: "Crea tu cuenta y comienza desde la web o móvil." },
  { q: "¿Hay certificados?", a: "Sí, puedes obtener certificados al finalizar rutas." },
  { q: "¿Puedo cancelar cuando quiera?", a: "Sí, sin permanencia." },
]

export default function FAQ({ wrapInSection = true, title = "Preguntas Frecuentes" }: { wrapInSection?: boolean; title?: string }) {
  const [open, setOpen] = useState<number | null>(0)

  const content = (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={item.q} className="rounded-xl border border-[#813368]/40 bg-black/30">
          <button className="w-full text-left p-4 flex justify-between items-center" onClick={() => setOpen(open === i ? null : i)}>
            <span className="font-semibold">{item.q}</span>
            <span className="text-[#E8B9E0]">{open === i ? "−" : "+"}</span>
          </button>
          {open === i && <div className="px-4 pb-4 text-gray-400">{item.a}</div>}
        </div>
      ))}
    </div>
  )

  if (!wrapInSection) return content
  return <Section title={title}>{content}</Section>
}
