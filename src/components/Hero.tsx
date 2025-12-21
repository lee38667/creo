'use client';

import { useEffect } from 'react';

export default function Hero() {
  useEffect(() => {
    // Set hero visibility
    document.body.setAttribute('data-hero-gone', 'false');

    const handleScroll = () => {
      const heroSection = document.querySelector('[data-cid="hero"]');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        const isGone = rect.bottom < 0;
        document.body.setAttribute('data-hero-gone', isGone ? 'true' : 'false');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      data-hero-visible="true"
      data-cid="hero"
      data-js=""
      data-js-state="loaded"
      id="block_hero"
      className="block-hero -type--logo c-hero u-default has-css-loaded"
    >
      <div className="block_inner u-container u-container--1 u-container--pad">
        <h1 className="logo">
          <img
            className="logo_img"
            src="/assets/logoCreo.svg"
            alt="Creo Media Logo"
          />
        </h1>
        <div className="split">
          <div className="split_text">Premium</div>
          <div className="split_text">Creative Agency</div>
          <div className="split_text">Namibia</div>
        </div>
      </div>
      <figure className="hero_background u-absolute-fill">
        <div
          className="background-overlay u-absolute-fill"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        ></div>
        <img
          src="/assets/pexels-karola-g2-6224.jpg"
          alt="Creo Media Background"
          loading="eager"
          className="background-image u-cover-object"
        />
      </figure>
    </section>
  );
}
