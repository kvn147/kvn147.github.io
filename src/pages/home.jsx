import { useRef, useState } from "react";
import "../components/background.css"
import ResumeButton from '../components/resume.jsx';

function Home({ isDarkMode, onToggleDarkMode }) {
  return (
    <div className="home min-h-screen">
      <Header isDarkMode={isDarkMode} onToggleDarkMode={onToggleDarkMode} />
    </div>
  );
}

function Header({ isDarkMode, onToggleDarkMode }) {
  const [kBursts, setKBursts] = useState([]);
  const lastEmitRef = useRef(0);

  const emitK = (x, y) => {
    const id = `${Date.now()}-${Math.random()}`;
    setKBursts((prev) => [...prev, { id, x, y }]);
    window.setTimeout(() => {
      setKBursts((prev) => prev.filter((k) => k.id !== id));
    }, 900);
  };

  const handleMouseMove = (e) => {
    const now = performance.now();
    if (now - lastEmitRef.current < 60) return;
    lastEmitRef.current = now;

    const rect = e.currentTarget.getBoundingClientRect();
    emitK(e.clientX - rect.left, e.clientY - rect.top);
  };

  return (
    <>
      <div className="absolute top-6 right-10 z-20 flex items-center gap-3">
        <button
          type="button"
          onClick={onToggleDarkMode}
          className="liquid-glass-button"
        >
          {isDarkMode ? 'Light' : 'Dark'} Mode
        </button>
        <ResumeButton />
      </div>
      <div
        className="relative inset-x-0 top-0 h-screen flex flex-col justify-center items-center text-white font-ubuntu header-background z-0 px-5"
        onMouseMove={handleMouseMove}
      >
        {kBursts.map((k) => (
          <span
            key={k.id}
            className="mouse-k-burst"
            style={{ left: `${k.x}px`, top: `${k.y}px` }}
            aria-hidden="true"
          >
            *
          </span>
        ))}

        <div className="text-7xl font-semibold relative z-10">Hello, I'm Kevin Nguyen!</div>
        <div className="text-2xl mt-4 relative z-10">I'm a passionate software developer studying CS at the University of Washington.</div>
      </div>
    </>
  )
}
export default Home;