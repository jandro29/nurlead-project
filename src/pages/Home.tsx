/*Home.tsx*/
import Header from "../components/Header";
import Banner from "../components/Banner"
import Caracteristicas from "../components/Caracteristicas";
import Footer from "../components/Footer";
import "../styles/home.css";


export default function Home() {
  return (
    <div className="home">
      <Header />

      {/* HERO */}
      <Banner/>

      {/* FEATURES */}
      <Caracteristicas/>

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