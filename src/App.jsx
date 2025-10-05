import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import MockTests from './components/MockTests'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <MockTests />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App
