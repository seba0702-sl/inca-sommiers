import { useState } from "react"
import "./Contact.css"

export default function Contact() {

  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    consulta: ""
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const mensaje = `
Hola, quiero realizar una consulta.

Nombre: ${form.nombre}
Email: ${form.email}
Teléfono: ${form.telefono}

Consulta:
${form.consulta}
`

    const whatsappUrl =
      `https://wa.me/5491123743264?text=${encodeURIComponent(mensaje)}`

    window.open(whatsappUrl, "_blank")
  }

  return (
    <section className="contact" id="contact">

      <div className="container">

        <h2 className="section-title">
          Contactanos
        </h2>
        <p className="contact-subtitle">
          Consultanos por colchones, sommiers, almohadaS, blanqueria y accesorios.
        </p>
        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            name="nombre"
            placeholder="Nombre y Apellido"
            value={form.nombre}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={form.email}
            onChange={handleChange}
          />

          <input
            type="tel"
            name="telefono"
            placeholder="Teléfono"
            value={form.telefono}
            onChange={handleChange}
            required
          />

          <textarea
            rows="5"
            name="consulta"
            placeholder="¿Qué producto te interesa?"
            value={form.consulta}
            onChange={handleChange}
            required
          />

          <button type="submit">
            Enviar por WhatsApp
          </button>

        </form>

      </div>

    </section>
  )
}