import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-gray-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold text-white"> Mogs<span className="text-black">tech</span>.</div>
          <div className="hidden md:flex space-x-6 text-black font-medium">
            <a href="#home" className="hover:text-white ">Home</a>
            <a href="#about" className="hover:text-white">About</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

{menuOpen && (
  <div className=" md:hidden absolute  right-0 top-16 w-60 bg-gray-600 shadow-md border-1 rounded-md flex flex-col space-y-4 py-6 px-6 text-end text-black font-medium z-50">
    <a href="#home" className="hover:text-white">Home</a>
    <a href="#about" className="hover:text-white">About</a>
    <a href="#projects" className="hover:text-white">Projects</a>
    <a href="#contact" className="hover:text-white">Contact</a>
  </div>
)}
      </div>
    </nav>
  );
}
