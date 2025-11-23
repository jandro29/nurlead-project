export default function Advantages() {
  const features = [
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
  ]

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto w-[min(1100px,92%)]">
        <h2 className="text-3xl font-extrabold mb-8">Ventajas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="rounded-xl p-6 border border-[#813368]/40 bg-black/30">
              <div className="w-10 h-10 rounded-lg mb-4" style={{ background: "linear-gradient(135deg,#813368,#E8B9E0)" }} />
              <h3 className="text-xl font-bold mb-1">{f.title}</h3>
              <p className="text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}