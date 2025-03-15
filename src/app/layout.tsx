import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navigation from '@/components/layout/Navigation';
import { ErrorBoundary } from '@/components/common/ErrorBoundary';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  themeColor: '#1f2937',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: '%s | CG Model Tek',
    default: 'CG Model Tek - Precision Engineering for Aerospace Excellence',
  },
  description: 'High-quality wind tunnel models, rapid prototyping, and engineering solutions for aerospace, defense, and industrial applications.',
  keywords: ['wind tunnel', 'aerospace', 'engineering', 'prototyping', 'manufacturing'],
  authors: [{ name: 'CG Model Tek' }],
  creator: 'CG Model Tek',
  publisher: 'CG Model Tek',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cgmodeltek.com',
    siteName: 'CG Model Tek',
    title: 'CG Model Tek - Precision Engineering for Aerospace Excellence',
    description: 'High-quality wind tunnel models, rapid prototyping, and engineering solutions for aerospace, defense, and industrial applications.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CG Model Tek - Precision Engineering for Aerospace Excellence',
    description: 'High-quality wind tunnel models, rapid prototyping, and engineering solutions for aerospace, defense, and industrial applications.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; img-src 'self' data: https:; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />
        <meta httpEquiv="Permissions-Policy" content="camera=(), microphone=(), geolocation=(), interest-cohort=()" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-800`}>
        <ErrorBoundary>
          <Navigation />
          <main className="flex-1">{children}</main>
        </ErrorBoundary>
      </body>
    </html>
  );
} 