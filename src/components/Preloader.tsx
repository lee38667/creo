'use client';

import { useEffect, useState } from 'react';

export default function Preloader() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    // Hide preloader after page loads
    const timer = setTimeout(() => {
      setIsHidden(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      data-cid="preloader"
      className={`c-preloader ${isHidden ? 'is-hidden' : ''}`}
    >
      <div className="preloader_inner">
        <div className="preloader_logo">
          <img
            className="logo_src"
            src="/assets/logoCreo.svg"
            alt="Creo Media"
          />
        </div>
      </div>
    </section>
  );
}
