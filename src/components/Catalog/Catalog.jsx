import "./Catalog.css"
import { useState, useEffect } from "react"
import { colchones } from "../../data/colchones"
import { blanqueria } from "../../data/blanqueria"
import { almohadas } from "../../data/almohadas"
import { otros } from "../../data/otros"

import ProductCard from "../ProductCard/ProductCard"
import Filters from "../Filters/Filters"

export default function Catalog({
  brandFilter,
  setBrandFilter,
  search,
  setSearch
}) {
  const [colchonFilter, setColchonFilter] = useState("all")
  const [blanqueriaFilter, setBlanqueriaFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [pageColchones, setPageColchones] = useState(1)
  const [pageBlanqueria, setPageBlanqueria] = useState(1)
  const [pageAlmohadas, setPageAlmohadas] = useState(1)
  const [pageOtros, setPageOtros] = useState(1)

  useEffect(() => {
    setPageColchones(1)
  }, [brandFilter, typeFilter, colchonFilter, search])

  useEffect(() => {
    setPageBlanqueria(1)
  }, [blanqueriaFilter])

  useEffect(() => {
    setPageAlmohadas(1)
  }, [search])

  useEffect(() => {
    setPageOtros(1)
  }, [search])

  const ITEMS_PER_PAGE = 4

  const matchesSearch = (product) => {
    if (!search?.trim()) return true

    const query = search.toLowerCase()

    return [
      product.brand,
      product.model,
      product.name,
      product.description,
      product.category,
      product.type
    ]
      .filter(Boolean)
      .some(field =>
        field.toLowerCase().includes(query)
      )
  }

  const isSearching = Boolean(search?.trim())

  const searchResults = [
    ...colchones,
    ...blanqueria,
    ...almohadas,
    ...otros
  ].filter(matchesSearch)

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
      typeMatch &&
      matchesSearch(product)
    )
  })

  const filteredBlanqueria = blanqueria.filter(item => {
    const categoryMatch =
      blanqueriaFilter === "all"
        ? true
        : item.category === blanqueriaFilter

    return (
      categoryMatch &&
      matchesSearch(item)
    )
  })

  const filteredAlmohadas = almohadas.filter(matchesSearch)
  const filteredOtros = otros.filter(matchesSearch)

  const colchonesPage = filteredColchones.slice(
    (pageColchones - 1) * ITEMS_PER_PAGE,
    pageColchones * ITEMS_PER_PAGE
  )

  const blanqueriaPage = filteredBlanqueria.slice(
    (pageBlanqueria - 1) * ITEMS_PER_PAGE,
    pageBlanqueria * ITEMS_PER_PAGE
  )

  const almohadasPage = filteredAlmohadas.slice(
    (pageAlmohadas - 1) * ITEMS_PER_PAGE,
    pageAlmohadas * ITEMS_PER_PAGE
  )

  const otrosPage = filteredOtros.slice(
    (pageOtros - 1) * ITEMS_PER_PAGE,
    pageOtros * ITEMS_PER_PAGE
  )

  const totalPagesColchones = Math.ceil(filteredColchones.length / ITEMS_PER_PAGE)
  const totalPagesBlanqueria = Math.ceil(filteredBlanqueria.length / ITEMS_PER_PAGE)
  const totalPagesAlmohadas = Math.ceil(filteredAlmohadas.length / ITEMS_PER_PAGE)
  const totalPagesOtros = Math.ceil(filteredOtros.length / ITEMS_PER_PAGE)

  return (
    <section id="catalog">
      <div className="catalog-search">
        <h2>¿Qué estás buscando?</h2>

        <input
          type="text"
          placeholder="Buscar colchones, almohadas, marcas..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="container">
        {isSearching ? (
          <div className="catalog-grid">
            {searchResults.length > 0 ? (
              searchResults.map(product => (
                <ProductCard
                  key={`${product.id}-${product.image}`}
                  product={product}
                />
              ))
            ) : (
              <p>No se encontraron productos.</p>
            )}
          </div>
        ) : (
          <>
            <h2 id="colchones" className="section-title">
              Colchones
            </h2>

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

            <Filters
              value={typeFilter}
              onChange={setTypeFilter}
              options={[
                { label: "Todos", value: "all" },
                { label: "Espuma", value: "Espuma" },
                { label: "Resortes", value: "Resortes" }
              ]}
            />

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
                <p>No se encontraron productos para los filtros seleccionados.</p>
              )}
            </div>

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

            <div className="catalog-grid">
              {blanqueriaPage.map(product => (
                <ProductCard
                  key={`${product.id}-${product.image}`}
                  product={product}
                />
              ))}
            </div>

            <h2 id="almohadas" className="section-title">
              Almohadas
            </h2>

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

            <div className="catalog-grid">
              {almohadasPage.map(product => (
                <ProductCard
                  key={`${product.id}-${product.image}`}
                  product={product}
                />
              ))}
            </div>

            <h2 id="otros" className="section-title">
              Otros Productos
            </h2>

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

            <div className="catalog-grid">
              {otrosPage.map(product => (
                <ProductCard
                  key={`${product.id}-${product.image}`}
                  product={product}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}