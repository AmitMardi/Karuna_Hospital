'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, HeartPulse } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/#about' },
  { name: 'Departments', href: '/#departments' },
  { name: 'Doctors', href: '/doctors' },
  { name: 'Facilities', href: '/#facilities' },
  { name: 'Gallery', href: '/#gallery' },
  { name: 'Contact', href: '/#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-surface/90 backdrop-blur-md py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-primary/10 p-2 rounded-xl group-hover:bg-primary/20 transition-colors">
            <HeartPulse className="w-8 h-8 text-primary" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg md:text-xl text-text leading-tight">
              Karuna Holistic
            </span>
            <span className="text-xs text-text-muted font-medium">
              Hospital & Institute
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-text-muted hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <a
            href="tel:+919876543210"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-xl font-medium hover:bg-primary-dark transition-all shadow-sm hover:shadow-md active:scale-95"
          >
            <Phone className="w-4 h-4" />
            <span>24x7 Helpline</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 text-text hover:bg-surface-alt rounded-lg transition-colors"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open Menu"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav Drawer */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-50 lg:hidden transition-opacity duration-300 ${
          mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <span className="font-bold text-lg text-text">Menu</span>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-text-muted hover:bg-surface-alt rounded-lg transition-colors"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6 flex flex-col gap-6 overflow-y-auto">
          <ul className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-lg font-medium text-text hover:text-primary py-2"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          
          <div className="mt-auto pt-6 border-t border-gray-100">
            <p className="text-sm text-text-muted mb-4 font-medium">Emergency Contact</p>
            <a
              href="tel:+919876543210"
              className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-4 rounded-xl font-medium hover:bg-primary-dark transition-colors w-full text-lg"
            >
              <Phone className="w-5 h-5" />
              <span>+91 98765 43210</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
