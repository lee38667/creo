import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Creo Media - Premium Digital Creative Services',
  description:
    'We craft extraordinary digital experiences that elevate brands and engage audiences. From concept to delivery, strategic creativity.',
  keywords: ['branding', 'web design', 'digital marketing', 'creative agency'],
  authors: [{ name: 'Creo Media' }],
  creator: 'Creo Media',
  publisher: 'Creo Media',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://creomedia.com',
    siteName: 'Creo Media',
    title: 'Creo Media - Premium Digital Creative Services',
    description:
      'We craft extraordinary digital experiences that elevate brands and engage audiences.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creo Media - Premium Digital Creative Services',
    description:
      'We craft extraordinary digital experiences that elevate brands and engage audiences.',
  },
  metadataBase: new URL('https://creomedia.com'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#0d0d0d" />
      </head>
      <body className="overflow-x-hidden">
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Creo Media',
              url: 'https://creomedia.com',
              logo: 'https://creomedia.com/logo.png',
              sameAs: [
                'https://instagram.com/creomedia',
                'https://linkedin.com/company/creomedia',
                'https://twitter.com/creomedia',
              ],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'Customer Service',
                email: 'hello@creomedia.com',
                telephone: '+1-555-123-4567',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
