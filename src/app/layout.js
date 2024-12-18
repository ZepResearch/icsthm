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
  title: "ICSTHM |International Conference on Sustainable Tourism & Hospitality Management",
  description: "a premier global event that brings together thought leaders, industry professionals, researchers, and innovators from around the world. ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
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
