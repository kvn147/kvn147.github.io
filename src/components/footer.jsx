import React from 'react';

function Footer({ isDarkMode }) {
  return (
    <footer className="mt-auto z-10">
        <div className={`w-full align-center py-4 transition-colors duration-300 ${isDarkMode ? 'bg-[#050a1a]' : 'bg-slate-300'}`}>
            <div className={`font-lg font-medium font-ubuntu text-center ${isDarkMode ? 'text-slate-100' : 'text-gray-800'}`}>Copyright © 2026 Kevin Nguyen</div>
        </div>
    </footer>
  );
}

export default Footer;