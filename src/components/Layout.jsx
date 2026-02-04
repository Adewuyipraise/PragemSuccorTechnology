import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/pragemlogo3.png';
import logo1 from '../assets/pragemlogo1.jpg';
import { Menu, X, Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Media Company', path: '/media-company' },
    { name: 'Media Academy', path: '/media-academy' },
    { name: 'Services', path: '/services' },
    { name: 'Books', path: '/books' },
    { name: 'Videos', path: '/videos' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => {
    return location.pathname === path ? 'text-primary font-bold' : 'text-gray-700 hover:text-primary';
  };

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center">
                <img
                  src={logo}
                  alt="Pragem Succor Technology Logo"
                  className="h-20 w-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path)}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-primary focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(link.path)}`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <img
                  src={logo1}
                  alt="Pragem Succor Technology Logo"
                  className="h-20 w-auto object-contain"
                />
              <p className="text-gray-400 mb-4">
                A leading Media Group dedicated to excellence in production, education, and publishing.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Divisions</h3>
              <ul className="space-y-2">
                <li><Link to="/media-company" className="text-gray-400 hover:text-primary">Media Company</Link></li>
                <li><Link to="/media-academy" className="text-gray-400 hover:text-primary">Media Academy</Link></li>
                <li><Link to="/books" className="text-gray-400 hover:text-primary">Books & Publications</Link></li>
                <li><Link to="/videos" className="text-gray-400 hover:text-primary">Video & Broadcast</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-400">
                  <MapPin size={18} className="mr-2 flex-shrink-0" />
                  <span>Lagos, Nigeria</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Phone size={18} className="mr-2 flex-shrink-0" />
                  <span>+234 902 595 8168</span>
                </li>
                <li className="flex items-center text-gray-400">
                  <Mail size={18} className="mr-2 flex-shrink-0" />
                  <span>rasheedpesedie@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Pragem Succor Technology. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
