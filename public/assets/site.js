(function () {
  "use strict";

  // ============================================================================
  // UTILITIES & HELPERS
  // ============================================================================

  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  const html = document.documentElement;
  const body = document.body;

  function debounce(fn, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  }

  function throttle(fn, limit) {
    let inThrottle;
    return function (...args) {
      if (!inThrottle) {
        fn.apply(this, args);
        inThrottle = true;
        setTimeout(() => (inThrottle = false), limit);
      }
    };
  }

  function ready(fn) {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", fn, { once: true });
    } else {
      fn();
    }
  }

  // ============================================================================
  // VIEWPORT VARIABLES
  // ============================================================================

  function setViewportVars() {
    const vh = window.innerHeight * 0.01;
    const vw = window.innerWidth * 0.01;
    html.style.setProperty("--vh", `${vh}px`);
    html.style.setProperty("--vw", `${vw}px`);
    html.style.setProperty("--ivh", `${vh}px`);
  }
  setViewportVars();
  window.addEventListener("resize", debounce(setViewportVars, 100));

  // ============================================================================
  // PRELOADER
  // ============================================================================

  function hidePreloader() {
    const preloader = document.querySelector(".c-preloader[data-cid]");
    if (!preloader) return;

    setTimeout(() => {
      preloader.classList.add("is-hidden");
      setTimeout(() => {
        preloader.style.display = "none";
      }, 800);
    }, 300);
  }

  // ============================================================================
  // SPLIT TEXT ANIMATION
  // ============================================================================

  function initSplitAnimations() {
    if (prefersReduced) return;
    const targets = document.querySelectorAll(
      "[data-split-animation], .js-split-animation"
    );

    targets.forEach((el) => {
      if (el.querySelector(".word")) {
        revealElement(el);
        return;
      }

      const text = el.textContent || "";
      const words = text.split(/(\s+)/);
      const frag = document.createDocumentFragment();

      words.forEach((w) => {
        if (/\s+/.test(w)) {
          frag.appendChild(document.createTextNode(w));
        } else {
          const span = document.createElement("span");
          span.className = "word";
          span.textContent = w;
          frag.appendChild(span);
        }
      });

      el.textContent = "";
      el.appendChild(frag);
      revealElement(el);
    });
  }

  function revealElement(el) {
    const words = el.querySelectorAll(".word");
    words.forEach((w, i) => {
      w.style.transition =
        "opacity 600ms cubic-bezier(0.22, 1, 0.36, 1), transform 600ms cubic-bezier(0.22, 1, 0.36, 1)";
      w.style.transitionDelay = `${Math.min(i * 40, 1200)}ms`;
      requestAnimationFrame(() => {
        w.style.opacity = "1";
        w.style.transform = "translateY(0)";
      });
    });
  }

  // ============================================================================
  // INTERSECTION OBSERVER - SCROLL REVEALS
  // ============================================================================

  function initScrollReveals() {
    if (prefersReduced || !("IntersectionObserver" in window)) return;

    const revealTargets = document.querySelectorAll(
      "[data-reveal], .js-reveal, .montage-item, .scatter-item"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible", "is-inview");
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    revealTargets.forEach((target) => {
      target.style.opacity = "0";
      target.style.transform = "translateY(40px)";
      target.style.transition =
        "opacity 800ms cubic-bezier(0.22, 1, 0.36, 1), transform 800ms cubic-bezier(0.22, 1, 0.36, 1)";
      observer.observe(target);
    });
  }

  // ============================================================================
  // PARALLAX EFFECTS
  // ============================================================================

  function initParallax() {
    if (prefersReduced) return;

    const parallaxElements = document.querySelectorAll(
      "[data-parallax], .parallax-bg"
    );
    if (!parallaxElements.length) return;

    const handleScroll = throttle(() => {
      const scrolled = window.pageYOffset;

      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0.5");
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;

        if (inView) {
          const yPos = -(scrolled - el.offsetTop) * speed;
          el.style.transform = `translate3d(0, ${yPos}px, 0)`;
        }
      });
    }, 16);

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
  }

  // ============================================================================
  // SCROLL ANIMATIONS (data-onscroll)
  // ============================================================================

  function initScrollAnimations() {
    if (prefersReduced) return;

    const scrollElements = document.querySelectorAll("[data-onscroll]");
    if (!scrollElements.length) return;

    const parseValue = (str) => {
      try {
        return JSON.parse(str);
      } catch (e) {
        return {};
      }
    };

    const lerp = (start, end, progress) => start + (end - start) * progress;

    const applyStyles = (el, styles) => {
      Object.entries(styles).forEach(([prop, value]) => {
        if (prop === "scale") {
          const current = el.style.transform || "";
          const otherTransforms = current.replace(/scale\([^)]+\)/g, "").trim();
          el.style.transform = `${otherTransforms} scale(${value})`.trim();
        } else if (prop === "x" || prop === "y") {
          const current = el.style.transform || "";
          const xMatch = current.match(/translateX\(([^)]+)\)/);
          const yMatch = current.match(/translateY\(([^)]+)\)/);
          const currentX = xMatch ? xMatch[1] : "0px";
          const currentY = yMatch ? yMatch[1] : "0px";
          const otherTransforms = current
            .replace(/translate[XY]\([^)]+\)/g, "")
            .trim();

          const newX = prop === "x" ? value : currentX;
          const newY = prop === "y" ? value : currentY;
          el.style.transform =
            `${otherTransforms} translateX(${newX}) translateY(${newY})`.trim();
        } else if (prop === "rotate") {
          const current = el.style.transform || "";
          const otherTransforms = current
            .replace(/rotate\([^)]+\)/g, "")
            .trim();
          el.style.transform = `${otherTransforms} rotate(${value})`.trim();
        } else {
          el.style[prop] = value;
        }
      });
    };

    const handleScrollAnimation = throttle(() => {
      const scrollTop = window.pageYOffset;
      const viewportHeight = window.innerHeight;

      scrollElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const elementTop = rect.top + scrollTop;
        const elementHeight = rect.height;

        // Parse offset: "0, 200" or "-100px, 0"
        const offset = el.dataset.onscrollOffset || "0, 0";
        const [startOffset, endOffset] = offset
          .split(",")
          .map((v) => parseInt(v.trim()) || 0);

        // Parse start/end positions: "start start", "top bottom", etc.
        const startPos = el.dataset.onscrollStart || "top bottom";
        const endPos = el.dataset.onscrollEnd || "bottom top";

        // Calculate trigger points
        let triggerStart, triggerEnd;

        if (startPos === "start start" || startPos === "top top") {
          triggerStart = elementTop - viewportHeight + startOffset;
        } else if (startPos === "top bottom") {
          triggerStart = elementTop - viewportHeight + startOffset;
        } else {
          triggerStart = elementTop + startOffset;
        }

        if (endPos === "bottom top") {
          triggerEnd = elementTop + endOffset;
        } else if (endPos === "bottom bottom") {
          triggerEnd = elementTop + elementHeight + endOffset;
        } else {
          triggerEnd = elementTop + elementHeight + endOffset;
        }

        // Calculate progress (0 to 1)
        const totalDistance = triggerEnd - triggerStart;
        const currentScroll = scrollTop;
        let progress = (currentScroll - triggerStart) / totalDistance;
        progress = Math.max(0, Math.min(1, progress));

        // Parse from/to states
        const fromState = parseValue(el.dataset.onscrollFrom || "{}");
        const toState = parseValue(el.dataset.onscrollTo || "{}");

        // Interpolate and apply
        const currentState = {};
        Object.keys({ ...fromState, ...toState }).forEach((key) => {
          const fromVal = fromState[key];
          const toVal = toState[key];

          if (typeof fromVal === "number" && typeof toVal === "number") {
            currentState[key] = lerp(fromVal, toVal, progress);
          } else if (typeof fromVal === "string" && typeof toVal === "string") {
            // Handle string values with units
            const fromNum = parseFloat(fromVal);
            const toNum = parseFloat(toVal);
            const unit = fromVal.replace(/[0-9.-]/g, "");

            if (!isNaN(fromNum) && !isNaN(toNum)) {
              currentState[key] = `${lerp(fromNum, toNum, progress)}${unit}`;
            } else {
              currentState[key] = progress < 0.5 ? fromVal : toVal;
            }
          } else {
            currentState[key] = progress < 0.5 ? fromVal : toVal;
          }
        });

        applyStyles(el, currentState);
      });
    }, 16);

    window.addEventListener("scroll", handleScrollAnimation, { passive: true });
    window.addEventListener("resize", handleScrollAnimation, { passive: true });
    handleScrollAnimation();
  }

  // ============================================================================
  // TEXT MARQUEE
  // ============================================================================

  function initMarquee() {
    const marquees = document.querySelectorAll("[data-marquee], .text-marquee");

    marquees.forEach((marquee) => {
      const inner = marquee.querySelector(".marquee-inner, .marquee-content");
      if (!inner) return;

      const speed = parseFloat(marquee.dataset.marqueeSpeed || "60");
      const direction = marquee.dataset.marqueeDirection || "left";

      // Clone content for seamless loop
      const clone = inner.cloneNode(true);
      marquee.appendChild(clone);

      // Calculate animation duration based on width
      const width = inner.offsetWidth;
      const duration = width / speed;

      const keyframes =
        direction === "left"
          ? [
              { transform: "translateX(0)" },
              { transform: `translateX(-${width}px)` },
            ]
          : [
              { transform: "translateX(-100%)" },
              { transform: "translateX(0)" },
            ];

      inner.animate(keyframes, {
        duration: duration * 1000,
        iterations: Infinity,
        easing: "linear",
      });

      clone.animate(keyframes, {
        duration: duration * 1000,
        iterations: Infinity,
        easing: "linear",
      });
    });
  }

  // ============================================================================
  // SMOOTH SCROLL
  // ============================================================================

  function initSmoothScroll() {
    const supportsScroll = "scrollBehavior" in html.style;

    document.addEventListener("click", (e) => {
      const a = e.target.closest('a[href^="#"]');
      if (!a) return;

      const id = a.getAttribute("href").slice(1);
      if (!id) return;

      const target = document.getElementById(id);
      if (!target) return;

      e.preventDefault();

      if (prefersReduced || !supportsScroll) {
        target.scrollIntoView();
      } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }

      // Update URL hash
      if (history.pushState) {
        history.pushState(null, null, `#${id}`);
      }
    });
  }

  // ============================================================================
  // MODAL & MEDIA FORMS
  // ============================================================================

  function initModals() {
    // Open modal
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-modal-open], [data-media-modal]");
      if (!trigger) return;

      const modalId = trigger.dataset.modalOpen || trigger.dataset.mediaModal;
      const modal =
        document.getElementById(modalId) ||
        document.querySelector(`.modal[data-id="${modalId}"]`);

      if (modal) {
        e.preventDefault();
        openModal(modal);
      }
    });

    // Close modal
    document.addEventListener("click", (e) => {
      const closeBtn = e.target.closest("[data-close], .modal-close");
      if (closeBtn) {
        const modal = closeBtn.closest('[role="dialog"], .modal, .c-modal');
        if (modal) {
          e.preventDefault();
          closeModal(modal);
        }
      }

      // Close on backdrop click
      if (e.target.matches(".modal, .c-modal")) {
        closeModal(e.target);
      }
    });

    // Close on ESC
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        const openModal = document.querySelector(
          ".modal.is-open, .c-modal.is-open"
        );
        if (openModal) closeModal(openModal);
      }
    });
  }

  function openModal(modal) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    body.classList.add("modal-open");

    // Focus trap
    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    if (focusable.length) focusable[0].focus();

    // Load video if present
    const video = modal.querySelector("[data-video-src]");
    if (video && !video.src) {
      video.src = video.dataset.videoSrc;
    }
  }

  function closeModal(modal) {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
    body.classList.remove("modal-open");

    // Pause/stop videos
    const videos = modal.querySelectorAll("video, iframe");
    videos.forEach((v) => {
      if (v.tagName === "VIDEO") {
        v.pause();
        v.currentTime = 0;
      } else if (v.src.includes("youtube") || v.src.includes("vimeo")) {
        v.src = v.src;
      }
    });
  }

  // ============================================================================
  // FORM VALIDATION & HANDLING
  // ============================================================================

  function initForms() {
    const forms = document.querySelectorAll("form[data-validate]");

    forms.forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();

        const inputs = form.querySelectorAll(
          "input[required], textarea[required], select[required]"
        );
        let isValid = true;

        inputs.forEach((input) => {
          if (!input.value.trim()) {
            isValid = false;
            input.classList.add("is-invalid");
            input.setAttribute("aria-invalid", "true");
          } else {
            input.classList.remove("is-invalid");
            input.removeAttribute("aria-invalid");
          }

          // Email validation
          if (input.type === "email" && input.value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(input.value)) {
              isValid = false;
              input.classList.add("is-invalid");
            }
          }
        });

        if (isValid) {
          // Submit form (AJAX or default)
          submitForm(form);
        }
      });

      // Clear errors on input
      form.addEventListener("input", (e) => {
        if (e.target.matches("input, textarea, select")) {
          e.target.classList.remove("is-invalid");
          e.target.removeAttribute("aria-invalid");
        }
      });
    });
  }

  function submitForm(form) {
    const formData = new FormData(form);
    const submitBtn = form.querySelector('[type="submit"]');

    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = submitBtn.dataset.loadingText || "Sending...";
    }

    // Simulate AJAX submit (replace with actual endpoint)
    setTimeout(() => {
      form.classList.add("is-success");
      if (submitBtn) {
        submitBtn.textContent = submitBtn.dataset.successText || "Sent!";
      }

      setTimeout(() => {
        form.reset();
        form.classList.remove("is-success");
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = submitBtn.dataset.originalText || "Submit";
        }
      }, 3000);
    }, 1000);
  }

  // ============================================================================
  // LAZY LOADING IMAGES
  // ============================================================================

  function initLazyLoad() {
    if (!("IntersectionObserver" in window)) return;

    const lazyImages = document.querySelectorAll(
      'img[loading="lazy"], img[data-src], [data-bg]'
    );

    const imageObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;

            if (el.dataset.src) {
              el.src = el.dataset.src;
              el.removeAttribute("data-src");
            }

            if (el.dataset.bg) {
              el.style.backgroundImage = `url(${el.dataset.bg})`;
              el.removeAttribute("data-bg");
            }

            el.classList.add("is-loaded");
            imageObserver.unobserve(el);
          }
        });
      },
      { rootMargin: "50px" }
    );

    lazyImages.forEach((img) => imageObserver.observe(img));
  }

  // ============================================================================
  // NAVIGATION & HEADER
  // ============================================================================

  function initNavigation() {
    const header = document.querySelector("header, .header, .c-header");
    if (!header) return;

    const menuToggle = header.querySelector(
      "[data-menu-toggle], .menu-toggle, .hamburger"
    );
    const menu = header.querySelector("nav, .nav, .menu");

    // Menu toggle
    if (menuToggle && menu) {
      menuToggle.addEventListener("click", () => {
        const isOpen = menu.classList.toggle("is-open");
        menuToggle.classList.toggle("is-active");
        menuToggle.setAttribute("aria-expanded", isOpen);
        body.classList.toggle("menu-open", isOpen);
      });
    }

    // Hide header on scroll down, show on scroll up
    let lastScroll = 0;
    const scrollThreshold = 100;

    const handleHeaderScroll = throttle(() => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        header.classList.remove("is-hidden");
        return;
      }

      if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
        header.classList.add("is-hidden");
      } else if (currentScroll < lastScroll) {
        header.classList.remove("is-hidden");
      }

      lastScroll = currentScroll;
    }, 100);

    window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  }

  // ============================================================================
  // SCROLL STATE
  // ============================================================================

  function initScrollState() {
    const update = throttle(() => {
      const scrollTop = window.pageYOffset;
      const scrollBottom = scrollTop + window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      html.classList.toggle("is-stopped-top", scrollTop <= 10);
      html.classList.toggle("is-scrolled", scrollTop > 50);
      html.classList.toggle(
        "is-stopped-bottom",
        scrollBottom >= docHeight - 10
      );
    }, 100);

    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  // ============================================================================
  // FOCUS VISIBLE POLYFILL
  // ============================================================================

  function initFocusVisible() {
    try {
      document.querySelector(":focus-visible");
      return;
    } catch (_) {}

    let hadKeyboardEvent = false;

    const events = {
      keydown: () => {
        hadKeyboardEvent = true;
      },
      mousedown: () => {
        hadKeyboardEvent = false;
      },
      pointerdown: () => {
        hadKeyboardEvent = false;
      },
    };

    Object.entries(events).forEach(([event, handler]) => {
      document.addEventListener(event, handler, { passive: true });
    });

    document.addEventListener("focusin", (e) => {
      if (hadKeyboardEvent) e.target.classList.add("focus-visible");
    });

    document.addEventListener("focusout", (e) => {
      e.target.classList.remove("focus-visible");
    });
  }

  // ============================================================================
  // CTA BANNER EFFECTS
  // ============================================================================

  function initCTABanners() {
    const banners = document.querySelectorAll("[data-cta-banner], .cta-banner");

    banners.forEach((banner) => {
      const btn = banner.querySelector("a, button");
      if (!btn) return;

      // Magnetic effect on hover
      banner.addEventListener("mousemove", (e) => {
        if (prefersReduced) return;

        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        btn.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
      });

      banner.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  }

  // ============================================================================
  // VIDEO PLAYERS
  // ============================================================================

  function initVideoPlayers() {
    const videos = document.querySelectorAll("video[data-autoplay]");

    videos.forEach((video) => {
      if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                video.play().catch(() => {});
              } else {
                video.pause();
              }
            });
          },
          { threshold: 0.5 }
        );

        observer.observe(video);
      }
    });
  }

  // ============================================================================
  // PAGE TRANSITIONS (Swup-like)
  // ============================================================================

  function initPageTransitions() {
    if (prefersReduced) return;

    const overlay = document.createElement("div");
    overlay.className = "swup-transition-overlay";
    overlay.setAttribute("data-direction", "to-right");
    body.appendChild(overlay);

    document.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link || link.getAttribute("target") === "_blank") return;
      if (link.hostname !== window.location.hostname) return;
      if (link.hash) return;

      e.preventDefault();

      html.classList.add("is-changing", "is-animating");

      setTimeout(() => {
        html.classList.remove("is-animating");
        html.classList.add("is-rendering");

        setTimeout(() => {
          window.location.href = link.href;
        }, 300);
      }, 600);
    });
  }

  // ============================================================================
  // INITIALIZATION
  // ============================================================================

  ready(() => {
    hidePreloader();
    initSplitAnimations();
    initScrollReveals();
    initParallax();
    initScrollAnimations();
    initMarquee();
    initMontageReveal();
    initSmoothScroll();
    initModals();
    initForms();
    initLazyLoad();
    initNavigation();
    initScrollState();
    initFocusVisible();
    initCTABanners();
    initVideoPlayers();
    initPageTransitions();

    // Mark as loaded
    setTimeout(() => {
      html.classList.add("has-loaded");
    }, 100);
  });

  // Expose utilities globally if needed
  window.siteUtils = {
    debounce,
    throttle,
    openModal,
    closeModal,
  };
})();
