import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './dropdown-menu';

function Navbar() {
  return (
    <div className="w-full h-16 relative bg-green-500 flex items-center justify-between px-4 z-10">
            <Link to="/" className="font-ubuntu font-semibold text-gray-800 text-2xl">Kevin Nguyen</Link>
            <div className="hidden sm:flex justify-end items-center gap-14 px-4">
                <div className="justify-start font-bold">
                  <Link to="/" className="font-ubuntu text-gray-800 text-xl">Home</Link>
                </div>
                <div className="justify-start font-bold">
                  <Link to="/projects" className="font-ubuntu text-gray-800 text-xl">Projects</Link>
                </div>
                <div className="justify-start font-bold">
                  <Link to="/contacts" className="font-ubuntu text-gray-800 text-xl">Contacts</Link>
                </div>
            </div>
            <div className="sm:hidden">
               <DropdownMenu />
            </div>
        </div>
  );
}

export default Navbar;