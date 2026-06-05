import "./Catalog.css"
import { useState, useEffect } from "react"
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
  const [pageColchones, setPageColchones] = useState(1)
  const [pageBlanqueria, setPageBlanqueria] = useState(1)
  const [pageAlmohadas, setPageAlmohadas] = useState(1)
  const [pageOtros, setPageOtros] = useState(1)
  useEffect(() => {
    setPageColchones(1)
  }, [brandFilter, typeFilter, colchonFilter])

  useEffect(() => {
    setPageBlanqueria(1)
  }, [blanqueriaFilter])
  const ITEMS_PER_PAGE = 4

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
  const colchonesPage = filteredColchones.slice(
    (pageColchones - 1) * ITEMS_PER_PAGE,
    pageColchones * ITEMS_PER_PAGE
  )

  const blanqueriaPage = filteredBlanqueria.slice(
    (pageBlanqueria - 1) * ITEMS_PER_PAGE,
    pageBlanqueria * ITEMS_PER_PAGE
  )

  const almohadasPage = almohadas.slice(
    (pageAlmohadas - 1) * ITEMS_PER_PAGE,
    pageAlmohadas * ITEMS_PER_PAGE
  )

  const otrosPage = otros.slice(
    (pageOtros - 1) * ITEMS_PER_PAGE,
    pageOtros * ITEMS_PER_PAGE
  )

  const totalPagesColchones = Math.ceil(filteredColchones.length / ITEMS_PER_PAGE)
  const totalPagesBlanqueria = Math.ceil(filteredBlanqueria.length / ITEMS_PER_PAGE)
  const totalPagesAlmohadas = Math.ceil(almohadas.length / ITEMS_PER_PAGE)
  const totalPagesOtros = Math.ceil(otros.length / ITEMS_PER_PAGE)
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

        <div className="pagination">
          {[...Array(totalPagesColchones)].map((_, index) => (
            <button
              key={index}
              className={pageColchones === index + 1 ? "active-page" : ""}
              onClick={() => setPageColchones(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <div className="catalog-grid">

          {filteredColchones.length > 0 ? (

            colchonesPage.map(product => (

              <ProductCard
                key={`${product.id}-${product.image}`}
                product={product}
              />

            ))

          ) : (

            <p>
              No se encontraron productos para los filtros seleccionados.
            </p>

          )
          }

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
          {blanqueriaPage.map(product => (
            <ProductCard
              key={`${product.id}-${product.image}`}
              product={product}
            />
          ))}

        </div>
        <div className="pagination">
          {[...Array(totalPagesBlanqueria)].map((_, index) => (
            <button
              key={index}
              className={pageBlanqueria === index + 1 ? "active-page" : ""}
              onClick={() => setPageBlanqueria(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        {/* ALMOHADAS */}

        <h2 id="almohadas" className="section-title">
          Almohadas
        </h2>

        <div className="catalog-grid">
          {almohadasPage.map(product => (
            <ProductCard
              key={`${product.id}-${product.image}`}
              product={product}
            />
          ))}

        </div>
        <div className="pagination">
          {[...Array(totalPagesAlmohadas)].map((_, index) => (
            <button
              key={index}
              className={pageAlmohadas === index + 1 ? "active-page" : ""}
              onClick={() => setPageAlmohadas(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
        {/* OTROS */}

        <h2 id="otros" className="section-title">
          Otros Productos
        </h2>

        <div className="catalog-grid">
          {otrosPage.map(product => (
            <ProductCard
              key={`${product.id}-${product.image}`}
              product={product}
            />
          ))}

        </div>
        <div className="pagination">
          {[...Array(totalPagesOtros)].map((_, index) => (
            <button
              key={index}
              className={pageOtros === index + 1 ? "active-page" : ""}
              onClick={() => setPageOtros(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>

    </section>

  )
}