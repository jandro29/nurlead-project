import FeatureCard from "../components/FeatureCard";

export default function Caracteristicas(){
    return (
        <section className="features" id="caracteristicas">
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
    );
}