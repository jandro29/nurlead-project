export default function Teams() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto w-[min(1100px,92%)]">
        <div className="rounded-2xl p-8 border border-[#813368]/40 bg-black/30">
          <h2 className="text-3xl font-extrabold">Nurlead para Equipos</h2>
          <p className="text-gray-400 mt-2">Forma a tu equipo con rutas y seguimiento.</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className="px-4 py-2 rounded-full text-sm border border-[#813368]/40">Panel de progreso</span>
            <span className="px-4 py-2 rounded-full text-sm border border-[#813368]/40">Asignación de cursos</span>
            <span className="px-4 py-2 rounded-full text-sm border border-[#813368]/40">Certificados</span>
          </div>
          <div className="mt-6">
            <a href="#" className="px-6 py-3 font-semibold rounded-lg text-white" style={{ background: "linear-gradient(90deg,#813368,#E8B9E0)" }}>Solicitar demo</a>
          </div>
        </div>
      </div>
    </section>
  )
}