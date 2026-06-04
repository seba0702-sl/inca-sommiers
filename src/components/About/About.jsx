import "./About.css"

export default function About() {
  return (
    <section className="about" id="about">

      <div className="container">

        <h2 className="section-title">
          Nosotros
        </h2>

        <div className="about-content">

          <div className="about-text">

            <h3>Tu descanso es nuestra prioridad</h3>

            <p>
              En Inca Sommiers trabajamos para ofrecer colchones,
              sommiers, almohadas y accesorios de calidad,
              brindando asesoramiento personalizado para que
              encuentres la mejor opción para tu descanso.
            </p>

            <p>
              Contamos con años de experiencia en el rubro y
              trabajamos con productos seleccionados para
              garantizar confort, durabilidad y bienestar.
            </p>

          </div>

          <div className="about-image">

            <img
              src="/images/logo/logo1.jpeg"
              alt="Inca Sommiers"
            />

          </div>

        </div>

      </div>

    </section>
  )
}