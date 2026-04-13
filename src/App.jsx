import './App.css'
import Navbar from './components/navbar.jsx'
import Contacts from './pages/contacts.jsx'
import Projects from './pages/projects.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Footer from './components/footer.jsx'

function App() {
  return (
    <div className="Portfolio min-h-screen w-screen flex flex-col">
      <Navbar />
      <main>
        <section id="home" className="scroll-mt-16">
          <Home />
        </section>
        <section id="about" className="scroll-mt-16">
          <About />
        </section>
        <section id="projects" className="scroll-mt-16">
          <Projects />
        </section>
        <section id="contacts" className="scroll-mt-16">
          <Contacts />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
