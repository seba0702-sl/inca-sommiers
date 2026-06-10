import { useState } from "react"
import "./Header.css"

export default function Header({ setBrandFilter }) {

  const [mobileProducts, setMobileProducts] = useState(false)

  return (
    <header className="header">
      <div className="container header-content">
        <div className="brand">

          <img
            src="/images/logo/logo2.jpeg"
            alt="Inca Sommiers"
            className="logo-image"
          />



        </div>

        <nav className="nav">

          <a href="#hero">Inicio</a>

          <div className="mega-menu">

            <span>
              Productos ▾
            </span>

            <div className="mega-menu-content">

              {/* COLCHONES */}

              <div className="mega-column">

                <h4>Colchones</h4>

                <a
                  href="#colchones"
                  onClick={() => setBrandFilter("Cannon")}
                >
                  Cannon
                </a>

                <a
                  href="#colchones"
                  onClick={() => setBrandFilter("Deseo")}
                >
                  Deseo
                </a>

                <a
                  href="#colchones"
                  onClick={() => setBrandFilter("Gani")}
                >
                  Gani
                </a>

                <a
                  href="#colchones"
                  onClick={() => setBrandFilter("Suavestar")}
                >
                  Suavestar
                </a>
                <a
                  href="#colchones"
                  onClick={() => setBrandFilter("Suavegom")}
                >
                  Suavegom
                </a>
                <a
                  href="#colchones"
                  onClick={() => setBrandFilter("Piero")}
                >
                  Piero
                </a>
                <a
                  href="#colchones"
                  onClick={() => setBrandFilter("all")}
                >
                  Todos los colchones
                </a>

              </div>

              {/* ALMOHADAS */}

              <div className="mega-column">

                <h4>Almohadas</h4>

                <a href="#almohadas">
                  Almohadas
                </a>

              </div>

              {/* BLANQUERIA */}

              <div className="mega-column">

                <h4>Blanquería</h4>

                <a href="#blanqueria">
                  Baño
                </a>

                <a href="#blanqueria">
                  Dormitorio
                </a>

                <a href="#blanqueria">
                  Cocina
                </a>

                <a href="#blanqueria">
                  Comedor
                </a>

              </div>

              {/* OTROS */}

              <div className="mega-column">

                <h4>Otros</h4>

                <a href="#otros">
                  Protectores
                </a>

                <a href="#otros">
                  Respaldos
                </a>

                <a href="#otros">
                  Accesorios
                </a>

              </div>

            </div>

          </div>
          <div className="mobile-products">

  <button
    className="mobile-products-btn"
    onClick={() =>
      setMobileProducts(!mobileProducts)
    }
  >
    Productos ▾
  </button>

  {mobileProducts && (

    <div className="mobile-products-menu">

      <strong>Colchones</strong>

      <a
        href="#colchones"
        onClick={() => setBrandFilter("Cannon")}
      >
        Cannon
      </a>

      <a
        href="#colchones"
        onClick={() => setBrandFilter("Deseo")}
      >
        Deseo
      </a>

      <a
        href="#colchones"
        onClick={() => setBrandFilter("Gani")}
      >
        Gani
      </a>

      <a
        href="#colchones"
        onClick={() => setBrandFilter("Suavestar")}
      >
        Suavestar
      </a>

      <a
        href="#colchones"
        onClick={() => setBrandFilter("Piero")}
      >
        Piero
      </a>
      <a
        href="#colchones"
        onClick={() => setBrandFilter("Suavegom")}
      >
        Suavegom
      </a>

      <hr />

      <strong>Almohadas</strong>

      <a href="#almohadas">
        Todas las almohadas
      </a>

      <hr />

      <strong>Blanquería</strong>

      <a href="#blanqueria">
        Baño
      </a>

      <a href="#blanqueria">
        Dormitorio
      </a>

      <a href="#blanqueria">
        Cocina
      </a>

      <a href="#blanqueria">
        Comedor
      </a>

      <hr />

      <strong>Otros</strong>

      <a href="#otros">
        Protectores
      </a>

      <a href="#otros">
        Respaldos
      </a>

      <a href="#otros">
        Accesorios
      </a>

    </div>

  )}

</div>
          <a href="#about">
            Nosotros
          </a>
          <a href="#beneficios">
            Beneficios
          </a>
          <a href="#branches">
            Sucursal
          </a>

          <a href="#ubicacion">
            Dónde Estamos
          </a>

          <a href="#contact">
            Contacto
          </a>

        </nav>
      </div>
    </header>
  )
}