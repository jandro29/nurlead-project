/*Footer.tsx*/
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <p>© {new Date().getFullYear()} Nurlead. Todos los derechos reservados.</p>
        <div className="footer-links">
          <a href="#">Privacidad</a>
          <a href="#">Términos</a>
          <a href="#">Soporte</a>
        </div>
      </div>
    </footer>
  );
}