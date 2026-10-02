import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Team from './components/Team';
import About from './components/About';
import Stats from './components/Stats'
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';



function App() {
  return (
    <div>

      <Hero />
      <Navbar />
      <Portfolio />
      <Services />
      <Team/>
      <About/>
      <Stats />
      <Blog />
      <Contact />
      <Footer />
      
    </div>
  )
}

export default App
