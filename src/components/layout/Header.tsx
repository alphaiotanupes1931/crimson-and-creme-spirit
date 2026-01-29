import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import alphaIotaLogo from '@/assets/alpha-iota-logo.png';

const navItems = [
  { name: 'Home', href: '/' },
  { 
    name: 'About',
    href: '/about',
    children: [
      { name: 'The Fraternity', href: '/about#fraternity' },

    ]
  },
  { 
    name: 'Brotherhood',
    href: '/brothers',
    children: [
      { name: 'Active Brothers', href: '/brothers#active' },
      { name: 'Recent Graduates', href: '/graduates' },
      { name: 'Journal', href: '/journal' },
      { name: 'Lineage', href: '/lineage' },
      
    ]
  },
  { 
    name: 'Service',
    href: '/service',
    children: [
      { name: 'Community Service', href: '/community-service' },
      { name: 'Events', href: '/events' },
    ]
  },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Portal', href: '/portal' },
  { name: 'Contact', href: '/contact' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-crimson-dark py-2 hidden lg:block">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-6 text-xs text-foreground/70">
            <span className="flex items-center gap-2">
              <MapPin className="w-3 h-3" />
              Morgan State University, Baltimore, MD
            </span>
            <span className="flex items-center gap-2">
              <Phone className="w-3 h-3" />
              Anti-Hazing Hotline: (215) 228-7184
            </span>
          </div>
          <div className="flex items-center gap-4">
            <a href="https://kappaalphapsi1911.com" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/70 hover:text-cream transition-colors flex items-center gap-1">
              IHQ <ExternalLink className="w-3 h-3" />
            </a>
            <a href="https://epkapsi.org" target="_blank" rel="noopener noreferrer" className="text-xs text-foreground/70 hover:text-cream transition-colors flex items-center gap-1">
              Eastern Province <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/95 backdrop-blur-md shadow-lg py-3' 
            : 'bg-background py-4'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={alphaIotaLogo} 
              alt="Alpha Iota Chapter Logo" 
              className="h-14 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div 
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <Link
                  to={item.href}
                  className={`px-4 py-3 text-xs font-semibold uppercase tracking-wider transition-colors flex items-center gap-1 ${
                    location.pathname === item.href 
                      ? 'text-cream' 
                      : 'text-foreground/80 hover:text-cream'
                  }`}
                >
                  {item.name}
                  {item.children && <ChevronDown className="w-3 h-3" />}
                </Link>

                {/* Dropdown */}
                {item.children && (
                  <AnimatePresence>
                    {openDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 w-56 bg-card border border-border shadow-lg"
                      >
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            to={child.href}
                            className="block px-4 py-3 text-sm text-foreground/80 hover:text-cream hover:bg-muted transition-colors border-l-2 border-transparent hover:border-cream"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="cream" size="sm" asChild>
              <Link to="/contact">Info</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[72px] z-40 bg-background border-t border-border lg:hidden overflow-hidden"
          >
            <div className="container mx-auto px-6 py-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={item.href}
                    className="block py-3 text-lg font-semibold text-foreground hover:text-cream transition-colors"
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 border-l-2 border-cream/30">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          to={child.href}
                          className="block py-2 text-sm text-foreground/70 hover:text-cream transition-colors"
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
              <div className="mt-6 pt-6 border-t border-border">
                <Button variant="cream" className="w-full" asChild>
                  <Link to="/contact">Info</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};