 import '@/app/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'J832 Protocol',
  description: 'Blockchain-based integrity verification system.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white flex flex-col min-h-screen">
        
        <Navbar />
        <div className="h-20 md:h-24"></div>

        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}




