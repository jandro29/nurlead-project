/*Home.tsx*/
import Header from "../components/Header";
import Footer from "../components/Footer";
import FeatureCard from "../components/FeatureCard";
import "./home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />

      {/* HERO */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1>Construye experiencias rápidas con Nurlead</h1>
            <p>
              Plantilla base en React + TypeScript + Vite para lanzar ideas en minutos.
              Animaciones suaves, estilos simples y una arquitectura lista para crecer.
            </p>
            <div className="hero-cta">
              <a className="btn btn-primary" href="#">Comenzar</a>
              <a className="btn btn-ghost" href="#">Ver documentación</a>
            </div>
          </div>

          <div className="hero-media" role="img" aria-label="Vista previa de la app">
            {/* Mock UI simple */}
            <div className="mock-card">
              <div className="mock-card-header">
                <div className="dot" />
                <div className="dot" />
                <div className="dot" />
              </div>
              <div className="mock-card-body">
                <div className="mock-line w-80" />
                <div className="mock-line w-60" />
                <div className="mock-line w-90" />
                <div className="mock-grid">
                  <div className="mock-tile" />
                  <div className="mock-tile" />
                  <div className="mock-tile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="container">
          <h2>Características</h2>
          <p className="section-subtitle">
            Pensadas para acelerar tu desarrollo desde el día 1.
          </p>

          <div className="features-grid">
            <FeatureCard
              title="Vite ultrarrápido"
              description="Recarga instantánea y builds veloces para desarrollar sin fricción."
              icon="⚡"
            />
            <FeatureCard
              title="TypeScript listo"
              description="Tipos estrictos para evitar bugs y documentar tu código."
              icon="🧠"
            />
            <FeatureCard
              title="Componentes modulares"
              description="Arquitectura simple y escalable por módulos y páginas."
              icon="🧩"
            />
            <FeatureCard
              title="Animaciones CSS"
              description="Preloader y microinteracciones sin dependencias extra."
              icon="🎞️"
            />
            <FeatureCard
              title="Accesibilidad base"
              description="Roles y etiquetas para experiencias más inclusivas."
              icon="♿"
            />
            <FeatureCard
              title="Listo para crecer"
              description="Ruteo, estado global y testing se integran fácilmente."
              icon="🌱"
            />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="cta">
        <div className="container cta-inner">
          <h3>¿Listo para crear tu primera funcionalidad?</h3>
          <p>Agrega tu primer componente interactivo en menos de 5 minutos.</p>
          <a className="btn btn-primary" href="#">Crear componente</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}