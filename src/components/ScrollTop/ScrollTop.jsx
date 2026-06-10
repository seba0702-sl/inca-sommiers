import { useEffect, useState } from "react"
import { FaChevronUp } from "react-icons/fa"
import "./ScrollTop.css"

export default function ScrollTop() {

  const [visible, setVisible] = useState(false)

  useEffect(() => {

    const handleScroll = () => {
      setVisible(window.scrollY > 400)
    }

    window.addEventListener("scroll", handleScroll)

    return () =>
      window.removeEventListener("scroll", handleScroll)

  }, [])

  const scrollToTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })

  }

  return (

    <button
      className={`scroll-top ${
        visible ? "show" : ""
      }`}
      onClick={scrollToTop}
    >
      <FaChevronUp />
    </button>

  )
}