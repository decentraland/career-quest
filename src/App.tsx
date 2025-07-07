// Styled Components
import { useEffect, useRef } from "react"
import Lenis from "lenis"
import { styled } from "styled-components"
// Components
import { About } from "./components/About/About"
import { Faq } from "./components/Faq/Faq"
import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { Marquee } from "./components/Marquee/Marquee"
import { Navbar } from "./components/Navbar/Navbar"
import { Newsletter } from "./components/Newsletter/Newsletter"
// CSS
import "./css/global.css"

const App = () => {
  const lenisRef = useRef<Lenis | null>(null)

  useEffect(() => {
    // Inicializar Lenis para scroll suave
    lenisRef.current = new Lenis({
      duration: 1.8,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    })

    // Función para actualizar Lenis en cada frame
    const raf = (time: number) => {
      lenisRef.current?.raf(time)
      requestAnimationFrame(raf)
    }

    // Iniciar el loop de animación
    requestAnimationFrame(raf)

    // Limpiar al desmontar
    return () => {
      lenisRef.current?.destroy()
    }
  }, [])

  return (
    <div className="app-container">
      <Navbar />
      <AppContainer>
        <Hero />

        <MarqueeWrapper>
          <Marquee />
        </MarqueeWrapper>

        <About />

        <MarqueeWrapper>
          <Marquee />
        </MarqueeWrapper>

        <Faq />

        <Newsletter />
        <Footer />
      </AppContainer>
    </div>
  )
}

const AppContainer = styled.div`
  background-color: #0f1417;
  color: #ebecfa;
  position: relative;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 50px);
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: relative;
`

const MarqueeWrapper = styled.div`
  width: 100%;
`

export { App }
