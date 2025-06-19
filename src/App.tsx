// Styled Components
import { useEffect, useRef } from "react"
import Lenis from "lenis"
// Components
import { About } from "./components/About/About"
import { Carousel } from "./components/Carousel/Carousel"
import { Faq } from "./components/Faq/Faq"
import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { LiveTalks } from "./components/LiveTalks/LiveTalks"
import { Marquee } from "./components/Marquee/Marquee"
import { MarqueeContainerWrapper } from "./components/Marquee/Marquee.styled"
import { Navbar } from "./components/Navbar/Navbar"
import { Newsletter } from "./components/Newsletter/Newsletter"
import { Partners } from "./components/Partners/Partners"
import { Schedule } from "./components/Schedule/Schedule"
import { VideoSection } from "./components/VideoSection"
// CSS
import "./css/global.css"
import { config } from "./config"
import { getAnalytics } from "./modules/analytics/segment"
import { AppContainer } from "./App.styled"

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

  useEffect(() => {
    // Initialize analytics after component mounts to avoid race conditions
    const initializeAnalytics = () => {
      const analytics = getAnalytics()
      if (analytics) {
        analytics.load(config.get("SEGMENT_API_KEY"))
        analytics.page()
      }
    }

    // Small delay to ensure snippet is fully loaded
    const timer = setTimeout(initializeAnalytics, 0)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="app-container">
      <Navbar />
      <AppContainer>
        <Hero />

        <Carousel />

        <MarqueeContainerWrapper>
          <Marquee />
        </MarqueeContainerWrapper>

        <About />

        <MarqueeContainerWrapper>
          <Marquee />
        </MarqueeContainerWrapper>

        <Schedule />

        <MarqueeContainerWrapper>
          <Marquee />
        </MarqueeContainerWrapper>

        <VideoSection />

        <MarqueeContainerWrapper>
          <Marquee />
        </MarqueeContainerWrapper>

        <LiveTalks />

        <MarqueeContainerWrapper>
          <Marquee />
        </MarqueeContainerWrapper>

        <Partners />

        <MarqueeContainerWrapper>
          <Marquee />
        </MarqueeContainerWrapper>

        <Faq />

        <Newsletter />
        <Footer />
      </AppContainer>
    </div>
  )
}

export { App }
