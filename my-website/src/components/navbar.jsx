import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="w-full h-16 relative bg-green-500 flex items-center justify-between px-4">
            <Link to="/" className="font-ubuntu font-extrabold text-gray-800 text-2xl">Kevin Nguyen</Link>
            <div className="hidden sm:flex justify-end items-center gap-14 px-4">
                <div className="justify-start font-bold">
                  <Link to="/" className="font-ubuntu text-gray-800 text-2xl">Home</Link>
                </div>
                <div className="justify-start font-bold">
                  <Link to="/projects" className="font-ubuntu text-gray-800 text-2xl">Projects</Link>
                </div>
                <div className="justify-start font-bold">
                  <Link to="/contacts" className="font-ubuntu text-gray-800 text-2xl">Contacts</Link>
                </div>
            </div>
            <div className="sm:hidden">
               
            </div>
        </div>
  );
}

export default Navbar;