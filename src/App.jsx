import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/navbar.jsx'
import Contacts from './pages/contacts.jsx'
import Projects from './pages/projects.jsx'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Footer from './components/footer.jsx'

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode((previousMode) => !previousMode);
  };

  return (
    <div className={`Portfolio min-h-screen w-screen flex flex-col transition-colors duration-300 ${isDarkMode ? 'bg-[#0b132b] text-white' : 'bg-white text-black'}`}>
      <Navbar isDarkMode={isDarkMode} />
      <main>
        <section id="home" className="scroll-mt-16">
          <Home isDarkMode={isDarkMode} onToggleDarkMode={handleToggleDarkMode} />
        </section>
        <section id="about" className="scroll-mt-16">
          <About isDarkMode={isDarkMode} />
        </section>
        <section id="projects" className="scroll-mt-16">
          <Projects isDarkMode={isDarkMode} />
        </section>
        <section id="contacts" className="scroll-mt-16">
          <Contacts isDarkMode={isDarkMode} />
        </section>
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  )
}

export default App
