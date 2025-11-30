import Section from '@/components/ui/Section'
import BaseButton from '@/components/ui/Button'
import { useCart } from '@/app/context/useCart'

export default function CartPage() {
  const { items, removeItem, clearCart, total } = useCart()
  return (
    <Section
      title="Carrito"
      headerRight={
        <div className="flex items-center gap-2">
          <a
            href="#/"
            aria-label="Ir al Inicio"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border-2 border-[#813368]/50 hover:border-[#E8B9E0]/80 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M3 10l9-7 9 7v11H15v-6H9v6H3V10z" />
            </svg>
            Inicio
          </a>
          <a
            href="#/workshop"
            aria-label="Volver al Workshop"
            className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-lg border-2 border-[#813368]/50 hover:border-[#E8B9E0]/80 text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
              <path d="M15 18l-6-6 6-6" />
            </svg>
            Volver al Workshop
          </a>
        </div>
      }
    >
      <div className="space-y-4">
        {items.length === 0 && <p className="text-gray-400">Tu carrito está vacío</p>}
        {items.map(i => (
          <div key={i.id} className="flex justify-between items-center rounded-xl p-4 border border-[#813368]/40 bg-black/30">
            <div>
              <div className="font-semibold">{i.title}</div>
              <div className="text-gray-400">${i.price}</div>
            </div>
            <BaseButton onClick={() => removeItem(i.id)}>Eliminar</BaseButton>
          </div>
        ))}
        {items.length > 0 && (
          <div className="flex justify-between items-center pt-4 border-t border-[#813368]/30">
            <div className="font-bold">Total: ${total}</div>
            <div className="flex gap-3">
              <BaseButton variant="outline" onClick={clearCart}>Vaciar</BaseButton>
              <BaseButton variant="gradient">Continuar</BaseButton>
            </div>
          </div>
        )}
      </div>
    </Section>
  )
}
