import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ViewportScript from '@/components/ViewportScript';

export default function Home() {
  return (
    <>
      <ViewportScript />
      <Preloader />
      <Header />
      
      <main id="main-content" data-load-container="">
        <div id="swup" className="page transition-default">
          <Hero />

          {/* Services Section */}
          <section
            id="services"
            style={{
              background: '#fafafa',
              paddingBlock: 'clamp(70px, calc(52.5px + 4.16667cqw), 120px)',
            }}
            data-cid="center-text"
            className="block-center-text c-center-text u-default"
          >
            <div className="block_inner u-container u-container--1 u-container--pad">
              <hgroup className="head">
                <div className="head_title u-wysiwyg-text--1">
                  <h2>Our Services</h2>
                </div>
                <div className="head_subtitle u-wysiwyg-text--1">
                  End-to-end creative solutions
                </div>
              </hgroup>
              <div className="content">
                <div className="text u-wysiwyg-text--1 u-wysiwyg-lists--1">
                  <h3>Content Production</h3>
                  <p>
                    From cinematic video production to stunning photography and compelling
                    design, we bring your brand story to life.
                  </p>

                  <h3>Social Media Strategy</h3>
                  <p>
                    Strategic social media management that keeps your brand at the forefront
                    of innovative marketing.
                  </p>

                  <h3>Events & Activations</h3>
                  <p>
                    Corporate events, weddings, and brand activations that create
                    unforgettable experiences.
                  </p>

                  <h3>Training & Masterclasses</h3>
                  <p>
                    Empower your team with cutting-edge creative and marketing skills.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section
            id="portfolio"
            style={{
              background: '#ffffff',
              paddingBlock: 'clamp(70px, calc(52.5px + 4.16667cqw), 120px)',
            }}
            data-cid="center-text"
            className="block-center-text c-center-text u-default"
          >
            <div className="block_inner u-container u-container--1 u-container--pad">
              <hgroup className="head">
                <div className="head_title u-wysiwyg-text--1">
                  <h2>Our Work</h2>
                </div>
                <div className="head_subtitle u-wysiwyg-text--1">
                  Crafting experiences that matter
                </div>
              </hgroup>
              <div className="content">
                <div className="text u-wysiwyg-text--1 u-wysiwyg-lists--1">
                  <p>
                    We've partnered with leading brands across Africa to deliver premium
                    content, strategic campaigns, and unforgettable events.
                  </p>
                  <p>
                    From tourism campaigns to corporate launches, our portfolio showcases
                    the power of creative excellence.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sub-Brands Section */}
          <section
            style={{
              background: '#f0efed',
              paddingBlock: 'clamp(70px, calc(45.5px + 5.83333cqw), 140px)',
            }}
            data-cid="headlines"
            className="block-headlines c-headlines u-default"
          >
            <div className="block_inner u-container u-container--1 u-container--pad">
              <div className="heading u-wysiwyg-text--1">
                <h2>Our Ecosystem</h2>
                <div className="content">
                  <div className="text u-wysiwyg-text--1 u-wysiwyg-lists--1">
                    <h3>Savannah Weddings</h3>
                    <p>
                      Luxury wedding content and planning services that capture your
                      perfect day.
                    </p>

                    <h3>Masterclasses</h3>
                    <p>
                      Professional development workshops in content creation, social media,
                      and marketing strategy.
                    </p>

                    <h3>Ignited Collective</h3>
                    <p>
                      Our creative community bringing together the brightest minds in
                      African creative industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section
            id="contact"
            style={{
              background: '#1c3857',
              color: '#ffffff',
              paddingBlock: 'clamp(70px, calc(52.5px + 4.16667cqw), 120px)',
            }}
            data-cid="cta-banner"
            className="block-cta-banner c-cta-banner u-default"
          >
            <div className="block_inner u-container u-container--1 u-container--pad">
              <hgroup className="head">
                <div className="head_title u-wysiwyg-text--1">
                  <h2>Let's Create Together</h2>
                </div>
                <div className="head_subtitle u-wysiwyg-text--1">
                  Ready to elevate your brand?
                </div>
              </hgroup>
              <div className="content">
                <a
                  className="button u-btn--1"
                  href="mailto:hello@creomedia.com"
                  aria-label="Contact Creo Media"
                  target="_self"
                >
                  <span className="btn_label">Get in Touch</span>
                </a>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer
            style={{
              background: '#0a1929',
              color: '#ffffff',
              paddingBlock: 'clamp(40px, calc(30px + 2.5cqw), 80px)',
            }}
            data-cid="footer"
            className="c-footer"
          >
            <div className="block_inner u-container u-container--1 u-container--pad">
              <div className="footer_content" style={{ textAlign: 'center' }}>
                <div className="footer_logo">
                  <img
                    src="/assets/logoCreo.svg"
                    alt="Creo Media"
                    style={{ maxWidth: '200px', margin: '0 auto 2rem' }}
                  />
                </div>
                <div className="footer_text">
                  <p>Premium African creative powerhouse</p>
                  <p style={{ marginTop: '1rem', opacity: 0.7 }}>
                    © 2025 Creo Media. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
}
