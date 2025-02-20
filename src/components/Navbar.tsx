import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/tutorial', label: 'Help' },
    { to: '/download', label: 'Download' },
    { to: '/credits', label: 'Credits' },
    { to: '/donate', label: 'Donate' }
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const linkVariants = {
    hover: { 
      scale: 1.05,
      transition: { duration: 0.2, ease: "easeInOut" }
    }
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-4' : 'py-6'
      }`}
    >
      {/* background */}
      <div className={`absolute inset-0 transition-all duration-500 ${
        scrolled || isOpen ? 'opacity-100' : 'opacity-0'
      }`}>
        {/* Base blur layer */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl" />
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
        
        {/* Noise texture */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjYSkiIG9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20" />
        
        {/* Bottom border gradient */}
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-white/30 via-white/10 to-white/30 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="relative">
                <motion.img
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="h-10 w-10 rounded-full"
                  src="https://i.ibb.co/k0Y4yB1/xeno.png"
                  alt="Xeno"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-full" />
              </div>
            </motion.div>
            <motion.span 
              className="text-2xl font-bold bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Xeno
            </motion.span>
          </Link>

          {/* Navigation Links - Centered */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map(({ to, label }) => (
              <motion.div
                key={to}
                variants={linkVariants}
                whileHover="hover"
              >
                <Link
                  to={to}
                  className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-300 overflow-hidden group`}
                >
                  {location.pathname === to && (
                    <motion.div
                      layoutId="navbar-indicator"
                      className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/5 rounded-lg -z-10"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className={`relative z-10 ${
                    location.pathname === to
                      ? 'text-white'
                      : 'text-gray-400 group-hover:text-white'
                  }`}>
                    {label}
                  </span>
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Discord Button */}
          <motion.div 
            className="hidden md:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="https://discord.gg/getxeno"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center space-x-2 px-4 py-2 rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
              <img 
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png"
                alt="Discord"
                className="relative w-5 h-5 group-hover:scale-110 transition-transform duration-300"
              />
              <span className="relative text-sm font-medium text-white group-hover:text-gray-200 transition-colors">Join Discord</span>
            </a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative group p-2 rounded-lg overflow-hidden"
          >
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <Menu className="relative w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden relative"
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-2xl" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
            
            <div className="relative px-6 py-4 space-y-1">
              {navLinks.map(({ to, label }, index) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={to}
                    className={`block px-4 py-2 text-base font-medium rounded-lg transition-all duration-300 relative group overflow-hidden ${
                      location.pathname === to
                        ? 'text-white'
                        : 'text-gray-400 hover:text-white'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <span className="relative">{label}</span>
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <a
                  href="https://discord.gg/getxeno"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 px-4 py-2 text-base font-medium text-white rounded-lg relative group overflow-hidden"
                  onClick={() => setIsOpen(false)}
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <img 
                    src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png"
                    alt="Discord"
                    className="relative w-5 h-5 opacity-75 group-hover:opacity-100 transition-opacity"
                  />
                  <span className="relative">Join Discord</span>
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}