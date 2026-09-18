"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Features", href: "#features" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <Link href="#home" className="font-bebas text-3xl tracking-wider text-text-primary">
              GYM<span className="text-primary">FIT</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-text-primary hover:text-primary transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="#login" className="text-sm font-medium text-text-primary hover:text-primary transition-colors">
              Log In
            </Link>
            <Link
              href="#contact"
              className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded text-sm font-medium transition-colors"
            >
              Join Now
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-text-primary hover:text-primary transition-colors p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-b border-border">
          <div className="px-2 pt-2 pb-6 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-4 text-base font-medium text-text-primary hover:text-primary border-b border-border/50"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-6 px-3">
              <Link
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded font-medium transition-colors"
              >
                Join Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
