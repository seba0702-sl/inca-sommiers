import "./Brands.css"

const brands = [
  "/images/marcas/cannon.png",
  "/images/marcas/suavestar.png",
  "/images/marcas/gani.png",
  "/images/marcas/deseo.png",
   "/images/marcas/Piero.png",
    "/images/marcas/SuavegomLog.png",
    "/images/marcas/FiberBall.png",
    "/images/marcas/biodinamica.png",
    "/images/marcas/BedyCo.png",
]

export default function Brands() {
  return (
    <section className="brands">
      <div className="container">

        <h2>Marcas que Trabajamos</h2>

        <p>
          Calidad y respaldo de las mejores marcas para tu descanso.
        </p>

        <div className="brands-grid">
          {brands.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="Marca"
              className="brand-logo-item"
            />
          ))}
        </div>

      </div>
    </section>
  )
}