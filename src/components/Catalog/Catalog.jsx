import "./Catalog.css"
import { useState } from "react"
import { colchones } from "../../data/colchones"
import { blanqueria } from "../../data/blanqueria"
import { almohadas } from "../../data/almohadas"
import { otros } from "../../data/otros"

import ProductCard from "../ProductCard/ProductCard"
import Filters from "../Filters/Filters"
export default function Catalog({ brandFilter, setBrandFilter }) {
  const [colchonFilter, setColchonFilter] = useState("all")
  const [blanqueriaFilter, setBlanqueriaFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
 
  const filteredColchones = colchones.filter(product => {

  const sizeMatch =
    colchonFilter === "all"
      ? true
      : product.sizes?.includes(colchonFilter)

  const brandMatch =
    brandFilter === "all"
      ? true
      : product.brand === brandFilter

  const typeMatch =
    typeFilter === "all"
      ? true
      : product.type === typeFilter

  return (
    sizeMatch &&
    brandMatch &&
    typeMatch
  )
})
  const filteredBlanqueria =
    blanqueriaFilter === "all"
      ? blanqueria
      : blanqueria.filter(
        item => item.category === blanqueriaFilter
      )
  return (

    <section id="catalog">

      <div className="container">

        {/* COLCHONES */}

<h2
  id="colchones"
  className="section-title"
>
  Colchones
</h2>

{/* FILTRO MARCAS */}

<Filters
  value={brandFilter}
  onChange={setBrandFilter}
  options={[
    { label: "Todas las marcas", value: "all" },
    { label: "Cannon", value: "Cannon" },
    { label: "Deseo", value: "Deseo" },
    { label: "Gani", value: "Gani" },
    { label: "Suavestar", value: "Suavestar" },
    { label: "Suavegom", value: "Suavegom" },
    { label: "Piero", value: "Piero" },
  ]}
/>

{/* FILTRO TIPO */}

<Filters
  value={typeFilter}
  onChange={setTypeFilter}
  options={[
    { label: "Todos", value: "all" },
    { label: "Espuma", value: "Espuma" },
    { label: "Resortes", value: "Resortes" }
  ]}
/>

{/* FILTRO MEDIDAS */}


<div className="catalog-grid">

  {filteredColchones.length > 0 ? (

    filteredColchones.map(product => (

      <ProductCard
        key={product.id}
        product={product}
      />

    ))

  ) : (

    <p>
      No se encontraron productos para los filtros seleccionados.
    </p>

  )}

</div>

        {/* BLANQUERIA */}

        <h2 id="blanqueria" className="section-title">
          Blanquería
        </h2>
        <Filters
          value={blanqueriaFilter}
          onChange={setBlanqueriaFilter}
          options={[
            { label: "Todos", value: "all" },
            { label: "Baño", value: "baño" },
            { label: "Dormitorio", value: "dormitorio" },
            { label: "Cocina", value: "cocina" },
            { label: "Comedor", value: "comedor" }
          ]}
        />

        <div className="catalog-grid">
          {filteredBlanqueria.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* ALMOHADAS */}

        <h2 id="almohadas" className="section-title">
          Almohadas
        </h2>

        <div className="catalog-grid">
          {almohadas.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* OTROS */}

        <h2 id="otros" className="section-title">
          Otros Productos
        </h2>

        <div className="catalog-grid">
          {otros.map(product => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>

    </section>

  )
}