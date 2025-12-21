'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      document.body.setAttribute(
        'data-scrolling-started',
        window.scrollY > 0 ? 'true' : 'false'
      );
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      data-cid="header"
      className={`c-header has-css-loaded ${isScrolled ? 'is-scrolled' : ''}`}
    >
      <div className="header_wrapper">
        <div className="header_inline">
          <Link href="/" className="inline_logo">
            <img src="/assets/logoCreoNoText.svg" alt="Creo Media" />
          </Link>
          <nav className="inline_nav">
            <Link href="#services" className="button">
              <span className="btn_label">Services</span>
            </Link>
            <Link href="#portfolio" className="button">
              <span className="btn_label">Portfolio</span>
            </Link>
            <Link href="#contact" className="button">
              <span className="btn_label">Contact</span>
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
}
