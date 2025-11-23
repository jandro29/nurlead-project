import { useState } from "react"

type QA = {
  q: string
  a: string
}

const items: QA[] = [
  { q: "¿Cómo accedo a los cursos?", a: "Crea tu cuenta y comienza desde la web o móvil." },
  { q: "¿Hay certificados?", a: "Sí, puedes obtener certificados al finalizar rutas." },
  { q: "¿Puedo cancelar cuando quiera?", a: "Sí, sin permanencia." },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto w-[min(1100px,92%)]">
        <h2 className="text-3xl font-extrabold mb-8">Preguntas Frecuentes</h2>
        <div className="space-y-3">
          {items.map((item, i) => (
            <div key={item.q} className="rounded-xl border border-[#813368]/40 bg-black/30">
              <button
                className="w-full text-left p-4 flex justify-between items-center"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold">{item.q}</span>
                <span className="text-[#E8B9E0]">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-gray-400">{item.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}