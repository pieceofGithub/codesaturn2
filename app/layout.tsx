import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ['latin'],
  variable: '--font-space-grotesk',
});

export const metadata: Metadata = {
  title: {
    default: 'CODESATURN - Futuristic Software Development',
    template: '%s | CODESATURN'
  },
  description: 'Cutting-edge software development solutions from the cosmos. We build tomorrow\'s technology today.',
  keywords: ['software development', 'web development', 'mobile apps', 'AI solutions', 'blockchain', 'futuristic tech'],
  authors: [{ name: 'CODESATURN Team' }],
  creator: 'CODESATURN',
  publisher: 'CODESATURN',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://codesaturn.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://codesaturn.com',
    title: 'CODESATURN - Futuristic Software Development',
    description: 'Cutting-edge software development solutions from the cosmos. We build tomorrow\'s technology today.',
    siteName: 'CODESATURN',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CODESATURN - Futuristic Software Development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CODESATURN - Futuristic Software Development',
    description: 'Cutting-edge software development solutions from the cosmos. We build tomorrow\'s technology today.',
    images: ['/og-image.jpg'],
    creator: '@codesaturn',
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
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-inter antialiased`}>
        <div className="relative min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}