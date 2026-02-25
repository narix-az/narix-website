import type { Metadata } from 'next';
import { Syne, DM_Sans } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Orbs from '@/components/shared/Orbs';

const syne = Syne({
  subsets: ['latin'],
  variable: '--font-syne',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Narix – AI Business Solutions',
    template: '%s | Narix',
  },
  description:
    'Narix delivers AI-powered business solutions: workflow automation, chatbots, content & branding, analytics, and web development.',
  keywords: ['AI', 'business solutions', 'automation', 'chatbots', 'analytics'],
  openGraph: {
    title: 'Narix – AI Business Solutions',
    description: 'Transform your business with AI-powered solutions.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>
        <Orbs />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
