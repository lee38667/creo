/**
 * Cinematic Scroll Transition
 * 
 * Creates a scroll-driven pinned animation where:
 * - Section pins when reaching viewport top
 * - Center image zooms and pans inward
 * - Side images translate outward horizontally
 * - Next section content fades and slides in
 * 
 * Dependencies: GSAP 3.x, ScrollTrigger plugin
 */

(function() {
  'use strict';

  /**
   * Initialize the cinematic scroll effect
   */
  function initCinematicScroll() {
    // Check if GSAP and ScrollTrigger are available
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') {
      console.warn('GSAP or ScrollTrigger not found. Cinematic scroll disabled.');
      return;
    }

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Get DOM elements
    const section = document.querySelector('.cinematic-scroll-section');
    
    if (!section) {
      console.warn('Cinematic scroll section not found.');
      return;
    }

    const heading = section.querySelector('.cinematic-heading');
    const imageCenter = section.querySelector('.cinematic-image.center');
    const imageLeft = section.querySelector('.cinematic-image.left');
    const imageRight = section.querySelector('.cinematic-image.right');
    const nextContent = section.querySelector('.cinematic-next-content');

    // Configuration
    const config = {
      // Scroll distance multiplier (200% = 2x viewport height of scrolling)
      scrollDistance: '+=200%',
      
      // Image animations
      centerScale: 1.5,        // Scale from 1 to 1.5
      centerYPan: -10,         // Vertical pan in percentage
      sideXTranslate: 40,      // Side images move 40% outward
      
      // Text animations
      textSlideY: 80,          // Text slides up from 80px below
      
      // Easing (use 'none' for scroll-scrubbing accuracy)
      ease: 'none',
      
      // When animations start/end within scroll progress (0-1)
      timings: {
        headingFadeOut: { start: 0, end: 0.2 },
        imageZoom: { start: 0.1, end: 0.6 },
        imagePan: { start: 0.2, end: 0.7 },
        textFadeIn: { start: 0.6, end: 0.9 }
      }
    };

    // Create main timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: section,
        start: 'top top',           // Pin when section reaches top
        end: config.scrollDistance,  // Scroll distance before unpinning
        pin: true,                   // Pin the section
        scrub: true,                 // Smooth scrubbing (animation follows scroll)
        anticipatePin: 1,            // Prevent jump on pin
        invalidateOnRefresh: true,   // Recalculate on resize
        // markers: true,            // Uncomment for debugging
      }
    });

    // Animation sequence
    // All animations use progress values (0-1) for precise control

    // 1. Fade out heading early
    if (heading) {
      tl.to(heading, {
        opacity: 0,
        ease: config.ease
      }, config.timings.headingFadeOut.start);
    }

    // 2. Zoom center image
    if (imageCenter) {
      tl.to(imageCenter, {
        scale: config.centerScale,
        yPercent: config.centerYPan,
        ease: config.ease
      }, config.timings.imageZoom.start);
    }

    // 3. Translate side images outward
    if (imageLeft) {
      tl.to(imageLeft, {
        xPercent: -config.sideXTranslate,
        ease: config.ease
      }, config.timings.imagePan.start);
    }

    if (imageRight) {
      tl.to(imageRight, {
        xPercent: config.sideXTranslate,
        ease: config.ease
      }, config.timings.imagePan.start);
    }

    // 4. Fade in and slide up next content
    if (nextContent) {
      tl.fromTo(nextContent, 
        {
          opacity: 0,
          y: config.textSlideY
        },
        {
          opacity: 1,
          y: 0,
          ease: config.ease
        }, 
        config.timings.textFadeIn.start
      );
    }

    // Cleanup on page transition (if using swup or similar)
    if (typeof window.swup !== 'undefined') {
      window.swup.hooks.on('page:view', () => {
        ScrollTrigger.getAll().forEach(st => st.kill());
      });
    }

    // Log initialization
    console.log('✓ Cinematic scroll initialized');
  }

  /**
   * Initialize on DOM ready
   */
  function init() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initCinematicScroll);
    } else {
      initCinematicScroll();
    }
  }

  // Auto-initialize
  init();

  // Expose for manual initialization if needed
  window.CinematicScroll = {
    init: initCinematicScroll
  };

})();
