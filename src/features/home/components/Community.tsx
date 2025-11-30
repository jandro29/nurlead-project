import Section from "@/components/ui/Section"
import Button from "@/components/ui/Button"

export default function Community() {
  return (
    <Section>
      <div className="rounded-2xl p-8 border border-[#813368]/40 bg-black/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold">Comunidad</h2>
          <p className="text-gray-400 mt-2">Únete, participa en retos y comparte tu progreso.</p>
        </div>
        <Button variant="gradient">Unirme</Button>
      </div>
    </Section>
  )
}
