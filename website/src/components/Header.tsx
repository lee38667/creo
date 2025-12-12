'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BRAND, NAVIGATION } from '@/config/brand';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-dark-200">
      <nav className="container-brand flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-900 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">CM</span>
          </div>
          <span className="text-xl font-bold text-dark-900 hidden sm:inline group-hover:text-primary-700 transition-colors">
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {NAVIGATION.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-dark-700 hover:text-primary-700 font-medium transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Link href="/contact" className="btn-primary text-sm">
            Get Started
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-6 h-0.5 bg-dark-900 transition-all ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span className={`w-6 h-0.5 bg-dark-900 transition-all ${isOpen ? 'opacity-0' : ''}`} />
          <span
            className={`w-6 h-0.5 bg-dark-900 transition-all ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden border-t border-dark-200 bg-white">
          <div className="container-brand py-4 flex flex-col gap-4">
            {NAVIGATION.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-dark-700 hover:text-primary-700 font-medium transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary text-sm">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
