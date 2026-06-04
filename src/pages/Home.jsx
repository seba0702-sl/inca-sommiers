

import Header from "../components/Header/Header"
import Hero from "../components/Hero/Hero"
import Brands from "../components/Brands/Brands"
import Beneficios from "../components/Beneficios/Beneficios"
import Categories from "../components/Categories/Categories"
import Catalog from "../components/Catalog/Catalog"
import About from "../components/About/About"
import Branches from "../components/Branches/Branches"
import Location from "../components/Location/Location"
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer"
import FloatingWhatsApp from "../components/FloatingWhatsApp/FloatingWhatsApp"

import { useState } from "react"

export default function Home() {

  const [brandFilter, setBrandFilter] = useState("all")

  return (
    <>
      <Header setBrandFilter={setBrandFilter} />

      <Hero />
      <About />
      <Brands />
      <Beneficios />
      <Categories />

      <Catalog
        brandFilter={brandFilter}
        setBrandFilter={setBrandFilter}
      />

      
      <Branches />
      <Location />
      <Contact />
      <Footer />
    </>
  )
}