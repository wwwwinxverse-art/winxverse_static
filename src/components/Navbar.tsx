import { MenuIcon, XIcon } from 'lucide-react';
import { PrimaryButton } from './Buttons';
import { Link } from "react-router-dom";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', to: '/', type: 'route' },
    { name: 'About', to: '/aboutus', type: 'route' },
    { name: 'Services', to: '/services', type: 'route' },
    { name: 'Features', to: '/#features', type: 'hash' },
    { name: 'Contact', to: '/contact', type: 'route' },
    { name: 'Blog', to: '/webdevelopment', type: 'route' },
    { name: 'FAQ', to: '/#faq', type: 'hash' },
  ];

  return (
    <motion.nav
      className='fixed top-5 left-0 right-0 z-50 px-4'
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 250, damping: 70, mass: 1 }}
    >
      <div className='max-w-7xl mx-auto flex items-center justify-between bg-black/50 backdrop-blur-md border border-white/4 rounded-2xl p-3'>
        
        {/* LOGO */}
        <Link to="/">
          <img src='/images/WLogo.png' alt="logo" className="h-11 ml-2" />
        </Link>

        {/* DESKTOP MENU */}
        <div className='hidden md:flex items-center gap-8 text-sm font-medium text-gray-300'>
          {navLinks.map((link) =>
            link.type === 'route' ? (
              <Link
                key={link.name}
                to={link.to}
                className="hover:text-white transition"
              >
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.to}
                className="hover:text-white transition"
              >
                {link.name}
              </a>
            )
          )}
        </div>

        {/* BUTTON */}
        <div className='hidden md:flex items-center gap-3'>
          <Link to="/contact">
            <PrimaryButton className="max-sm:text-xs hidden sm:inline-block">
              Get Started
            </PrimaryButton>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
          <MenuIcon className='size-6' />
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`flex flex-col items-center justify-center gap-6 text-lg font-medium fixed inset-0 bg-black/40 backdrop-blur-md z-50 transition-all duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navLinks.map((link) =>
          link.type === 'route' ? (
            <Link
              key={link.name}
              to={link.to}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ) : (
            <a
              key={link.name}
              href={link.to}
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          )
        )}

        <Link to="/contact" onClick={() => setIsOpen(false)}>
          <PrimaryButton>Get Started</PrimaryButton>
        </Link>

        <button
          onClick={() => setIsOpen(false)}
          className="rounded-md bg-white p-2 text-gray-800 ring-white active:ring-2"
        >
          <XIcon />
        </button>
      </div>
    </motion.nav>
  );
}