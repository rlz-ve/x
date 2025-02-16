import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  const socialLinks = [
    { 
      icon: () => (
        <img 
          src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png"
          alt="Discord"
          className="w-6 h-6 opacity-75 group-hover:opacity-100 transition-opacity"
        />
      ),
      href: 'https://discord.gg/getxeno',
      label: 'Discord'
    },
    { icon: Github, href: 'https://github.com/Riz-ve', label: 'GitHub' }
  ];

  const navLinks = [
    { to: '/credits', label: 'Credits' },
    { to: '/tutorial', label: 'Help' },
    { to: '/download', label: 'Download' },
    { to: '/donate', label: 'Donate' }
  ];

  return (
    <footer className="relative bg-black/50 backdrop-blur-xl border-t border-white/5">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(255,255,255,0.1),rgba(255,255,255,0))]" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-6 justify-center md:justify-start"
          >
            <Link to="/" className="group relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-white/20 via-white/10 to-white/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                src="https://i.ibb.co/k0Y4yB1/xeno.png"
                alt="Xeno"
                className="h-10 w-10 rounded-full"
              />
            </Link>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />
            <div className="text-lg bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text text-transparent font-medium">
              Experience the future
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {navLinks.map((link, index) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-gray-400 hover:text-white transition-colors relative group"
              >
                <span className="relative">
                  {link.label}
                  <span className="absolute left-0 right-0 bottom-0 h-px bg-gradient-to-r from-white/0 via-white to-white/0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </span>
              </Link>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center md:justify-end gap-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
                aria-label={label}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="absolute -inset-3 bg-gradient-to-r from-white/20 via-white/10 to-white/5 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />
                {typeof Icon === 'function' ? (
                  <div className="relative transform transition-all duration-300">
                    <Icon />
                  </div>
                ) : (
                  <Icon className="w-6 h-6 text-gray-400 group-hover:text-white transition-all duration-300" />
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}