import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastProvider } from '@/components/ui/ToastProvider';
import TawkToChat from "@/components/TawkToChat";
import { FloatingWhatsAppButton } from "@/components/whatsapp";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: 'ICSTHM 2025 - Sustainable Tourism & Hospitality Management',
  description: 'Join us at the International Conference on Sustainable Tourism & Hospitality Management in Bangkok, Thailand on April 24-25, 2025. Explore sustainable practices in tourism and hospitality.',
  keywords: [
    'tourism conference',
    'hospitality management',
    'sustainable tourism',
    'Bangkok conference',
    'ICSTHM 2025',
    'tourism sustainability',
    'hospitality conference',
    'Thailand conference'
  ],
  openGraph: {
    title: 'ICSTHM 2025 - International Conference on Sustainable Tourism & Hospitality Management',
    description: 'Join ICSTHM 2025 in Bangkok on April 24-25, 2025. Explore sustainable tourism and hospitality management practices with global experts.',
    url: 'https://www.icsthm.com',
    siteName: 'ICSTHM 2025',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ICSTHM 2025 Conference Banner'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ICSTHM 2025 - International Conference on Sustainable Tourism & Hospitality Management',
    description: 'International Conference on Sustainable Tourism & Hospitality Management - Bangkok, Thailand (April 24-25, 2025)',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://www.icsthm.com'
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
  },
  other: {
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'DENY',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased mt-12`}
      >
        <Navbar/>
        {children}
        <Footer/>
        <TawkToChat/>
       <ToastProvider />
       <FloatingWhatsAppButton phoneNumber="8260080050" message="How can we assist you?

" />
      </body>
  
    </html>
  );
}
