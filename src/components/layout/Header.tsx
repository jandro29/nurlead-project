import { useCart } from '@/app/context/useCart'

export default function Header() {
  const { items } = useCart()
  const count = items.length
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-[999999]">
      <div className="max-w-5xl mx-auto w-[min(1100px,92%)] flex items-center justify-between py-4">
        <a href="#/" className="flex items-center gap-1 font-extrabold">
          <span className="w-7 h-7 grid place-items-center rounded-lg bg-gradient-to-r from-[#813368] to-[#E8B9E0] text-[#0a0a0a] font-black">
            N
          </span>
          <span className="tracking-[.5px]">urlead</span>
        </a>

        <nav className="flex items-center gap-4">
          <a href="#/" className="text-gray-300 font-medium" aria-current="page">Inicio</a>
          <a href="#/workshop" className="text-gray-300 font-medium">Workshop</a>
          <a href="#/cart" className="text-gray-300 font-medium relative">
            Carrito
            {count > 0 && (
              <span className="absolute -top-2 -right-3 text-xs px-2 py-0.5 rounded-full bg-gradient-to-r from-[#813368] to-[#E8B9E0] text-[#0a0a0a] font-bold">
                {count}
              </span>
            )}
          </a>
        </nav>
      </div>
    </header>
  );
}
