import "./Beneficios.css"

const benefits = [
  {
    icon: "🚚",
    title: "Envíos a todo el país",
    text: "Realizamos envíos seguros y confiables a todo el territorio nacional."
  },
  {
    icon: "💳",
    title: "Todos los medios de pago",
    text: "Aceptamos efectivo, transferencias, débito y crédito."
  },
  {
    icon: "🛏️",
    title: "Marcas líderes",
    text: "Trabajamos con las mejores marcas para garantizar calidad y confort."
  },
  {
    icon: "🤝",
    title: "Asesoramiento personalizado",
    text: "Te ayudamos a elegir la mejor opción para tu descanso."
  },
  {
    icon: "🏠",
    title: "Atención en sucursal",
    text: "Visitá nuestro local y recibí atención profesional."
  },
  {
    icon: "🔒",
    title: "Compra segura",
    text: "Te acompañamos durante todo el proceso de compra."
  }
]

export default function WhyChooseUs() {
  return (
    <section id="beneficios" className="beneficios">

      <div className="container">

        <h2 className="section-title">
          ¿Por qué elegirnos?
        </h2>

        <div className="benefits-grid">

          {benefits.map((item, index) => (
            <div
              key={index}
              className="benefit-card"
            >
              <div className="benefit-icon">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          ))}

        </div>

      </div>

    </section>
  )
}