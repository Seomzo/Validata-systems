import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import logo from '@/assets/logo.png';

const navLinks = [
  { name: 'Products', path: '/products' },
  { name: 'Technology', path: '/technology' },
  { name: 'About', path: '/about' },
  { name: 'Security', path: '/security' },
  { name: 'Contact', path: '/contact' },
];

export function Navigation() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isHomePage = location.pathname === '/';
  const isDarkTop = isHomePage && !isScrolled;

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isDarkTop 
          ? 'bg-gradient-to-b from-black/50 to-transparent py-2' 
          : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-0'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
            <div className={`transition-all duration-300 ${isDarkTop ? 'brightness-0 invert' : 'brightness-100 invert-0'}`}>
              <img 
                src={logo} 
                alt="Validata Systems" 
                className={`transition-all duration-300 ${isDarkTop ? 'h-11 md:h-12' : 'h-10 md:h-12'}`} 
              />
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center justify-end gap-10 lg:gap-14 flex-1 pr-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-[15px] font-medium transition-colors hover:opacity-100 ${
                  isDarkTop 
                    ? 'text-gray-200 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-indicator"
                    className={`absolute -bottom-[29px] left-0 right-0 h-[3px] rounded-t-lg ${
                      isDarkTop ? 'bg-white' : 'bg-blue-600'
                    }`}
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className={`md:hidden p-2 transition-colors ${
              isDarkTop ? 'text-gray-200 hover:text-white' : 'text-gray-600 hover:text-gray-900'
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-base font-medium transition-colors ${
                    location.pathname === link.path
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}