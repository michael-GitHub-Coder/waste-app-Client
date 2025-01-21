import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-green-500 p-4 text-white flex justify-between items-center">
      <h1 className="text-2xl font-bold">Enviro365</h1>
      {/* Hamburger Icon for mobile */}
      <button
        className="lg:hidden text-2xl"
        onClick={toggleMenu}
      >
        {isMenuOpen ? '×' : '☰'}
      </button>
      
      {/* Navigation Links */}
      <ul
        className={`lg:flex space-x-6 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}
      >
        <li><a href="#category" className="hover:text-yellow-200">Category Lookup</a></li>
        <li><a href="#guidelines" className="hover:text-yellow-200">Disposal Guidelines</a></li>
        <li><a href="#tips" className="hover:text-yellow-200">Recycling Tips</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
