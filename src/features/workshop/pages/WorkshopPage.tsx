import Section from '@/components/ui/Section'
import BaseButton from '@/components/ui/Button'
import { useCart } from '@/app/context/useCart'

type Product = { id: string; title: string; price: number; image?: string }

const products: Product[] = [
  {
    id: 'p-101',
    title: 'UI Kit por Ana',
    price: 19,
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p-102',
    title: 'Landing IA por Luis',
    price: 29,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p-103',
    title: 'Logo Pack por Marta',
    price: 15,
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    id: 'p-104',
    title: 'Template React por Pablo',
    price: 35,
    image: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function WorkshopPage() {
  const { addItem, items } = useCart()
  return (
    <>
      <Section
        title="Workshop"
        headerRight={
          <div className="flex items-center gap-3">
            <a
              href="#/"
              aria-label="Ir al Inicio"
              className="inline-flex items-center justify-center w-11 h-11 rounded-lg bg-linear-to-r from-[#813368] to-[#E8B9E0] text-white"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
                <path d="M3 10l9-7 9 7v11H15v-6H9v6H3V10z" />
              </svg>
            </a>
            <a
              href="#/cart"
              aria-label="Abrir carrito"
              className="relative inline-flex items-center justify-center w-11 h-11 rounded-lg bg-linear-to-r from-[#813368] to-[#E8B9E0] text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="w-6 h-6"
              >
                <path d="M3 3h2l.4 2M7 13h10l4-8H6.4" />
                <circle cx="9" cy="19" r="1.5" />
                <circle cx="17" cy="19" r="1.5" />
              </svg>
              {items.length > 0 && (
                <span className="absolute -top-2 -right-3 text-xs px-2 py-0.5 rounded-full bg-linear-to-r from-[#813368] to-[#E8B9E0] text-[#0a0a0a] font-bold">
                  {items.length}
                </span>
              )}
            </a>
          </div>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map(p => (
            <div key={p.id} className="rounded-xl border border-[#813368]/40 bg-black/30 flex flex-col overflow-hidden">
              {p.image && (
                <div className="aspect-3/2 bg-black/20">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-6 flex-1">
                <h3 className="text-xl font-bold mb-1">{p.title}</h3>
                <p className="text-gray-400">${p.price}</p>
              </div>
              <div className="px-6 pb-6">
                {(() => {
                  const added = items.some(i => i.id === p.id)
                  return (
                    <BaseButton
                      className="w-full"
                      variant={added ? 'success' : 'gradient'}
                      disabled={added}
                      onClick={() => addItem(p)}
                    >
                      {added ? (
                        <span className="inline-flex items-center gap-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          Añadido
                        </span>
                      ) : (
                        'Añadir al carrito'
                      )}
                    </BaseButton>
                  )
                })()}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}
