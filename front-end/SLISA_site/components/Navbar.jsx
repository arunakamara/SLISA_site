import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-800 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <h2 className="text-xl font-bold">SLSU-AP</h2>
        {/* Links */}
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link to="/about" className="hover:underline">About</Link>
          </li>
          <li>
            <Link to="/events" className="hover:underline">Events</Link>
          </li>
          <li>
            <Link to="/news" className="hover:underline">News</Link>
          </li>
          <li>
            <Link to="/membership" className="hover:underline">Membership</Link>
          </li>
          <li>
            <Link to="/resources" className="hover:underline">Resources</Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:underline">Gallery</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:underline">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;