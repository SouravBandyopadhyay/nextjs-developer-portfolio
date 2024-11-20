import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { SocialBar } from '@/components/social-bar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'John Doe | Full Stack Developer',
  description: 'Portfolio of John Doe - Full Stack Developer specializing in modern web technologies',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navigation />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
            <SocialBar />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}