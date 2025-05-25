import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar.jsx'
import Contacts from './pages/contacts.jsx'
import Projects from './pages/projects.tsx'
import Home from './pages/home.tsx'
import Footer from './components/footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div className="Portfolio min-h-screen w-screen flex flex-col">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
