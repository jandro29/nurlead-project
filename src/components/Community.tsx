export default function Community() {
  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto w-[min(1100px,92%)]">
        <div className="rounded-2xl p-8 border border-[#813368]/40 bg-black/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="text-3xl font-extrabold">Comunidad</h2>
            <p className="text-gray-400 mt-2">Únete, participa en retos y comparte tu progreso.</p>
          </div>
          <a href="#" className="px-6 py-3 font-semibold rounded-lg text-white" style={{ background: "linear-gradient(90deg,#813368,#E8B9E0)" }}>Unirme</a>
        </div>
      </div>
    </section>
  )
}