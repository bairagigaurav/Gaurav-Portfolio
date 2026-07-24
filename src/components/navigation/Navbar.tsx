import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { name: 'Product', path: '/product' },
    { name: 'Solutions', path: '/product#solutions' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Resources', path: '#resources' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-2 font-bold text-xl group" aria-label="FlowPilot Home">
              <Command className="h-6 w-6 text-blue-500 transition-transform group-hover:rotate-6" />
              <span className="text-white">FlowPilot</span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8 items-center" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-blue-400 focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-4 ${
                  location.pathname === link.path ? 'text-blue-400' : 'text-slate-300'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/contact"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-4"
            >
              Login
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-blue-500 focus-visible:outline-offset-2 hover:scale-[1.02] transform active:scale-95 duration-150"
            >
              Start Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close main menu' : 'Open main menu'}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'calc(100vh - 4rem)' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-slate-900 border-t border-slate-800 overflow-y-auto"
          >
            <div className="px-4 pt-4 pb-6 space-y-3 flex flex-col h-full justify-between">
              <div className="space-y-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className="block px-3 py-3 rounded-lg text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-all focus-visible:outline-2 focus-visible:outline-blue-500"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="space-y-3 pb-8 border-t border-slate-800 pt-6">
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-3 rounded-lg text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white transition-all focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  Login
                </Link>
                <Link
                  to="/contact"
                  className="block w-full text-center px-4 py-3 rounded-lg text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-all shadow-md focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  Start Free
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
