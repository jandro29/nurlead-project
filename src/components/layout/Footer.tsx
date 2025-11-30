export default function Footer({ className = '' }: { className?: string }) {
  return (
    <footer className={`border-t border-gray-700 mt-8 ${className}`}>
      <div className="max-w-5xl mx-auto w-[min(1100px,92%)] flex justify-between items-center gap-4 py-4">
        <p className="text-gray-400">© {new Date().getFullYear()} Nurlead. Todos los derechos reservados.</p>
        <div className="flex gap-4">
          <a href="#" className="text-gray-400">Privacidad</a>
          <a href="#" className="text-gray-400">Términos</a>
          <a href="#" className="text-gray-400">Soporte</a>
        </div>
      </div>
    </footer>
  );
}
