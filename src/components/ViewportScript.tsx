'use client';

import { useEffect } from 'react';

/**
 * Client-side viewport and device detection script
 * Handles dynamic viewport height, orientation changes, and device classification
 */
export default function ViewportScript() {
  useEffect(() => {
    // Set viewport height for mobile browsers
    const setViewportHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      document.documentElement.style.setProperty('--ivh', `${vh}px`);
      document.documentElement.style.setProperty('--svh', `${vh}px`);
      
      const vw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--vw', `${vw}px`);
      
      // Container width for responsive calculations
      const cw = window.innerWidth * 0.01;
      document.documentElement.style.setProperty('--cw', `${cw}rem`);
    };

    // Set on load
    setViewportHeight();

    // Update on resize (debounced)
    let resizeTimer: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setViewportHeight, 250);
    };

    // Update on orientation change
    const handleOrientationChange = () => {
      setTimeout(setViewportHeight, 100);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('orientationchange', handleOrientationChange);

    // Add touch device class
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.documentElement.classList.add('touch-device');
    } else {
      document.documentElement.classList.add('no-touch');
    }

    // Add device class based on screen width
    const updateDeviceClass = () => {
      const width = window.innerWidth;
      document.documentElement.classList.remove(
        'device-mobile',
        'device-tablet',
        'device-desktop'
      );

      if (width < 768) {
        document.documentElement.classList.add('device-mobile');
      } else if (width < 1024) {
        document.documentElement.classList.add('device-tablet');
      } else {
        document.documentElement.classList.add('device-desktop');
      }
    };

    updateDeviceClass();
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(updateDeviceClass, 250);
    });

    // Scrolling direction tracking
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      document.body.setAttribute('data-scrolling-direction', direction);
      document.body.setAttribute(
        'data-scrolling-started',
        currentScrollY > 0 ? 'true' : 'false'
      );
      
      // Header scroll state
      if (currentScrollY > 50) {
        document.body.classList.add('is-header-scrolled');
      } else {
        document.body.classList.remove('is-header-scrolled');
      }
      
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Check for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.documentElement.classList.add('has-reduced-motion');
    }

    // Mark as loaded
    setTimeout(() => {
      document.documentElement.classList.add('has-loaded');
      document.documentElement.classList.remove('is-loading');
    }, 100);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('orientationchange', handleOrientationChange);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return null; // This component doesn't render anything
}
