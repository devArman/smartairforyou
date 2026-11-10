import Header from './components/Header'
import Hero from './components/Hero'
import {
  Area, Contact, Faq, Gallery, HeatingCooling, Process, Services, TrustBar,
} from './components/Sections'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to content</a>
      <Header />
      <main id="main">
        <Hero />
        <TrustBar />
        <Services />
        <HeatingCooling />
        <Process />
        <Gallery />
        <Area />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
