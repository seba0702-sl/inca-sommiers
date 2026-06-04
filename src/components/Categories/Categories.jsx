import "./Categories.css"

export default function Categories() {

  const categories = [
    {
      title: "Colchones",
      image: "/images/colchones/Cannon/exclusive.jpg",
      link: "#colchones"
    },
    {
      title: "Blanquería",
      image: "/images/cat-blanqueria.jpeg",
      link: "#blanqueria"
    },
    {
      title: "Almohadas",
      image: "/images/decor/almohada.png",
      link: "#almohadas"
    },
    {
      title: "Accesorios",
      image: "/images/cat-accesorios.jpeg",
      link: "#accesorios"
    }
  ]

  return (
    <section className="categories" id="categories">

      <div className="container">

        <h2 className="section-title">
          Nuestras categorías
        </h2>

        <div className="categories-grid">

          {categories.map((category, index) => (

            <a
              href={category.link}
              className="category-card"
              key={index}
            >
              <img
                src={category.image}
                alt={category.title}
              />

              <div className="category-overlay">

                <h3>{category.title}</h3>

              </div>

            </a>


          ))}

        </div>

      </div>

    </section>
  )
}