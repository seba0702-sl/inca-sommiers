import "./FloatingWhatsApp.css"

export default function FloatingWhatsApp() {

  const phone = "5491123743264"

  return (
    <a
      href={`https://wa.me/${phone}`}
      target="_blank"
      rel="noreferrer"
      className="floating-whatsapp"
    >
      💬
    </a>
  )
}