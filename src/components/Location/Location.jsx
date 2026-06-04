import "./Location.css"

export default function Location() {
  return (
    <section className="location" id="ubicacion">

      <div className="container">

        <h2 className="section-title">
          Dónde Estamos
        </h2>

        <div className="location-content">

          <div className="location-info">

            <h3>Inca Sommiers</h3>

            <p>
              📍 Rawson 8, Caba
            </p>

            <p>
              📞 1123743264
            </p>

            <p>
              🕒 Lunes a Sábado
            </p>

            <p>
              10:00 a 19:00 hs
            </p>
            <a
              href="https://maps.google.com/?q=Rawson+8+CABA"
              target="_blank"
              rel="noreferrer"
              className="location-button"
            >
              Ver en Google Maps
            </a>
          </div>

          <div className="location-map">

            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.928115347884!2d-58.4380952!3d-34.6083845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb5d3a9e4d3f%3A0x5f73bdf8c4e5f7c7!2sRawson%208%2C%20CABA!5e0!3m2!1ses!2sar!4v1710000000000"
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </div>

    </section>
  )
}