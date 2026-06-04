import "./ProductCard.css"

export default function ProductCard({ product }) {

  if (!product) return null

  return (

    <article className="product-card">

      <img
        src={product.image}
        alt={`${product.brand} ${product.model}`}
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
          {product.model}
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
          href={`https://wa.me/5491123743264?text=Hola,%20consulto%20por%20${product.brand}%20${product.model}`}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          Consultar
        </a>

      </div>

    </article>

  )
}