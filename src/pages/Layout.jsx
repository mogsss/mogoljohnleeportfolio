import React, { useState } from 'react';
import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X } from 'lucide-react';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const isActive = (path) => location.pathname === path;

  const baseClass = "hover:text-gray-600";
  const activeClass = "text-blue-400 font-bold";

  return (
    <>
      <nav style={{ backgroundColor: '#021526' }} className="shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-bold text-white">
              Mogs<span className="text-teal-400">tech</span><span>&lt;/&gt;</span>.
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6 text-white font-medium">
              <Link to="/" className={`${baseClass} ${isActive('/') ? activeClass : ''}`}>Home</Link>
              <Link to="/about" className={`${baseClass} ${isActive('/about') ? activeClass : ''}`}>About</Link>
              <Link to="/projects" className={`${baseClass} ${isActive('/projects') ? activeClass : ''}`}>Projects</Link>
              <Link to="/contact" className={`${baseClass} ${isActive('/contact') ? activeClass : ''}`}>Contact</Link>
            </div>

            {/* Hamburger Button */}
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-white block hover:text-gray-400">
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden text-end px-4 pb-4 space-y-2 text-white font-medium" style={{ backgroundColor: '#021526' }}>
            <Link to="/" onClick={toggleMenu} className={`block ${baseClass} ${isActive('/') ? activeClass : ''}`}>Home</Link>
            <Link to="/about" onClick={toggleMenu} className={`block ${baseClass} ${isActive('/about') ? activeClass : ''}`}>About</Link>
            <Link to="/projects" onClick={toggleMenu} className={`block ${baseClass} ${isActive('/projects') ? activeClass : ''}`}>Projects</Link>
            <Link to="/contact" onClick={toggleMenu} className={`block ${baseClass} ${isActive('/contact') ? activeClass : ''}`}>Contact</Link>
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
}
