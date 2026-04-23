import React, { useEffect, useState } from 'react';

const NAV_SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'contacts', label: 'Contacts' },
];

function Navbar({ isDarkMode }) {
  const [activeSection, setActiveSection] = useState('home');
  const isLightSection = !isDarkMode && (activeSection === 'about' || activeSection === 'projects' || activeSection === 'contacts');

  const activeIndex = NAV_SECTIONS.findIndex((section) => section.id === activeSection);
  const safeActiveIndex = activeIndex >= 0 ? activeIndex : 0;
  const previousIndex = (safeActiveIndex - 1 + NAV_SECTIONS.length) % NAV_SECTIONS.length;
  const nextIndex = (safeActiveIndex + 1) % NAV_SECTIONS.length;
  const displaySections = [
    NAV_SECTIONS[previousIndex],
    NAV_SECTIONS[safeActiveIndex],
    NAV_SECTIONS[nextIndex],
  ];

  useEffect(() => {
    const sectionElements = NAV_SECTIONS
      .map((section) => document.getElementById(section.id))
      .filter(Boolean);

    if (sectionElements.length === 0) {
      return undefined;
    }

    const updateActiveSection = () => {
      const activationOffset = window.innerHeight * 0.3;
      const scrollPosition = window.scrollY + activationOffset;
      const isAtPageBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;

      if (isAtPageBottom) {
        setActiveSection(sectionElements[sectionElements.length - 1].id);
        return;
      }

      let currentSectionId = sectionElements[0].id;

      sectionElements.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop) {
          currentSectionId = section.id;
        }
      });

      setActiveSection(currentSectionId);
    };

    let isTicking = false;

    const onScroll = () => {
      if (!isTicking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          isTicking = false;
        });
        isTicking = true;
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-30 group">
      <div className="relative">
        <span
          className={`absolute left-7 top-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full transition-opacity duration-200 group-hover:opacity-0 group-focus-within:opacity-0 ${
            isLightSection ? 'bg-black/80' : 'bg-white/90'
          }`}
          aria-hidden="true"
        />
        <div className={`relative overflow-hidden rounded-r-3xl rounded-l-none max-w-0 opacity-0 pl-0 pr-0 py-5 transition-all duration-300 group-hover:max-w-xs group-hover:opacity-100 group-hover:pl-8 group-hover:pr-5 group-focus-within:max-w-xs group-focus-within:opacity-100 group-focus-within:pl-8 group-focus-within:pr-5 ${
          isLightSection
            ? 'border border-black/25 bg-white/45 backdrop-blur-xl'
            : 'border border-white/35 bg-white/10 backdrop-blur-xl'
        }`}>
          <div
            className={`pointer-events-none absolute -left-10 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border ${
              isLightSection ? 'border-black/25' : 'border-white/30'
            }`}
            aria-hidden="true"
          />
          <div className="relative flex flex-col items-start gap-2 whitespace-nowrap">
            {displaySections.map((section, displayIndex) => {
              const isActive = activeSection === section.id;
              const isSideItem = displayIndex !== 1;

              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`font-ubuntu leading-none flex items-center gap-3 transition-all duration-300 ${
                    isActive
                      ? `${isLightSection ? 'text-black' : 'text-white'} text-4xl font-bold translate-x-2`
                      : `${isLightSection ? 'text-zinc-700 hover:text-black' : 'text-slate-200 hover:text-white'} text-lg font-medium -translate-x-1 scale-90 opacity-80 hover:opacity-100`
                  }`}
                >
                  <span
                    className={`rounded-full transition-all duration-300 ${
                      isActive
                        ? `${isLightSection ? 'bg-black/80' : 'bg-white/90'} w-2.5 h-2.5`
                        : `${isLightSection ? 'bg-black/40' : 'bg-white/45'} w-1.5 h-1.5`
                    } ${isSideItem ? 'opacity-80' : ''}`}
                    aria-hidden="true"
                  />
                  {section.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;