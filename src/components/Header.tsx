export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full bg-transparent z-999999">
      <div className="max-w-5xl mx-auto w-[min(1100px,92%)] flex items-center justify-between py-4">
        <div className="flex items-center gap-1 font-extrabold">
          <span className="w-7 h-7 grid place-items-center rounded-lg bg-linear-to-r from-[#813368] to-[#E8B9E0] text-[#0a0a0a] font-black">
            N
          </span>
          <span className="tracking-[.5px]">urlead</span>
        </div>

        <nav className="flex gap-4">
          <a href="#" className="text-gray-300 font-medium" aria-current="page">
            Inicio
          </a>
          <a href="#" className="text-gray-300 font-medium">
            Características
          </a>
          <a href="#" className="text-gray-300 font-medium">
            Precios
          </a>
          <a href="#" className="text-gray-300 font-medium">
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
