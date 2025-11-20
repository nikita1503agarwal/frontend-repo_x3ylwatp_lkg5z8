import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Collections from './components/Collections'
import FeaturedGrid from './components/FeaturedGrid'
import USP from './components/USP'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-white text-black">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <Collections />
        <FeaturedGrid />
        <USP />
      </main>
      <Footer />
    </div>
  )
}

export default App
