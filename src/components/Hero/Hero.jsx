import "./Hero.css"

export default function Hero() {
  return (
    <section className="hero" id="hero">

      {/* Decoración */}

      <img
        src="/images/decor/colchon.png"
        alt=""
        className="hero-colchon"
      />

      <img
        src="/images/decor/almohada.png"
        alt=""
        className="hero-almohada"
      />

      <img
        src="/images/decor/sommier.png"
        alt=""
        className="hero-sommier"
      />

      <div className="container hero-content">

        <img
          src="/images/logo/logo1.jpeg"
          alt="Inca Sommiers"
          className="hero-logo"
        />

        <h2>
          INCA SOMMIERS
        </h2>

        <p>
          Especialistas en descanso
        </p>

        <span className="hero-subtitle">
          Colchones • Sommiers • Almohadas • Accesorios
        </span>

        <a
          href="#catalog"
          className="hero-button"
        >
          Ver Catálogo
        </a>

      </div>

    </section>
  )
}