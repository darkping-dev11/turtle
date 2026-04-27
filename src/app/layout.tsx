import type { Metadata } from 'next';
import '../styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'XYZE - Modern Web Platform',
  description: 'Building tomorrow\'s web today with cutting-edge technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-dark text-light">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
