import type { Metadata } from 'next';
import ToolbarHost from '@/components/ToolbarHost';
import '@/app/styles/critical.css';
import '@/app/styles/reset.css';
import '@/app/styles/responsive-enhancements.css';
import '@/app/styles/app.css';
import '@/app/styles/block_header-header-css.css';
import '@/app/styles/block_hero-hero-css.css';
import '@/app/styles/block_center-text-center-text-css.css';
import '@/app/styles/block_montage-reveal-montage-reveal-css.css';
import '@/app/styles/block_text-marquee-text-marquee-css.css';
import '@/app/styles/block_text-img-scatter-text-img-scatter-css.css';
import '@/app/styles/block_headlines-headlines-css.css';
import '@/app/styles/block_cta-banner-cta-banner-css.css';
import '@/app/styles/block_footer-footer-css.css';
import '@/app/styles/block_modal-media-form-modal-media-form-css.css';
import '@/app/styles/cinematic-scroll.css';
import '@/app/styles/main.css';

export const metadata: Metadata = {
  title: 'Creo Media - Premium African Creative Powerhouse',
  description: 'World-class content marketing and creative solutions delivered by Creo Media',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'Creo Media',
    title: 'Creo Media',
    images: [
      {
        url: '/assets/logoCreo.svg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creo Media',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="js">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=PT+Serif:wght@400&family=Open+Sans:wght@400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="home wp-singular page-template-default page page-id-83 wp-theme-eight80 page-homepage">
        <ToolbarHost />
        {children}
      </body>
    </html>
  );
}
