// Styled Components
import { Suspense, lazy, useEffect, useRef } from "react"
import Lenis from "lenis"
// Components
import { About } from "./components/About/About"
import { Advice } from "./components/Advice/Advice"
import { Carousel } from "./components/Carousel/Carousel"
import { ExpertWorkshops } from "./components/ExpertWorshops/ExpertWorkshops"
import { Faq } from "./components/Faq/Faq"
import { Footer } from "./components/Footer/Footer"
import { Hero } from "./components/Hero/Hero"
import { Marquee } from "./components/Marquee/Marquee"
import { MarqueeContainerWrapper } from "./components/Marquee/Marquee.styled"
import { Navbar } from "./components/Navbar/Navbar"
import { Newsletter } from "./components/Newsletter/Newsletter"
import { Partners } from "./components/Partners/Partners"
import { Schedule } from "./components/Schedule/Schedule"
// CSS
import "./css/global.css"
import { config } from "./config"
import { getAnalytics } from "./modules/analytics/segment"
import { AppContainer } from "./App.styled"

// Lazy load VideoSection component
const VideoSection = lazy(() =>
  import("./components/VideoSection/VideoSection").then((module) => ({
    default: module.VideoSection,
  }))
)

// Loading fallback component
const VideoSectionLoader = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000",
        color: "#fff",
        fontSize: "18px",
      }}
    >
      Cargando video...
    </div>
  )
}

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

        <About />

        <Schedule />

        <MarqueeContainerWrapper>
          <Marquee />
        </MarqueeContainerWrapper>

        <Suspense fallback={<VideoSectionLoader />}>
          <VideoSection />
        </Suspense>

        <Partners />

        <MarqueeContainerWrapper>
          <Marquee />
        </MarqueeContainerWrapper>

        <ExpertWorkshops />

        <MarqueeContainerWrapper>
          <Marquee />
        </MarqueeContainerWrapper>

        <Advice />

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
