import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w-full h-16 relative bg-green flex items-center justify-between px-4">
            <Link to="/"><div className="font-lato font-bold text-white text-2xl"/>Kevin Nguyen</Link>
            <div className="hidden sm:flex justify-end items-center gap-14 px-4">
                <div className="justify-start text-white text-2xl font-bold font-['DINish'] uppercase"><Link to="/">
                HOME
                </Link></div>
                <div className="justify-start text-white text-2xl font-bold font-lato uppercase"><Link to="/projects">
                PROJECTS
                </Link></div>
                <div className="justify-start text-white text-2xl font-bold font-lato uppercase"><Link to="/contacts">
                CONTACTS
                </Link></div>
            </div>
            <div className="sm:hidden">
               
            </div>
        </div>
  );
}

export default Navbar;