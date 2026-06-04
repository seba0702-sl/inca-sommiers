import "./Footer.css"
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa"
export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-content">

        {/* PRODUCTOS */}

        <div className="footer-column">

          <h3>Productos</h3>

          <ul>

            <li>
              <a href="#colchones">
                Colchones
              </a>
            </li>

            <li>
              <a href="#blanqueria">
                Blanqueria
              </a>
            </li>

            <li>
              <a href="#almohadas">
                Almohadas
              </a>
            </li>

            <li>
              <a id="otros" href="#otros">
                Otros Productos
              </a>
            </li>

          </ul>

        </div>

        {/* NOSOTROS */}

        <div className="footer-column">

          <h3>Nosotros</h3>

          <p>
            Especialistas en descanso.
          </p>

          <p>
            Colchones, sommiers, almohadas, blanqueria, respaldos de cama y accesorios para toda la familia.
          </p>

        </div>

        {/* CONTACTO */}

        <div className="footer-column">

          <h3>Contacto</h3>

          <p>
            <a
              href="https://wa.me/5491123743264"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </p>

          <p>
            <a
              href="https://instagram.com/incasommiers"
              target="_blank"
              rel="noreferrer"
              className="footer-social"
            >
              <FaInstagram/>
              Instagram
            </a>
          </p>

          <p>
          <a href="mailto:peruincamuebles@gmail.com"
              className="footer-social">
              
              <FaEnvelope/>
              Email
            </a>
          </p>
          <p>Telefono fijo: 49588109</p>

        </div>

        {/* MAPA */}

        <div className="footer-column">

          <h3>Dónde Estamos</h3>

          <iframe
            title="Mapa"
            className="footer-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.928115347884!2d-58.4380952!3d-34.6083845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb5d3a9e4d3f%3A0x5f73bdf8c4e5f7c7!2sRawson%208%2C%20CABA!5e0!3m2!1ses!2sar!4v1710000000000"
            loading="lazy"
          />

          <p>
            Rawson 8 - CABA
          </p>

        </div>

      </div>

      <div className="copyright">
        © 2026 Inca Sommiers
      </div>

    </footer>
  )
}