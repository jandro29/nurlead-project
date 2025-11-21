export default function Categories() {
  const items = [
    { title: "Tecnología", description: "Desarrollo, IA, datos" },
    { title: "Negocios", description: "Gestión, finanzas, ventas" },
    { title: "Diseño", description: "UI/UX, 3D, ilustración" },
    { title: "Marketing", description: "Contenido, SEO, brand" },
    { title: "Idiomas", description: "Inglés, francés, alemán" },
    { title: "Música", description: "Producción, teoría, instrumentos" },
  ]

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto w-[min(1100px,92%)]">
        <h2 className="text-3xl font-extrabold mb-8">Categorías</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.title} className="relative rounded-xl p-5 border border-[#813368]/40 bg-black/30">
              <div className="absolute inset-0 rounded-xl opacity-20" style={{ background: "linear-gradient(135deg,#813368 0%,#E8B9E0 100%)" }} />
              <div className="relative">
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}