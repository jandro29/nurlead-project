/*Header.tsx*/
export default function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="brand">
          <span className="brand-mark">N</span>
          <span className="brand-name">urlead</span>
        </div>

        <nav className="nav">
          <a href="#" aria-current="page">Inicio</a>
          <a href="#">Características</a>
          <a href="#">Precios</a>
          <a href="#">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
