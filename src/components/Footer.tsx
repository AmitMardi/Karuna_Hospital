import Link from 'next/link';
import { HeartPulse, MapPin, Phone, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & Tagline */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-2">
              <HeartPulse className="w-8 h-8 text-primary" />
              <div className="flex flex-col">
                <span className="font-bold text-lg text-text leading-tight">
                  Karuna Holistic
                </span>
                <span className="text-xs text-text-muted font-medium">
                  Hospital & Institute
                </span>
              </div>
            </Link>
            <p className="text-sm text-text-muted leading-relaxed">
              Compassionate, affordable, and holistic healthcare for the community of Buniadpur and beyond. Open 24/7.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-surface-alt flex items-center justify-center text-text-muted hover:bg-primary hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-text mb-6">Quick Links</h3>
            <ul className="flex flex-col gap-3">
              <li><Link href="/#about" className="text-text-muted hover:text-primary transition-colors text-sm">About Us</Link></li>
              <li><Link href="/#departments" className="text-text-muted hover:text-primary transition-colors text-sm">Departments</Link></li>
              <li><Link href="/doctors" className="text-text-muted hover:text-primary transition-colors text-sm">Our Doctors</Link></li>
              <li><Link href="/#facilities" className="text-text-muted hover:text-primary transition-colors text-sm">Facilities</Link></li>
              <li><Link href="/#gallery" className="text-text-muted hover:text-primary transition-colors text-sm">Gallery</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-text mb-6">Contact Us</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm text-text-muted">
                  Kaliyaganj Road, Buniadpur, Narayanpur, West Bengal 733121, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-text-muted">
                  <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm text-text-muted">
                  <a href="mailto:karunahospital@gmail.com" className="hover:text-primary transition-colors">karunahospital@gmail.com</a>
                </span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h3 className="font-bold text-text mb-6">Operating Hours</h3>
            <div className="bg-surface p-4 rounded-xl border border-gray-100">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-text-muted">Monday - Sunday</span>
                <span className="font-medium text-primary">24 Hours</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-text-muted">Emergency</span>
                <span className="font-medium text-primary">Open 24×7</span>
              </div>
            </div>
          </div>
          
        </div>

        <div className="border-t border-gray-100 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Karuna Holistic Hospital and Institute of Medical Science. All rights reserved.
          </p>
          <p className="text-sm text-text-muted font-medium">
            Designed for community healthcare
          </p>
        </div>
      </div>
    </footer>
  );
}
