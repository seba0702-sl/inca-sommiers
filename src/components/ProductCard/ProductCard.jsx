import { useState } from "react"
import "./ProductCard.css"

export default function ProductCard({ product }) {

  const [open, setOpen] = useState(false)
  const [zoom, setZoom] = useState(false)

  if (!product) return null

  const isOtros = product.category === "otros"

  return (

    <>
      <article className="product-card">

        <img
          src={product.image}
          alt={`${product.brand || ""} ${product.model || product.name}`}
          className={isOtros ? "product-image otros-image" : "product-image"}
          onClick={() => isOtros && setOpen(true)}
        />

        <div className="product-info">

          <div className="product-brand">

            {product.logo && (
              <img
                src={product.logo}
                alt={product.brand}
                className="brand-logo"
              />
            )}

            <span className="brand-name">
              {product.brand}
            </span>

          </div>

          <h3>
            {product.model || product.name}
          </h3>

          <p>
            {product.description}
          </p>

          <div className="sizes">

            {product.sizes?.map(size => (
              <span
                key={size}
                className="size-chip"
              >
                {size}
              </span>
            ))}

          </div>

          {product.pdf && (
            <a
              href={product.pdf}
              target="_blank"
              rel="noreferrer"
              className="pdf-btn"
            >
              📄 Ficha Técnica
            </a>
          )}

          <a
            href={`https://wa.me/5491123743264?text=Hola,%20consulto%20por%20${product.brand || ""}%20${product.model || product.name}`}
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            Consultar
          </a>

        </div>

      </article>

      {isOtros && open && (
  <div
    className="lightbox"
    onClick={() => {
      setOpen(false)
      setZoom(false)
    }}
  >
    <img
      src={product.image}
      alt={product.name}
      className={`lightbox-image ${zoom ? "zoomed" : ""}`}
      onClick={(e) => {
        e.stopPropagation()
        setZoom(!zoom)
      }}
    />
  </div>
)}
    </>
  )
}