import type { Metadata, Viewport } from 'next';
import { Inter, Orbitron, Michroma, Cairo } from 'next/font/google';
import '@/styles/globals.css';
import Navigation from '@/components/layout/Navigation';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });
const michroma = Michroma({ weight: '400', subsets: ['latin'], variable: '--font-michroma' });
const cairo = Cairo({ 
  subsets: ['latin'],
  variable: '--font-cairo',
  weight: ['400', '600', '700'],
});

export const viewport: Viewport = {
  themeColor: '#1f2937',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'CG Model Tek LLC',
  description: 'Professional 3D Modeling and Design Services',
  metadataBase: new URL('https://cgmodeltek.com'),
  openGraph: {
    title: 'CG Model Tek LLC',
    description: 'Professional 3D Modeling and Design Services',
    url: 'https://cgmodeltek.com',
    siteName: 'CG Model Tek LLC',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CG Model Tek LLC',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CG Model Tek LLC',
    description: 'Professional 3D Modeling and Design Services',
    images: ['/images/og-image.jpg'],
  },
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
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://cgmodeltek.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} ${orbitron.variable} ${michroma.variable} ${cairo.variable} min-h-screen bg-gray-800`}>
        <ErrorBoundary>
          <Navigation />
          <main className="flex-1">{children}</main>
        </ErrorBoundary>
      </body>
    </html>
  );
} 