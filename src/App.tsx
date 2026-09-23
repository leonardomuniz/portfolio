import { IdiomaProvider } from './i18n/idioma'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Trajetoria from './components/Trajetoria/Trajetoria'
import Experiencia from './components/Experiencia/Experiencia'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <IdiomaProvider>
      <Navbar />
      <Hero />
      <main>
        <Trajetoria />
        <Experiencia />
      </main>
      <Footer />
    </IdiomaProvider>
  )
}

export default App
